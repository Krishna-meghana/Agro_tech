from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import requests
import sqlite3
import hashlib
import tempfile
from dotenv import load_dotenv
import google.generativeai as genai

env_path = os.path.join(os.path.dirname(__file__), '.env')
load_dotenv(dotenv_path=env_path)
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

app = FastAPI(title="AgroGuard API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = os.path.join(tempfile.gettempdir(), "users.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS users
                 (username TEXT PRIMARY KEY, password TEXT)''')
    conn.commit()
    conn.close()

init_db()

def hash_password(password: str, salt: bytes = None):
    if salt is None:
        salt = os.urandom(16)
    pw_hash = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)
    return salt.hex() + ":" + pw_hash.hex()

def verify_password(password: str, hashed_str: str):
    try:
        salt_hex, hash_hex = hashed_str.split(':')
        salt = bytes.fromhex(salt_hex)
        return hash_password(password, salt) == hashed_str
    except Exception:
        return False

model = None
if GEMINI_API_KEY and GEMINI_API_KEY != "your_gemini_api_key_here":
    genai.configure(api_key=GEMINI_API_KEY)
    model = genai.GenerativeModel('gemini-2.5-flash')

def load_knowledge_base():
    try:
        kb_path = os.path.join(os.path.dirname(__file__), "agriculture_knowledge_base.txt")
        with open(kb_path, "r") as f:
            return f.read()
    except FileNotFoundError:
        return "No local knowledge base available."

KNOWLEDGE_BASE = load_knowledge_base()

from fastapi import HTTPException

class AuthRequest(BaseModel):
    username: str
    password: str

@app.post("/api/register")
async def register_user(req: AuthRequest):
    if not req.username or not req.password:
        raise HTTPException(status_code=400, detail="Username and password required")
    
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT username FROM users WHERE username=?", (req.username,))
    if c.fetchone():
        conn.close()
        raise HTTPException(status_code=400, detail="Username already exists")
        
    hashed_pw = hash_password(req.password)
    c.execute("INSERT INTO users (username, password) VALUES (?, ?)", (req.username, hashed_pw))
    conn.commit()
    conn.close()
    return {"message": "User created successfully"}

@app.post("/api/login")
async def login_user(req: AuthRequest):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT password FROM users WHERE username=?", (req.username,))
    row = c.fetchone()
    conn.close()
    
    if not row or not verify_password(req.password, row[0]):
        raise HTTPException(status_code=401, detail="Invalid username or password")
        
    return {"message": "Login successful", "username": req.username}

@app.post("/api/predict-disease")
async def predict_disease(file: UploadFile = File(...), language: str = Form("en")):
    """
    Simulated YOLO/CNN Vision API endpoint.
    If the simulated YOLO fails to recognize the image by filename,
    it falls back to sending the actual image pixels to OpenAI's Vision model.
    """
    filename = file.filename.lower()
    
    prediction = "Unknown Disease"
    confidence = 0.50
    bbox = [120, 150, 340, 480] # [x_min, y_min, x_max, y_max] simulated
    
    if "tomato" in filename or "blight" in filename:
        prediction = "Tomato Late Blight"
        confidence = 0.95
    elif "apple" in filename or "scab" in filename:
        prediction = "Apple Scab"
        confidence = 0.88
    elif "pear" in filename or "rust" in filename:
        prediction = "Pear Rust"
        confidence = 0.92
        
    treatment = "Consult a local agricultural expert."
    model_used = "YOLO/CNN (Simulated)"
    
    # If simulated YOLO fails, use real Gemini Vision for analysis
    if model and prediction == "Unknown Disease":
        file_bytes = await file.read()
        
        try:
            image_parts = [
                {
                    "mime_type": file.content_type,
                    "data": file_bytes
                }
            ]
            
            prompt = f"Analyze this crop leaf image. Briefly state the disease name and a 2 sentence treatment. Respond entirely in language (Code: '{language}'). If 'hi', use Hindi. If 'te', use Telugu."
            response = model.generate_content([prompt, image_parts[0]])
            treatment = response.text
            prediction = "AI Analyzed Disease"
            confidence = 0.90
            model_used = "Gemini 2.5 Flash Vision"
        except Exception as e:
            try:
                available_models = [m.name for m in genai.list_models() if 'generateContent' in m.supported_generation_methods]
                treatment = f"Vision AI Error: {str(e)}\n\nAvailable models on your key: {', '.join(available_models)}"
            except:
                treatment = f"Vision AI Error: {str(e)}"
            
    # If simulated YOLO succeeds, just ask Gemini for the treatment text
    elif model and prediction != "Unknown Disease":
        try:
            resp = model.generate_content(f"Provide a brief, 2-sentence treatment recommendation for {prediction}. Respond entirely in language (Code: '{language}'). If 'hi', use Hindi. If 'te', use Telugu.")
            treatment = resp.text
        except Exception as e:
            pass
            
    return {
        "status": "success",
        "model_type": model_used,
        "prediction": prediction,
        "confidence": confidence,
        "bounding_box": bbox,
        "treatment": treatment
    }

@app.get("/api/weather")
async def get_weather(lat: float = None, lon: float = None, location: str = None):
    """
    Weather API wrapper using Open-Meteo (No API Key Required).
    Supports either lat/lon or a location string.
    """
    try:
        location_name = "Your Location"
        
        if location:
            geo_url = f"https://geocoding-api.open-meteo.com/v1/search?name={location}&count=1&language=en&format=json"
            geo_response = requests.get(geo_url)
            if geo_response.status_code == 200:
                geo_data = geo_response.json()
                if geo_data.get("results"):
                    lat = geo_data["results"][0]["latitude"]
                    lon = geo_data["results"][0]["longitude"]
                    location_name = geo_data["results"][0]["name"]
                else:
                    return {"error": f"Location '{location}' not found"}
            else:
                return {"error": "Geocoding API failed"}
        elif lat is None or lon is None:
            return {"error": "Provide either lat/lon or a location name"}
        else:
            # Reverse geocoding if lat/lon provided
            try:
                geo_url = f"https://api.bigdatacloud.net/data/reverse-geocode-client?latitude={lat}&longitude={lon}&localityLanguage=en"
                geo_response = requests.get(geo_url, timeout=3)
                if geo_response.status_code == 200:
                    geo_data = geo_response.json()
                    location_name = geo_data.get("city") or geo_data.get("locality") or geo_data.get("principalSubdivision") or "Your Location"
            except Exception:
                pass

        url = f"https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto&forecast_days=4"
        response = requests.get(url)
        response.raise_for_status()
        data = response.json()
        
        current = data.get("current", {})
        daily = data.get("daily", {})
        
        def get_condition(c):
            if c in [0, 1]: return "Clear"
            elif c in [2, 3, 45, 48]: return "Clouds"
            elif c in [51, 53, 55, 56, 57]: return "Drizzle"
            elif c in [61, 63, 65, 66, 67, 80, 81, 82]: return "Rain"
            elif c in [71, 73, 75, 77, 85, 86]: return "Snow"
            elif c >= 95: return "Thunderstorm"
            else: return "Unknown"

        condition = get_condition(current.get("weather_code", 0))
        
        forecast = []
        if daily and "time" in daily:
            # daily returns today as index 0, tomorrow as 1, etc.
            for i in range(1, len(daily["time"])):
                forecast.append({
                    "date": daily["time"][i],
                    "max_temp": daily["temperature_2m_max"][i],
                    "min_temp": daily["temperature_2m_min"][i],
                    "condition": get_condition(daily["weather_code"][i])
                })

        # Format matches OpenWeatherMap to keep frontend unchanged
        return {
            "name": location_name,
            "main": {
                "temp": current.get("temperature_2m", 0),
                "humidity": current.get("relative_humidity_2m", 0)
            },
            "wind": {
                "speed": current.get("wind_speed_10m", 0)
            },
            "weather": [
                {"main": condition}
            ],
            "forecast": forecast
        }
    except Exception as e:
        return {"error": f"Failed to fetch weather: {str(e)}"}

class ChatRequest(BaseModel):
    message: str
    language: str = "en"

@app.post("/api/chat")
async def chat_assistant(req: ChatRequest):
    """
    AI Assistant combining RAG (local knowledge base) and LLM (OpenAI).
    """
    if not model:
        return {"response": "Error: Gemini API key not configured in backend .env file.", "warning": True}
        
    system_prompt = f"""
    You are an expert agronomist.
    Answer the user's question primarily based on the following Knowledge Base context.
    If the answer isn't in the context, use your general knowledge but keep it strictly agriculture-related.
    Respond entirely in language (Code: '{req.language}'). If 'hi', use Hindi. If 'te', use Telugu. Keep it concise (under 100 words) and format in Markdown.
    
    KNOWLEDGE BASE:
    {KNOWLEDGE_BASE}
    """
    
    try:
        response = model.generate_content(f"{system_prompt}\n\nUser: {req.message}")
        return {
            "response": response.text,
            "warning": False
        }
    except Exception as e:
        return {"response": f"AI Error: {str(e)}", "warning": True}

class SoilRequest(BaseModel):
    soil_type: str
    language: str = "en"

@app.post("/api/recommend-crops")
async def recommend_crops(req: SoilRequest):
    """
    AI-driven crop recommendations based on soil type.
    """
    if not model:
        return {"response": "Error: Gemini API key not configured.", "warning": True}
        
    system_prompt = f"""
    You are an expert agronomist. 
    The user has {req.soil_type} soil. 
    Recommend 3-5 optimal crops for this soil type. 
    Format the response in Markdown with bullet points. Provide a very brief 1-sentence growing tip for each crop.
    Respond entirely in language (Code: '{req.language}'). If 'hi', use Hindi. If 'te', use Telugu.
    """
    
    try:
        response = model.generate_content(system_prompt)
        return {
            "response": response.text,
            "warning": False
        }
    except Exception as e:
        return {"response": f"AI Error: {str(e)}", "warning": True}

class FertilizerRequest(BaseModel):
    crop_name: str
    soil_type: str
    language: str = "en"

@app.post("/api/recommend-fertilizer")
async def recommend_fertilizer(req: FertilizerRequest):
    """
    AI-driven fertilizer recommendations based on crop and soil type.
    """
    if not model:
        return {"response": "Error: Gemini API key not configured.", "warning": True}
        
    system_prompt = f"""
    You are an expert agronomist and soil scientist. 
    The user is growing {req.crop_name} in {req.soil_type} soil. 
    Recommend the optimal NPK (Nitrogen-Phosphorus-Potassium) ratio for this crop.
    Also provide a brief, actionable fertilizer application timing schedule (e.g., at sowing, vegetative stage).
    Format the response in Markdown with bullet points.
    Respond entirely in language (Code: '{req.language}'). If 'hi', use Hindi. If 'te', use Telugu.
    """
    
    try:
        response = model.generate_content(system_prompt)
        return {
            "response": response.text,
            "warning": False
        }
    except Exception as e:
        return {"response": f"AI Error: {str(e)}", "warning": True}
