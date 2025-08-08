let video, canvas, overlay, qrScanner, qrGenerator;
let isScanning = false;
let faceCount = 0;
let qrCount = 0;
let securityScore = 100;
let currentThreatLevel = 'SECURE';
let scanMode = 'FACE';
let panicModeActive = false;

const ridiculousComments = [
    "Analyzing facial quantum signatures...",
    "Cross-referencing with interdimensional database...",
    "Checking for reptilian overlord DNA markers...",
    "Scanning for time traveler anomalies...",
    "Detecting probability of being a robot...",
    "Measuring eyeball sphericity index...",
    "Calculating nose-to-ear ratio significance...",
    "Searching for hidden superpowers...",
    "Verifying human authenticity certificate...",
    "Analyzing comedic potential of subject..."
];

const qrMessages = [
    "SECRET_AGENT_007",
    "I_LIKE_PIZZA",
    "DEFINITELY_NOT_A_ROBOT",
    "THE_CAKE_IS_A_LIE",
    "42_IS_THE_ANSWER",
    "WINTER_IS_COMING",
    "MAY_THE_FORCE_BE_WITH_YOU",
    "HELLO_WORLD",
    "ACCESS_GRANTED_TO_NOWHERE",
    "YOU_FOUND_THE_EASTER_EGG"
];

function addLog(message, type = 'normal') {
    const log = document.getElementById('security-log');
    const entry = document.createElement('div');
    entry.className = `log-entry ${type ? 'log-' + type : ''}`;
    entry.innerHTML = `[${new Date().toLocaleTimeString()}] ${message}`;
    log.appendChild(entry);
    log.scrollTop = log.scrollHeight;
}

function updateStatus(message) {
    document.getElementById('current-status').textContent = message;
}

function updateThreatLevel(level) {
    const threatElement = document.getElementById('threat-level');
    threatElement.textContent = level;
    threatElement.className = `threat-level level-${level.toLowerCase().replace(' ', '-')}`;
    if (level === 'PANIC') {
        threatElement.className = 'threat-level level-red';
        document.body.style.animation = 'shake 0.5s infinite';
    } else {
        document.body.style.animation = 'none';
    }
}

function updateMetrics() {
    document.getElementById('face-count').textContent = faceCount;
    document.getElementById('qr-scanned').textContent = qrCount;
    document.getElementById('security-score').textContent = securityScore;
    document.getElementById('confidence-level').textContent = Math.floor(Math.random() * 100) + '%';
}

async function startCamera() {
    addLog("🎥 Initiating quantum surveillance protocols...", "success");
    try {
        video = document.getElementById('video');
        overlay = document.getElementById('overlay');
        const ctx = overlay.getContext('2d');

        const stream = await navigator.mediaDevices.getUserMedia({
            video: { width: 640, height: 480 }
        });
        video.srcObject = stream;

        video.addEventListener('loadedmetadata', () => {
            overlay.width = video.videoWidth;
            overlay.height = video.videoHeight;
        });

        addLog("📸 Camera activated. Beginning facial comedy analysis...", "success");
        updateStatus("🔍 Scanning for suspicious eyeballs...");

        // Simulated loading
        setTimeout(() => { startFaceDetection(); }, 2000);

    } catch (error) {
        addLog("❌ Camera access denied. Switching to imagination mode...", "error");
        updateStatus("😵 No camera detected. Using psychic powers instead.");
    }
}

function startFaceDetection() {
    const canvas = overlay;
    const ctx = canvas.getContext('2d');

    function detectFaces() {
        if (!video.videoWidth) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Simulate face detection with random boxes
        if (Math.random() > 0.3) {
            const fakeDetections = Math.floor(Math.random() * 3) + 1;
            faceCount = fakeDetections;

            for (let i = 0; i < fakeDetections; i++) {
                const x = Math.random() * (canvas.width - 100);
                const y = Math.random() * (canvas.height - 100);
                const width = 80 + Math.random() * 40;
                const height = 100 + Math.random() * 40;
                ctx.strokeStyle = '#00ff00';
                ctx.lineWidth = 3;
                ctx.strokeRect(x, y, width, height);

                ctx.fillStyle = '#00ff00';
                ctx.font = '12px Courier New';
                ctx.fillText(`HUMAN ${i + 1} (${Math.floor(Math.random() * 100)}%)`, x, y - 5);

                const threats = ['NORMAL', 'SUSPICIOUS', 'VERY SUS', 'ROBOT?', 'DEFINITELY HUMAN'];
                ctx.fillText(threats[Math.floor(Math.random() * threats.length)], x, y + height + 15);
            }

            updateStatus(ridiculousComments[Math.floor(Math.random() * ridiculousComments.length)]);
            if (Math.random() > 0.8) {
                const levels = ['SECURE', 'ELEVATED', 'HIGH', 'CRITICAL'];
                updateThreatLevel(levels[Math.floor(Math.random() * levels.length)]);
            }
        }
        updateMetrics();
        if (isScanning) requestAnimationFrame(detectFaces);
    }
    isScanning = true;
    detectFaces();
}

function generateQR() {
    const message = qrMessages[Math.floor(Math.random() * qrMessages.length)];
    const qr = new QRious({
        element: document.getElementById('qr-generator'),
        value: message,
        size: 200,
        foreground: '#00ff00',
        background: '#000000'
    });
    document.getElementById('qr-result').innerHTML = `Generated: <strong>${message}</strong>`;
    addLog(`📱 Generated classified QR code: ${message}`, "success");
    qrCount++;
    updateMetrics();
}

function toggleScanMode() {
    scanMode = scanMode === 'FACE' ? 'QR' : 'FACE';
    addLog(`🔄 Switched to ${scanMode} scanning mode`, "warning");
    updateStatus(`Now scanning for ${scanMode === 'FACE' ? 'suspicious faces' : 'secret QR codes'}...`);
    if (scanMode === 'QR') {
        startQRScanning();
    }
}

function startQRScanning() {
    const canvas = document.getElementById('qr-scanner');
    const ctx = canvas.getContext('2d');
    setInterval(() => {
        if (scanMode === 'QR' && Math.random() > 0.7) {
            const fakeQR = qrMessages[Math.floor(Math.random() * qrMessages.length)];
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff00';
            ctx.font = '16px Courier New';
            ctx.fillText('QR DETECTED!', 10, 30);
            ctx.fillText(`Data: ${fakeQR}`, 10, 60);
            addLog(`📊 QR Code intercepted: ${fakeQR}`, "success");
            qrCount++;
            updateMetrics();
        }
    }, 3000);
}

function runSecurityCheck() {
    addLog("⚡ Initiating comprehensive security theater protocol...", "warning");
    updateStatus("🔍 Running 47-point security analysis...");

    const checks = [
        "Scanning for hidden weapons in eyeballs...",
        "Checking for illegal smile patterns...",
        "Verifying nose authenticity...",
        "Analyzing threat level of haircut...",
        "Cross-referencing with celebrity database...",
        "Measuring suspicious blinking frequency...",
        "Detecting forbidden facial expressions...",
        "Calculating probability of being a spy..."
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < checks.length) {
            addLog(checks[i], "warning");
            updateStatus(checks[i]);
            securityScore -= Math.floor(Math.random() * 5);
            i++;
        } else {
            clearInterval(interval);
            addLog("✅ Security check complete. Subject cleared for entry to nowhere.", "success");
            updateStatus("😎 All checks passed. You're officially human-ish.");
            securityScore = Math.max(securityScore, 50);
        }
        updateMetrics();
    }, 800);
}

function panicMode() {
    if (panicModeActive) {
        panicModeActive = false;
        updateThreatLevel('SECURE');
        addLog("😌 Panic mode deactivated. Everything is fine again.", "success");
        document.body.style.animation = 'none';
        return;
    }

    panicModeActive = true;
    updateThreatLevel('PANIC');
    addLog("🚨 PANIC MODE ACTIVATED! EVERYONE REMAIN CALM!", "error");

    const panicMessages = [
        "🚨 UNAUTHORIZED SMILE DETECTED!",
        "⚠️ SUSPICIOUS EYEBROW MOVEMENT!",
        "🔥 DANGEROUS LEVELS OF HUMAN DETECTED!",
        "💀 THREAT LEVEL: MAXIMUM RIDICULOUSNESS!",
        "🎭 COMEDY ALERT: SUBJECT TOO FUNNY!"
    ];

    let panicCount = 0;
    const panicInterval = setInterval(() => {
        if (panicCount < 10 && panicModeActive) {
            addLog(panicMessages[Math.floor(Math.random() * panicMessages.length)], "error");
            panicCount++;
        } else if (!panicModeActive) {
            clearInterval(panicInterval);
        }
    }, 500);
}

function clearLogs() {
    document.getElementById('security-log').innerHTML =
        '<div class="log-entry">🗑️ Security logs cleared. Starting fresh...</div>';
    addLog("System ready for more security theater.", "success");
}

// Initialize on load
window.onload = function () {
    addLog("🤖 Facial Security Theater™ v2.0 initialized", "success");
    addLog("⚡ All ridiculous systems online", "success");
    addLog("🎭 Ready to over-analyze your face!", "success");
    updateStatus("🎯 Ready to scan. Click 'START SURVEILLANCE' to begin the madness!");

    // Generate initial QR
    setTimeout(generateQR, 1000);

    // Random status updates
    setInterval(() => {
        if (!panicModeActive && Math.random() > 0.7) {
            const randomStatus = [
                "🔍 Analyzing ambient face particles...",
                "📊 Calculating eyeball trajectory vectors...",
                "🎪 Circus protocol on standby...",
                "🦄 Unicorn scanner ready...",
                "🍕 Pizza detection algorithm active..."
            ];
            updateStatus(randomStatus[Math.floor(Math.random() * randomStatus.length)]);
        }
    }, 5000);
};
