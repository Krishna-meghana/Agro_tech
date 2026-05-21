// --- Translations Dictionary ---
const translations = {
    en: {
        login_subtitle: "Smart farming powered by AI",
        username: "Username",
        password: "Password",
        login_btn: "Sign In",
        nav_dashboard: "Dashboard",
        nav_advisory: "Crop Advisory",
        nav_history: "History",
        logout: "Logout",
        welcome: "Welcome back",
        dashboard_subtitle: "Here is your farm's overview today.",
        weather_now: "Current Weather",
        guidance: "Farming Guidance:",
        weather_advice_good: "Clear skies. Good conditions for spraying fertilizers or pesticides.",
        recent_activity: "Recent Activity",
        disease_detection: "Crop Disease Detection",
        advisory_subtitle: "Upload an image of the affected plant or chat with our AI.",
        drag_drop: "Drag and drop an image here",
        browse_files: "Browse Files",
        analyze_image: "Analyze Image",
        ai_advisor: "Agro AI Advisor",
        ai_greeting: "Hello! Please upload a clear image of the crop leaf, or describe the symptoms you are seeing.",
        chat_placeholder: "Describe symptoms...",
        history_subtitle: "Your past analyses and recommendations.",
        expert_warning: "WARNING: This AI analysis has limitations. Please consult a local agricultural expert before applying heavy chemical treatments.",
        nav_settings: "Settings",
        settings_subtitle: "Configure your application preferences.",
        api_configuration: "API Configuration",
        api_description: "Enter your API keys to enable live weather and accurate OpenAI disease detection.",
        openai_placeholder: "Enter OpenAI API Key (sk-...)",
        weather_placeholder: "Enter OpenWeatherMap API Key",
        save_settings: "Save Settings",
        settings_saved: "Settings saved successfully!",
        no_api_key: "Please enter your OpenAI API Key in the Settings tab to use the AI."
    },
    hi: {
        login_subtitle: "एआई द्वारा संचालित स्मार्ट खेती",
        username: "उपयोगकर्ता नाम",
        password: "पासवर्ड",
        login_btn: "साइन इन करें",
        nav_dashboard: "डैशबोर्ड",
        nav_advisory: "फसल सलाह",
        nav_history: "इतिहास",
        logout: "लॉग आउट",
        welcome: "वापसी पर स्वागत है",
        dashboard_subtitle: "आज आपके खेत का अवलोकन यहां दिया गया है।",
        weather_now: "वर्तमान मौसम",
        guidance: "कृषि मार्गदर्शन:",
        weather_advice_good: "आसमान साफ है। उर्वरक या कीटनाशक छिड़काव के लिए अच्छी स्थिति है।",
        recent_activity: "हाल की गतिविधि",
        disease_detection: "फसल रोग का पता लगाना",
        advisory_subtitle: "प्रभावित पौधे की छवि अपलोड करें या हमारे एआई के साथ चैट करें।",
        drag_drop: "यहां एक छवि खींचें और छोड़ें",
        browse_files: "फ़ाइलें ब्राउज़ करें",
        analyze_image: "छवि का विश्लेषण करें",
        ai_advisor: "एग्रो एआई सलाहकार",
        ai_greeting: "नमस्ते! कृपया फसल की पत्ती की स्पष्ट छवि अपलोड करें, या आप जो लक्षण देख रहे हैं उनका वर्णन करें।",
        chat_placeholder: "लक्षणों का वर्णन करें...",
        history_subtitle: "आपके पिछले विश्लेषण और सिफारिशें।",
        expert_warning: "चेतावनी: इस एआई विश्लेषण की सीमाएँ हैं। कृपया भारी रासायनिक उपचार लागू करने से पहले किसी स्थानीय कृषि विशेषज्ञ से सलाह लें।",
        nav_settings: "सेटिंग्स",
        settings_subtitle: "अपनी एप्लिकेशन प्राथमिकताएं कॉन्फ़िगर करें।",
        api_configuration: "API कॉन्फ़िगरेशन",
        api_description: "लाइव मौसम और सटीक OpenAI रोग का पता लगाने को सक्षम करने के लिए अपनी API कुंजियाँ दर्ज करें।",
        openai_placeholder: "OpenAI API कुंजी दर्ज करें",
        weather_placeholder: "OpenWeatherMap API कुंजी दर्ज करें",
        save_settings: "सेटिंग्स सहेजें",
        settings_saved: "सेटिंग्स सफलतापूर्वक सहेजी गईं!",
        no_api_key: "कृपया AI का उपयोग करने के लिए सेटिंग्स टैब में अपनी OpenAI API कुंजी दर्ज करें।"
    },
    te: {
        login_subtitle: "AI ఆధారిత స్మార్ట్ వ్యవసాయం",
        username: "వినియోగదారు పేరు",
        password: "పాస్వర్డ్",
        login_btn: "సైన్ ఇన్ చేయండి",
        nav_dashboard: "డాష్‌బోర్డ్",
        nav_advisory: "పంట సలహా",
        nav_history: "చరిత్ర",
        logout: "లాగ్అవుట్",
        welcome: "స్వాగతం",
        dashboard_subtitle: "ఈ రోజు మీ పొలం యొక్క అవలోకనం ఇక్కడ ఉంది.",
        weather_now: "ప్రస్తుత వాతావరణం",
        guidance: "వ్యవసాయ మార్గదర్శకత్వం:",
        weather_advice_good: "ఆకాశం నిర్మలంగా ఉంది. ఎరువులు లేదా పురుగుమందులు పిచికారీ చేయడానికి మంచి పరిస్థితులు.",
        recent_activity: "ఇటీవలి కార్యాచరణ",
        disease_detection: "పంట వ్యాధి గుర్తింపు",
        advisory_subtitle: "ప్రభావిత మొక్క యొక్క చిత్రాన్ని అప్‌లోడ్ చేయండి లేదా మా AIతో చాట్ చేయండి.",
        drag_drop: "ఇక్కడ చిత్రాన్ని లాగి వదలండి",
        browse_files: "ఫైళ్లను బ్రౌజ్ చేయండి",
        analyze_image: "చిత్రాన్ని విశ్లేషించండి",
        ai_advisor: "ఆగ్రో AI సలహాదారు",
        ai_greeting: "నమస్కారం! దయచేసి పంట ఆకు యొక్క స్పష్టమైన చిత్రాన్ని అప్‌లోడ్ చేయండి లేదా మీరు చూస్తున్న లక్షణాలను వివరించండి.",
        chat_placeholder: "లక్షణాలను వివరించండి...",
        history_subtitle: "మీ గత విశ్లేషణలు మరియు సిఫార్సులు.",
        expert_warning: "హెచ్చరిక: ఈ AI విశ్లేషణకు పరిమితులు ఉన్నాయి. దయచేసి భారీ రసాయన చికిత్సలను వర్తించే ముందు స్థానిక వ్యవసాయ నిపుణుడిని సంప్రదించండి.",
        nav_settings: "సెట్టింగ్‌లు",
        settings_subtitle: "మీ అప్లికేషన్ ప్రాధాన్యతలను కాన్ఫిగర్ చేయండి.",
        api_configuration: "API కాన్ఫిగరేషన్",
        api_description: "ప్రత్యక్ష వాతావరణం మరియు ఖచ్చితమైన OpenAI వ్యాధి గుర్తింపును ప్రారంభించడానికి మీ API కీలను నమోదు చేయండి.",
        openai_placeholder: "OpenAI API కీని నమోదు చేయండి",
        weather_placeholder: "OpenWeatherMap API కీని నమోదు చేయండి",
        save_settings: "సెట్టింగ్‌లను సేవ్ చేయండి",
        settings_saved: "సెట్టింగ్‌లు విజయవంతంగా సేవ్ చేయబడ్డాయి!",
        no_api_key: "AIని ఉపయోగించడానికి దయచేసి సెట్టింగ్‌ల ట్యాబ్‌లో మీ OpenAI API కీని నమోదు చేయండి."
    }
};

let currentLang = 'en';
const API_BASE = (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.protocol === 'file:') ? 'http://localhost:8000' : '';

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
    checkAuthStatus();
    initLanguage();
    setupEventListeners();
    loadHistory();
    
    fetchWeather();
});

// --- Authentication ---
function checkAuthStatus() {
    const user = localStorage.getItem('agroUser');
    if (user) {
        document.getElementById('user-display-name').textContent = user;
        showPage('app-layout');
    } else {
        showPage('login-page');
    }
}

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    if (username.length > 2) {
        localStorage.setItem('agroUser', username);
        document.getElementById('user-display-name').textContent = username;
        showPage('app-layout');
        loadSettings();
        loadHistory();
        fetchWeather();
    }
});

document.getElementById('logout-btn').addEventListener('click', () => {
    localStorage.removeItem('agroUser');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    showPage('login-page');
});

// --- Navigation & UI ---
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

function showContent(sectionId) {
    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

function setupEventListeners() {
    // Sidebar Navigation
    document.querySelectorAll('.nav-links li').forEach(item => {
        item.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            showContent(`page-${target.dataset.page}`);
        });
    });

    // Language Selector
    document.getElementById('lang-select').addEventListener('change', (e) => {
        currentLang = e.target.value;
        updateLanguage();
    });

    // Image Upload
    const fileUpload = document.getElementById('file-upload');
    fileUpload.addEventListener('change', handleImageUpload);
    
    document.getElementById('analyze-btn').addEventListener('click', analyzeImage);
    
    // Chat
    document.getElementById('send-btn').addEventListener('click', handleChat);
    document.getElementById('chat-input-field').addEventListener('keypress', (e) => {
        if(e.key === 'Enter') handleChat();
    });

    // Settings
    document.getElementById('save-settings-btn').addEventListener('click', () => {
        const user = localStorage.getItem('agroUser');
        const manualLoc = document.getElementById('manual-location').value;
        localStorage.setItem(`agroSettings_${user}`, JSON.stringify({ location: manualLoc }));
        
        const statusEl = document.getElementById('settings-status');
        statusEl.textContent = translations[currentLang].settings_saved;
        statusEl.style.display = 'block';
        setTimeout(() => statusEl.style.display = 'none', 3000);
        
        fetchWeather();
    });
}

function loadSettings() {
    const user = localStorage.getItem('agroUser');
    const settings = JSON.parse(localStorage.getItem(`agroSettings_${user}`) || '{}');
    if (settings.location) {
        document.getElementById('manual-location').value = settings.location;
    } else {
        document.getElementById('manual-location').value = '';
    }
}

// --- i18n (Localization) ---
function initLanguage() {
    const savedLang = localStorage.getItem('agroLang');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        document.getElementById('lang-select').value = savedLang;
    }
    updateLanguage();
}

function updateLanguage() {
    localStorage.setItem('agroLang', currentLang);
    const dict = translations[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if(key === 'welcome') {
                const user = localStorage.getItem('agroUser') || 'Farmer';
                el.innerHTML = `${dict[key]}, <span id="user-display-name">${user}</span>!`;
            } else {
                el.textContent = dict[key];
            }
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) {
            el.placeholder = dict[key];
        }
    });
}

// --- Live Weather (Backend Wrapper) ---
function fetchWeather() {
    const user = localStorage.getItem('agroUser');
    const settings = JSON.parse(localStorage.getItem(`agroSettings_${user}`) || '{}');
    
    document.getElementById('location-name').textContent = "Loading...";
    
    const fetchWeatherAPI = async (queryParams) => {
        try {
            const res = await fetch(`${API_BASE}/api/weather?${queryParams}`);
            if (!res.ok) throw new Error("Backend Weather Error");
            const data = await res.json();
            
            if (data.error) throw new Error(data.error);
            
            document.getElementById('location-name').textContent = data.name;
            document.getElementById('temp-val').textContent = Math.round(data.main.temp);
            document.getElementById('humidity-val').textContent = data.main.humidity + "%";
            document.getElementById('wind-val').textContent = data.wind.speed + " km/h";
            
            const condition = data.weather[0].main.toLowerCase();
            const guidanceEl = document.getElementById('weather-guidance');
            
            if (condition.includes('rain') || condition.includes('drizzle')) {
                guidanceEl.textContent = "Rain expected. Do not spray fertilizers or pesticides today.";
                guidanceEl.style.borderLeftColor = "var(--danger)";
                guidanceEl.style.backgroundColor = "rgba(239, 68, 68, 0.1)";
            } else if (condition.includes('clear') || condition.includes('clouds')) {
                guidanceEl.textContent = translations[currentLang].weather_advice_good;
                guidanceEl.style.borderLeftColor = "var(--accent)";
                guidanceEl.style.backgroundColor = "rgba(163, 230, 53, 0.1)";
            }
        } catch (e) {
            console.error(e);
            document.getElementById('location-name').textContent = "API Error";
        }
    };

    if (settings.location && settings.location.trim() !== '') {
        fetchWeatherAPI(`location=${encodeURIComponent(settings.location.trim())}`);
    } else {
        navigator.geolocation.getCurrentPosition(
            (pos) => fetchWeatherAPI(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`),
            (err) => document.getElementById('location-name').textContent = "Location Denied"
        );
    }
}

// --- Advisory & Disease Detection (OpenAI GPT-4o) ---
let uploadedImageName = "";
let uploadedImageBase64 = "";
let uploadedImageMimeType = "";

let uploadedFileObj = null;

function handleImageUpload(e) {
    const file = e.target.files[0];
    if (file) {
        uploadedFileObj = file;
        uploadedImageName = file.name;
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('preview-img').src = event.target.result;
            document.getElementById('drop-zone').classList.add('hidden');
            document.getElementById('image-preview').classList.remove('hidden');
        }
        reader.readAsDataURL(file);
    }
}

async function analyzeImage() {
    if (!uploadedFileObj) return;

    const btn = document.getElementById('analyze-btn');
    btn.textContent = "Analyzing...";
    btn.disabled = true;

    document.getElementById('drop-zone').classList.remove('hidden');
    document.getElementById('image-preview').classList.add('hidden');
    
    addChatMessage("user", `[Uploaded Image: ${uploadedImageName}] Please analyze this crop leaf.`);

    const formData = new FormData();
    formData.append("file", uploadedFileObj);

    try {
        const response = await fetch(`${API_BASE}/api/predict-disease`, {
            method: "POST",
            body: formData
        });
        
        if (!response.ok) throw new Error("Failed to connect to backend Vision API");
        const data = await response.json();
        
        const responseText = `**Diagnosis:** ${data.prediction}\n**Confidence:** ${(data.confidence * 100).toFixed(1)}%\n**Treatment:** ${data.treatment}\n\n*(Model: ${data.model_type})*`;
        
        addChatMessage("ai", responseText, true); // true = include expert warning
        saveHistoryItem(`Image Analysis: ${uploadedImageName}`, `${(data.confidence * 100).toFixed(0)}% Confidence`, `Analyzed via YOLO/CNN backend.`);
    } catch (error) {
        addChatMessage("ai", `Error: ${error.message}. Is the backend running?`);
    }

    btn.textContent = translations[currentLang].analyze_image;
    btn.disabled = false;
    document.getElementById('file-upload').value = "";
    uploadedFileObj = null;
}

async function handleChat() {
    const input = document.getElementById('chat-input-field');
    const text = input.value.trim();
    if (!text) return;
    
    addChatMessage("user", text);
    input.value = "";
    
    try {
        const response = await fetch(`${API_BASE}/api/chat`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: text, language: currentLang })
        });
        
        if (!response.ok) throw new Error("Failed to connect to backend Chat API");
        const data = await response.json();
        
        addChatMessage("ai", data.response, data.warning);
        saveHistoryItem("AI Consultation", "RAG Verified", "Text consultation via Backend AI.");
    } catch (error) {
        addChatMessage("ai", `Error: ${error.message}. Is the backend running?`);
    }
}

function addChatMessage(sender, text, includeWarning = false) {
    const chatContainer = document.getElementById('chat-messages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    
    let contentHtml = `<div class="message-content">${marked.parse ? marked.parse(text) : text.replace(/\n/g, '<br>')}</div>`;
    
    if (sender === 'ai' && includeWarning) {
        const warningTxt = translations[currentLang].expert_warning;
        contentHtml = `<div class="message-content">
            ${marked.parse ? marked.parse(text) : text.replace(/\n/g, '<br>')}
            <div class="expert-warning"><i data-lucide="alert-octagon" class="icon-sm" style="display:inline; margin-bottom:-2px;"></i> ${warningTxt}</div>
        </div>`;
    }
    
    msgDiv.innerHTML = contentHtml;
    chatContainer.appendChild(msgDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    lucide.createIcons();
}

// --- History Management ---
function saveHistoryItem(title, confidence, desc) {
    const user = localStorage.getItem('agroUser') || 'default';
    const history = JSON.parse(localStorage.getItem(`agroHistory_${user}`) || '[]');
    const date = new Date().toLocaleDateString();
    history.unshift({ title, confidence, desc, date }); 
    localStorage.setItem(`agroHistory_${user}`, JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const user = localStorage.getItem('agroUser') || 'default';
    const list = document.getElementById('history-list');
    const history = JSON.parse(localStorage.getItem(`agroHistory_${user}`) || '[]');
    
    if (history.length === 0) {
        list.innerHTML = `<p style="color: var(--text-muted)">No past history found.</p>`;
        return;
    }
    
    list.innerHTML = history.map(item => `
        <div class="history-item">
            <div class="history-details">
                <h4>${item.title}</h4>
                <p>${item.desc} • ${item.date}</p>
            </div>
            <div class="confidence-badge">${item.confidence} Confidence</div>
        </div>
    `).join('');
}
