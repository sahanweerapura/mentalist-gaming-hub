const lang = {
    en: { 
        title: "MENTALIST LIVE <span class='neon-pink'>HUB</span>", toggleBtn: "සිංහල (Sinhala)", 
        regTitle: "ENTER THE LOBBY", namePH: "Player Alias", phonePH: "Mobile Number", emailPH: "Email Address", 
        btnPlay: "CONNECT TO SERVER", btnQuit: "Exit Game", txtOnline: "PLAYERS ONLINE:",
        lobbyTitle: "SELECT A GAME", txtCareerPoints: "CAREER POINTS",
        txtGameOmi: "ORMI SINHALA", txtGameOmiDesc: "Classic Sri Lankan Card Game", 
        txtGameTTT: "TIC-TAC-TOE", txtGameTTTDesc: "Kathira Binduwa Showdown",
        txtGameCrush: "SWEET CRUSH", txtGameCrushDesc: "Match 3 Puzzle Game",
        txtGameSoon2: "GTA FIVEM", btnLocked2: "LOCKED",
        modalTitle: "SELECT MODE", btnSolo: "SOLO", btnMulti: "MULTIPLAYER (ONLINE)", btnCancel: "CANCEL",
        roomModalTitle: "MULTIPLAYER ROOM", btnCreateRoom: "CREATE CUSTOM ROOM", txtOr: "— OR —", roomCodeInputPH: "ENTER ROOM CODE", btnJoinRoom: "JOIN ROOM",
        waitingTitleJoin: "JOINED ROOM", waitingSubJoin: "Waiting for host to start...",
        waitingTitleCreate: "ROOM LOBBY", waitingSubCreate: "Share this code with your friends:", waitingStatus: "Waiting for players to join...", btnStartMulti: "START GAME", btnCancelWait: "LEAVE ROOM",
        txtWaitingPlayers: "Players Connected",
        txtChatRooms: "COMMUNITY CHATS", btnCreateChat: "+ CREATE ROOM", txtCreateChatTitle: "CREATE CHAT ROOM", btnConfirmChat: "CREATE", btnCancelChat: "CANCEL",
        txtChatLockTitle: "PRIVATE ROOM", txtChatLockSub: "Enter password to join.", btnVerifyChat: "JOIN", btnCancelPass: "CANCEL",
        chatDefHeader: "Select a room to join the conversation.", btnSendChat: "SEND",
        txtRoomChatTitle: "ROOM CHAT", roomChatPH: "Message...",
        t1Label: "TEAM 1 (YOU & BOT 3)", t2Label: "TEAM 2 (BOTS)", txtKata: "Tricks", txtTrumpBadge: "TRUMP", lblPart: "Team 1", lblT2: "Team 2", roleDealer: "(DEALER)",
        statusWait: "Awaiting Players...", statusShuffle: "Shuffling deck...", statusCut: " is cutting...", myCutPrompt: "Your turn to Cut or Decline.", btnCut: "CUT DECK", btnDecline: "DECLINE",
        statusDeal: "Dealing Phase 1...", statusTrump: "Select Trump Suit", trumpTitle: "SELECT TRUMP", botTrumpPrompt: " is selecting Trump...", statusDeal2: "Dealing Phase 2...", statusPlay: "YOUR TURN! PLAY A CARD.", botThink: " is calculating...",
        t1Win: "TEAM 1 SECURES TRICK!", t2Win: "TEAM 2 SECURES TRICK!", gameOver: "MATCH TERMINATED", celebTokens: "TOKENS EARNED!", celebWinRnd: " secured the round!", btnCont: "CONTINUE",
        celebChamp: "🏆 MATCH CHAMPIONS 🏆", celebWinGame: "ABSOLUTE VICTORY FOR ", btnAgain: "PLAY AGAIN", celebSeporu: "SEPORU! (TIE)", celebSeporuSub: "No tokens awarded. Next round is worth +1 Bonus Token!", celebDblSeporu: "SEPORU CANCELLED!", celebDblSeporuSub: "Double Tie! The bonus token has been cancelled.",
        tttYourTurn: "Your Turn! (X)", tttBotTurn: "Bot is thinking... (O)", tttWinX: "YOU WIN!", tttWinO: "BOT WINS!", tttDraw: "IT'S A DRAW!", txtCrushScore: "MATCH SCORE", txtCrushMoves: "MOVES", txtCrushLvl: "LEVEL"
    },
    si: { 
        title: "MENTALIST LIVE <span class='neon-pink'>හබ්</span>", toggleBtn: "English", 
        regTitle: "ලොබියට පිවිසෙන්න", namePH: "ක්‍රීඩකයාගේ නම", phonePH: "ජංගම අංකය", emailPH: "විද්‍යුත් තැපෑල", 
        btnPlay: "සර්වර් එකට සම්බන්ධ වන්න", btnQuit: "ඉවත් වන්න", txtOnline: "මාර්ගගත ක්‍රීඩකයින්:",
        lobbyTitle: "ක්‍රීඩාවක් තෝරන්න", txtCareerPoints: "ඔබගේ ලකුණු",
        txtGameOmi: "ඔර්මි සිංහල", txtGameOmiDesc: "සාම්ප්‍රදායික ක්‍රීඩාව", 
        txtGameTTT: "කතිර බින්දුව", txtGameTTTDesc: "Tic-Tac-Toe තරගය",
        txtGameCrush: "ස්වීට් ක්‍රශ්", txtGameCrushDesc: "Match 3 ප්‍රහේලිකාව",
        txtGameSoon2: "GTA FIVEM", btnLocked2: "අගුලු දමා ඇත",
        modalTitle: "මාදිලිය තෝරන්න", btnSolo: "තනිවම", btnMulti: "ඔන්ලයින් (මිතුරන් සමඟ)", btnCancel: "අවලංගු කරන්න",
        roomModalTitle: "ඔන්ලයින් කාමරය", btnCreateRoom: "නව කාමරයක් සාදන්න", txtOr: "— හෝ —", roomCodeInputPH: "කේතය ඇතුලත් කරන්න", btnJoinRoom: "එක්වන්න",
        waitingTitleJoin: "කාමරයට එක්විය", waitingSubJoin: "ක්‍රීඩාව ආරම්භ කරන තෙක් රැඳී සිටින්න...",
        waitingTitleCreate: "කාමර ලොබිය", waitingSubCreate: "ඔබේ මිතුරන් සමඟ මෙම කේතය බෙදාගන්න:", waitingStatus: "ක්‍රීඩකයින් එක්වන තෙක් රැඳී සිටින්න...", btnStartMulti: "ක්‍රීඩාව අරඹන්න", btnCancelWait: "ඉවත් වන්න",
        txtWaitingPlayers: "සම්බන්ධිත ක්‍රීඩකයින්",
        txtChatRooms: "චැට් කාමර", btnCreateChat: "+ කාමරයක් සාදන්න", txtCreateChatTitle: "නව චැට් එකක්", btnConfirmChat: "සාදන්න", btnCancelChat: "අවලංගු කරන්න",
        txtChatLockTitle: "රහස්‍ය කාමරය", txtChatLockSub: "මුරපදය ඇතුලත් කරන්න.", btnVerifyChat: "එක්වන්න", btnCancelPass: "අවලංගු කරන්න",
        chatDefHeader: "කතාබස් කිරීමට කාමරයක් තෝරන්න.", btnSendChat: "යවන්න",
        txtRoomChatTitle: "කාමරයේ කතාබස්", roomChatPH: "පණිවිඩය...",
        t1Label: "කණ්ඩායම 1 (ඔබ සහ BOT 3)", t2Label: "කණ්ඩායම 2 (පරිගණක)", txtKata: "අත්", txtTrumpBadge: "තුරුම්පුව", lblPart: "කණ්ඩායම 1", lblT2: "කණ්ඩායම 2", roleDealer: "(බෙදන්නා)",
        statusWait: "රැඳී සිටින්න...", statusShuffle: "කාඩ්පත් කලවම් කරමින්...", statusCut: " කුට්ටිය කපමින්...", myCutPrompt: "ඔබේ වාරය: කපන්න හෝ ප්‍රතික්ෂේප කරන්න.", btnCut: "කපන්න", btnDecline: "එපා",
        statusDeal: "පළමු අදියර බෙදමින්...", statusTrump: "තුරුම්පුව තෝරන්න", trumpTitle: "තුරුම්පුව කුමක්ද?", botTrumpPrompt: " තුරුම්පුව තෝරමින්...", statusDeal2: "දෙවන අදියර බෙදමින්...", statusPlay: "ඔබේ වාරය! කාඩ්පතක් දමන්න.", botThink: " සිතමින් සිටී...",
        t1Win: "කණ්ඩායම 1 වටය දිනුවා!", t2Win: "කණ්ඩායම 2 වටය දිනුවා!", gameOver: "තරගය අවසන්", celebTokens: "අඩෝ උඹල කැටකොල දින්නා...!!", celebWinRnd: " මෙම වටය ජයගත්තා!", btnCont: "ඉදිරියට",
        celebChamp: "🏆 තරගයේ ශූරයින් 🏆", celebWinGame: "විශිෂ්ට ජයග්‍රහණයක්! දිනුවේ ", btnAgain: "නැවත ක්‍රීඩා කරන්න", celebSeporu: "සෙපෝරුයි!", celebSeporuSub: "කිසිවෙකුට කැටකොල නැත. ඊළඟ වටයට අමතර +1 එකතු වේ!", celebDblSeporu: "සෙපෝරුට සෙපෝරු කැපුණා!", celebDblSeporuSub: "දිගටම සෙපෝරුයි! අමතර කැටකොලය අවලංගු විය.",
        tttYourTurn: "ඔබේ වාරය! (X)", tttBotTurn: "පරිගණකය සිතමින්... (O)", tttWinX: "ඔබ දිනුවා!", tttWinO: "පරිගණකය දිනුවා!", tttDraw: "තරගය සමයි!", txtCrushScore: "ලකුණු", txtCrushMoves: "වාර ගණන", txtCrushLvl: "මට්ටම"
    }
};

let currentLang = 'en';
let selectedGame = ''; 
let isMultiplayer = false; 
let isOwner = false;
let userProfile = { alias: "", email: "", phone: "", points: 0 };
let currentLobbyMax = 4;

// --- 1. FIREBASE CONNECTION ---
const firebaseConfig = {
    apiKey: "AIzaSyDFcV8p0GwyOlCAkblwIbBVnsp6C_zYAs0",
    authDomain: "mentalist-live-hub.firebaseapp.com",
    databaseURL: "https://mentalist-live-hub-default-rtdb.firebaseio.com",
    projectId: "mentalist-live-hub",
    storageBucket: "mentalist-live-hub.firebasestorage.app",
    messagingSenderId: "130632052362",
    appId: "1:130632052362:web:0d5225fbe28c9ebf528773",
    measurementId: "G-Y1CNV7G7J0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// --- 2. LIVE PRESENCE TRACKER ---
function initPresence() {
    const listRef = db.ref("onlinePlayers");
    const userRef = listRef.push();
    const presenceRef = db.ref(".info/connected");
    
    presenceRef.on("value", (snap) => {
        if (snap.val()) {
            userRef.onDisconnect().remove();
            userRef.set(userProfile.alias || "Anonymous");
        }
    });

    listRef.on("value", (snap) => {
        document.getElementById('live-count').innerText = snap.numChildren() || 1;
    });
}

// --- 3. STORAGE & APP BOOT ---
function initApp() {
    let saved = localStorage.getItem('mentalistProfile');
    if (saved) {
        userProfile = JSON.parse(saved);
        loginUser(userProfile.alias, userProfile.email, userProfile.phone);
    }
}
function saveProfile() { localStorage.setItem('mentalistProfile', JSON.stringify(userProfile)); updateCareerUI(); }
function addGlobalPoints(pts) {
    userProfile.points += pts; saveProfile();
    const popup = document.createElement('div'); popup.className = 'point-popup'; popup.innerText = `+${pts} MP`; popup.style.left = '50%'; popup.style.top = '20%'; document.body.appendChild(popup); setTimeout(() => popup.remove(), 1000);
}
function updateCareerUI() {
    document.getElementById('profilePoints').innerHTML = `${userProfile.points} <span style="font-size: 1rem; color: #fff;">MP</span>`;
    let rank = "BRONZE NOVICE";
    if(userProfile.points >= 100) rank = "SILVER CHALLENGER"; if(userProfile.points >= 500) rank = "GOLD VETERAN"; if(userProfile.points >= 1000) rank = "DIAMOND MENTALIST";
    document.getElementById('profileRank').innerText = rank;
}
window.logoutProfile = function() { localStorage.removeItem('mentalistProfile'); location.reload(); }

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'si' : 'en'; let l = lang[currentLang];
    
    document.getElementById('titleText').innerHTML = l.title; document.getElementById('langToggle').innerText = l.toggleBtn;
    document.getElementById('registerTitle').innerText = l.regTitle; document.getElementById('playerName').placeholder = l.namePH;
    document.getElementById('playerPhone').placeholder = l.phonePH; document.getElementById('playerEmail').placeholder = l.emailPH;
    document.getElementById('joinBtn').innerText = l.btnPlay; document.getElementById('txtOnline').innerText = l.txtOnline;
    document.getElementById('btnQuit').innerText = l.btnQuit; document.getElementById('btnQuitTTT').innerText = l.btnQuit; document.getElementById('btnQuitCrush').innerText = l.btnQuit;
    
    document.getElementById('lobbyTitle').innerText = l.lobbyTitle; document.getElementById('txtCareerPoints').innerText = l.txtCareerPoints;
    document.getElementById('txtGameOmi').innerText = l.txtGameOmi; document.getElementById('txtGameOmiDesc').innerText = l.txtGameOmiDesc;
    document.getElementById('txtGameTTT').innerText = l.txtGameTTT; document.getElementById('txtGameTTTDesc').innerText = l.txtGameTTTDesc;
    document.getElementById('txtGameCrush').innerText = l.txtGameCrush; document.getElementById('txtGameCrushDesc').innerText = l.txtGameCrushDesc;
    document.getElementById('txtGameSoon2').innerText = l.txtGameSoon2; document.getElementById('btnLocked2').innerText = l.btnLocked2;

    document.getElementById('modalTitle').innerText = l.modalTitle; document.getElementById('btnSolo').innerText = l.btnSolo;
    document.getElementById('btnMulti').innerText = l.btnMulti; document.getElementById('btnCancel').innerText = l.btnCancel;
    
    document.getElementById('roomModalTitle').innerText = l.roomModalTitle; document.getElementById('btnCreateRoom').innerText = l.btnCreateRoom;
    document.getElementById('txtOr').innerText = l.txtOr; document.getElementById('roomCodeInput').placeholder = l.roomCodeInputPH;
    document.getElementById('btnJoinRoom').innerText = l.btnJoinRoom; document.getElementById('btnCancelRoom').innerText = l.btnCancel;
    document.getElementById('btnStartMulti').innerText = l.btnStartMulti; document.getElementById('btnCancelWait').innerText = l.btnCancelWait;
    document.getElementById('txtWaitingPlayers').innerHTML = `${l.txtWaitingPlayers} <span id="queueCount">1</span>/<span id="queueMax">${currentLobbyMax}</span>`;

    document.getElementById('txtChatRooms').innerText = l.txtChatRooms; document.getElementById('btnCreateChat').innerText = l.btnCreateChat;
    document.getElementById('txtCreateChatTitle').innerText = l.txtCreateChatTitle; document.getElementById('btnConfirmChat').innerText = l.btnConfirmChat;
    document.getElementById('btnCancelChat').innerText = l.btnCancelChat; document.getElementById('txtChatLockTitle').innerText = l.txtChatLockTitle;
    document.getElementById('txtChatLockSub').innerText = l.txtChatLockSub; document.getElementById('btnVerifyChat').innerText = l.btnVerifyChat;
    document.getElementById('btnCancelPass').innerText = l.btnCancelPass; document.getElementById('btnSendChat').innerText = l.btnSendChat;
    if(!activeChatRoomId) document.getElementById('chatHeader').innerText = l.chatDefHeader;

    document.getElementById('txtRoomChatTitle').innerText = l.txtRoomChatTitle; document.getElementById('roomChatInput').placeholder = l.roomChatPH; document.getElementById('btnRoomSendChat').innerText = l.btnSendChat;

    if (botNames.p1 !== "You") { document.getElementById('t1Label').innerText = l.t1Label.replace("YOU", botNames.p1.toUpperCase()); } else { document.getElementById('t1Label').innerText = l.t1Label; }
    document.getElementById('t2Label').innerText = l.t2Label; ['txtKata1', 'txtKata2'].forEach(id => document.getElementById(id).innerText = l.txtKata);
    document.getElementById('txtTrumpBadge').innerText = l.txtTrumpBadge; document.getElementById('lblPart').innerText = l.lblPart;
    document.getElementById('lblT1').innerText = l.lblPart; document.getElementById('lblT2A').innerText = l.lblT2;
    document.getElementById('lblT2B').innerText = l.lblT2; document.getElementById('btnCut').innerText = l.btnCut;
    document.getElementById('btnDecline').innerText = l.btnDecline; document.getElementById('trumpTitle').innerText = l.trumpTitle;
    document.getElementById('txtCrushScore').innerText = l.txtCrushScore; document.getElementById('txtCrushMoves').innerText = l.txtCrushMoves; document.getElementById('txtCrushLvl').innerText = l.txtCrushLvl;

    updateRolesInUI(); 
    if(tttActive) document.getElementById('tttStatus').innerText = board.includes("X") || board.includes("O") ? (document.getElementById('tttStatus').innerText.includes("X") ? l.tttYourTurn : l.tttBotTurn) : l.tttYourTurn;
}

document.getElementById('playerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let alias = document.getElementById('playerName').value; let email = document.getElementById('playerEmail').value; let phone = document.getElementById('playerPhone').value;
    userProfile.alias = alias; userProfile.email = email; userProfile.phone = phone;
    saveProfile(); loginUser(alias, email, phone);
});

function loginUser(alias, email, phone) {
    let lowerName = alias.toLowerCase(); if(lowerName.includes('mentalist') || lowerName.includes('sahan')) isOwner = true;
    botNames.p1 = alias; document.getElementById('p1-name').innerText = alias; document.getElementById('profileName').innerText = alias.toUpperCase();
    document.getElementById('login-screen').style.display = 'none'; document.getElementById('lobby-screen').style.display = 'flex';
    
    initPresence();
    initGlobalChatSync();
    
    updateCareerUI(); toggleLanguage(); toggleLanguage();
}

// --- 4. GLOBAL FIREBASE CHAT SYNC ---
let chatRooms = [];
let activeChatRoomId = null; let pendingRoomId = null;

function initGlobalChatSync() {
    db.ref("globalChatRooms").on("value", snap => {
        if(snap.exists()) {
            chatRooms = snap.val();
            // Ensure messages array exists to prevent errors
            chatRooms.forEach(r => r.messages = r.messages || []);
            renderChatRooms();
            if(activeChatRoomId) renderMessages();
        } else {
            // Setup default rooms if DB is empty
            chatRooms = [
                { id: 1, name: "General Lobby", isLocked: false, password: "", messages: [{user: "System", text: "Welcome to Mentalist Live Hub!", isAdmin: true}] },
                { id: 2, name: "Omi Pro Players", isLocked: true, password: "123", messages: [{user: "System", text: "Pro strategies only.", isAdmin: true}] }
            ];
            db.ref("globalChatRooms").set(chatRooms);
        }
    });
}

function renderChatRooms() { const list = document.getElementById('chatRoomList'); list.innerHTML = ''; chatRooms.forEach(room => { let lockIcon = room.isLocked ? "🔒" : "💬"; list.innerHTML += `<div class="chat-room-item" onclick="attemptJoinChat(${room.id})"><span>${lockIcon} ${room.name}</span><span style="font-size:0.8rem; color:#aaa;">${room.messages.length} msgs</span></div>`; }); }
window.openCreateChatModal = function() { document.getElementById('newChatName').value = ''; document.getElementById('newChatPassword').value = ''; document.getElementById('create-chat-modal').style.display = 'flex'; }
window.confirmCreateChat = function() { let name = document.getElementById('newChatName').value; let pass = document.getElementById('newChatPassword').value; if(!name) return; let newRoom = { id: Date.now(), name: name, isLocked: pass.length > 0, password: pass, messages: [] }; chatRooms.push(newRoom); db.ref("globalChatRooms").set(chatRooms); document.getElementById('create-chat-modal').style.display = 'none'; attemptJoinChat(newRoom.id); }
window.attemptJoinChat = function(id) { let room = chatRooms.find(r => r.id === id); if(room.isLocked && !isOwner) { pendingRoomId = id; document.getElementById('joinChatPassword').value = ''; document.getElementById('chat-password-modal').style.display = 'flex'; } else { openChatRoom(id); } }
window.verifyChatPassword = function() { let room = chatRooms.find(r => r.id === pendingRoomId); let pass = document.getElementById('joinChatPassword').value; if(room.password === pass || isOwner) { document.getElementById('chat-password-modal').style.display = 'none'; openChatRoom(room.id); } else { alert(currentLang === 'si' ? "මුරපදය වැරදියි!" : "Incorrect Password!"); } }
function openChatRoom(id) { activeChatRoomId = id; let room = chatRooms.find(r => r.id === id); document.getElementById('chatHeader').innerText = room.name + (room.isLocked ? " 🔒" : ""); document.getElementById('chatInput').disabled = false; document.getElementById('btnSendChat').disabled = false; renderMessages(); }
function renderMessages() { if(!activeChatRoomId) return; let room = chatRooms.find(r => r.id === activeChatRoomId); const msgDiv = document.getElementById('chatMessages'); msgDiv.innerHTML = ''; room.messages.forEach(m => { let isMe = m.user === botNames.p1; let adminTag = m.isAdmin ? `<span class="admin-badge">ADMIN</span>` : ""; msgDiv.innerHTML += `<div class="chat-msg ${isMe ? 'self' : ''} ${m.isAdmin ? 'admin' : ''}"><div class="chat-user">${m.user} ${adminTag}</div><div>${m.text}</div></div>`; }); msgDiv.scrollTop = msgDiv.scrollHeight; }

window.sendChatMessage = function() { 
    let input = document.getElementById('chatInput'); if(!input.value || !activeChatRoomId) return; 
    let roomIdx = chatRooms.findIndex(r => r.id === activeChatRoomId);
    chatRooms[roomIdx].messages.push({ user: botNames.p1, text: input.value, isAdmin: isOwner }); 
    db.ref("globalChatRooms/" + roomIdx).set(chatRooms[roomIdx]); // Push to Firebase
    input.value = ''; 
}

// --- 5. FIREBASE MATCHMAKING (ROOMS) ---
let currentRoomCode = null;
let isHost = false;

window.openModeModal = function(game) { selectedGame = game; document.getElementById('mode-modal').style.display = 'flex'; };
window.closeModal = function() { document.getElementById('mode-modal').style.display = 'none'; };
window.closeRoomModal = function() { document.getElementById('room-modal').style.display = 'none'; };

window.launchGame = function(mode) {
    isMultiplayer = (mode === 'multi'); document.getElementById('mode-modal').style.display = 'none';
    if (mode === 'crush') { document.getElementById('lobby-screen').style.display = 'none'; document.getElementById('crush-screen').style.display = 'block'; initCrush(); return; }
    if (isMultiplayer) { document.getElementById('room-modal').style.display = 'flex'; return; }
    // Solo
    document.getElementById('lobby-screen').style.display = 'none';
    if (selectedGame === 'omi') { document.getElementById('game-screen').style.display = 'block'; startLifecycle(); } 
    else if (selectedGame === 'ttt') { document.getElementById('ttt-screen').style.display = 'block'; initTTT(); }
};

window.createRoom = function() {
    currentLobbyMax = (selectedGame === 'omi') ? 4 : 2;
    let code = Math.random().toString(36).substring(2, 8).toUpperCase(); 
    currentRoomCode = code;
    isHost = true;

    // Create room in Firebase
    db.ref("rooms/" + code).set({
        game: selectedGame,
        host: botNames.p1,
        maxPlayers: currentLobbyMax,
        players: [botNames.p1],
        status: "waiting",
        chat: []
    });

    document.getElementById('room-modal').style.display = 'none';
    let l = lang[currentLang];
    document.getElementById('waitingTitle').innerText = l.waitingTitleCreate; document.getElementById('waitingSub').innerText = l.waitingSubCreate;
    document.getElementById('displayRoomCode').innerText = code; document.getElementById('waitingStatus').innerText = l.waitingStatus;
    
    document.getElementById('btnStartMulti').style.display = 'block';
    document.getElementById('btnStartMulti').disabled = true;
    document.getElementById('waiting-modal').style.display = 'flex';
    openRoomChat(code);

    listenToFirebaseRoom(code);
};

window.joinRoom = function() {
    let code = document.getElementById('roomCodeInput').value.toUpperCase(); if(!code) return; 
    currentLobbyMax = (selectedGame === 'omi') ? 4 : 2;
    
    // Check Firebase
    db.ref("rooms/" + code).once("value", snap => {
        if(snap.exists()) {
            let roomData = snap.val();
            if(roomData.players.length < roomData.maxPlayers && roomData.status === "waiting") {
                
                isHost = false;
                currentRoomCode = code;
                roomData.players.push(botNames.p1);
                db.ref("rooms/" + code + "/players").set(roomData.players); // Join room
                
                document.getElementById('room-modal').style.display = 'none'; let l = lang[currentLang];
                document.getElementById('waitingTitle').innerText = l.waitingTitleJoin; document.getElementById('displayRoomCode').innerText = code;
                document.getElementById('waitingSub').innerText = l.waitingSubJoin; document.getElementById('waitingStatus').innerText = currentLang === 'si' ? "සම්බන්ධ විය. Host ආරම්භ කරන තෙක් රැඳී සිටින්න." : "Connected. Waiting for Host to start.";
                document.getElementById('btnStartMulti').style.display = 'none'; document.getElementById('waiting-modal').style.display = 'flex';
                
                openRoomChat(code);
                listenToFirebaseRoom(code);

            } else {
                alert("Room is full or game has started!");
            }
        } else {
            alert("Room code not found!");
        }
    });
};

function listenToFirebaseRoom(code) {
    db.ref("rooms/" + code).on("value", snap => {
        let data = snap.val();
        if(!data) return; // Room closed

        // 1. Update Queue UI
        document.getElementById('queueMax').innerText = data.maxPlayers;
        document.getElementById('queueCount').innerText = data.players.length;
        
        const qList = document.getElementById('waitingPlayerList');
        qList.innerHTML = '';
        data.players.forEach((p, idx) => {
            let icon = idx === 0 ? "👑" : "🎮";
            let meTxt = p === botNames.p1 ? " (You)" : "";
            qList.innerHTML += `<div class="queue-item"><div class="queue-avatar">${icon}</div> ${p}${meTxt}</div>`;
            
            // Map real players to Bot names for Omi
            if(selectedGame === 'omi') {
                if(idx === 0) botNames.p1 = p; // If you are not host, you technically aren't p1 in the engine, but for simple sync we map names visually.
                if(idx === 1) botNames.p2 = p;
                if(idx === 2) botNames.p3 = p;
                if(idx === 3) botNames.p4 = p;
            } else if (selectedGame === 'ttt') {
                if(idx === 0) botNames.p1 = p;
                if(idx === 1) botNames.p2 = p;
            }
        });
        
        for(let i=data.players.length; i<data.maxPlayers; i++) {
            qList.innerHTML += `<div class="queue-item empty">Waiting for player...</div>`;
        }

        if(isHost && data.players.length === data.maxPlayers) {
            document.getElementById('waitingStatus').innerText = currentLang === 'si' ? "කාමරය පිරී ඇත! ආරම්භ කරන්න." : "Lobby Full! Ready to start.";
            document.getElementById('btnStartMulti').disabled = false;
        }

        // 2. Launch Game if Host started it
        if(data.status === "playing" && !isHost) {
            startMultiplayerGameClient();
        }

        // 3. Sync Room Chat
        if(data.chat) {
            const msgDiv = document.getElementById('roomChatMessages');
            msgDiv.innerHTML = '';
            data.chat.forEach(msg => {
                let isMe = msg.user === userProfile.alias;
                msgDiv.innerHTML += `<div class="chat-msg ${isMe ? 'self' : ''}"><div class="chat-user">${msg.user}</div><div>${msg.text}</div></div>`;
            });
            msgDiv.scrollTop = msgDiv.scrollHeight;
        }
    });
}

// Host starts the game
window.startMultiplayerGame = function() {
    db.ref("rooms/" + currentRoomCode + "/status").set("playing");
    startMultiplayerGameClient();
}

function startMultiplayerGameClient() {
    document.getElementById('waiting-modal').style.display = 'none'; document.getElementById('lobby-screen').style.display = 'none';
    if (selectedGame === 'omi') { document.getElementById('game-screen').style.display = 'block'; startLifecycle(); } 
    else if (selectedGame === 'ttt') { document.getElementById('ttt-screen').style.display = 'block'; initTTT(); }
}

window.closeWaitingModal = function() { 
    if(currentRoomCode) {
        if(isHost) db.ref("rooms/" + currentRoomCode).remove(); // Delete room if host leaves
        db.ref("rooms/" + currentRoomCode).off(); // stop listening
    }
    document.getElementById('waiting-modal').style.display = 'none'; document.getElementById('btnStartMulti').style.display = 'none'; document.getElementById('room-chat-sidebar').style.display = 'none';
};

window.quitToLobby = function() {
    isGameOver = true; team1Kola = 0; team2Kola = 0; activeSeporu = 0; tttActive = false;
    if (crushInterval) clearInterval(crushInterval);
    if(currentRoomCode) {
        if(isHost) db.ref("rooms/" + currentRoomCode).remove();
        db.ref("rooms/" + currentRoomCode).off();
    }
    document.getElementById('game-screen').style.display = 'none'; document.getElementById('ttt-screen').style.display = 'none'; document.getElementById('crush-screen').style.display = 'none';
    document.getElementById('lobby-screen').style.display = 'flex'; document.getElementById('room-chat-sidebar').style.display = 'none';
};

// MULTIPLAYER IN-ROOM CHAT HUD
function openRoomChat(code) { document.getElementById('room-chat-sidebar').style.display = 'flex'; document.getElementById('roomChatCodeDisplay').innerText = code.toUpperCase(); document.getElementById('roomChatMessages').innerHTML = ''; }
window.toggleEmojiPicker = function() { const picker = document.getElementById('emoji-picker'); picker.style.display = picker.style.display === 'none' ? 'flex' : 'none'; }
window.insertEmoji = function(emoji) { const input = document.getElementById('roomChatInput'); input.value += emoji; toggleEmojiPicker(); input.focus(); }
window.sendRoomMessage = function() { 
    const input = document.getElementById('roomChatInput'); if(!input.value || !currentRoomCode) return; 
    
    // Fetch current chat array and push
    db.ref("rooms/" + currentRoomCode + "/chat").once("value", snap => {
        let chat = snap.val() || [];
        chat.push({ user: userProfile.alias, text: input.value });
        db.ref("rooms/" + currentRoomCode + "/chat").set(chat);
        input.value = ''; 
    });
}

// --- UPGRADED SWEET CRUSH WITH ICE SYSTEMS & LEVELS ---
const crushGems = ['gem-red', 'gem-orange', 'gem-yellow', 'gem-green', 'gem-blue', 'gem-purple'];
let crushWidth = 8; let crushGrid = []; let crushScore = 0; let crushLevel = 1; let crushMoves = 30; let iceBlocks = []; let draggedCandy, replacedCandy; let crushInterval;
function initCrush() {
    const board = document.getElementById('crushBoard'); board.innerHTML = ''; crushGrid = []; crushScore = 0; document.getElementById('crushScore').innerText = crushScore; document.getElementById('crushLevelText').innerText = crushLevel;
    if (crushLevel === 1) { crushMoves = 30; document.getElementById('crushObjectiveDisplay').innerText = currentLang === 'si' ? "ඉලක්කය: සියලුම අයිස් කැට කඩන්න!" : "Objective: Break all ice blocks!"; iceBlocks = Array(64).fill(false); [18,19,20,21,26,27,28,29,34,35,36,37,42,43,44,45].forEach(idx => iceBlocks[idx] = true); } 
    else { crushMoves = 25; let target = crushLevel * 120; document.getElementById('crushObjectiveDisplay').innerText = currentLang === 'si' ? `ඉලක්කය: වාර 25 කින් ලකුණු ${target} ක් ලබාගන්න!` : `Objective: Reach ${target} points in 25 moves!`; iceBlocks = Array(64).fill(false); }
    document.getElementById('crushMovesText').innerText = crushMoves;
    for (let i = 0; i < crushWidth * crushWidth; i++) { const candy = document.createElement('div'); candy.className = 'candy'; candy.setAttribute('draggable', true); candy.setAttribute('id', i); let randomClass = crushGems[Math.floor(Math.random() * crushGems.length)]; candy.classList.add(randomClass); if (iceBlocks[i]) candy.classList.add('ice'); board.appendChild(candy); crushGrid.push(candy); }
    crushGrid.forEach(c => c.addEventListener('dragstart', dragStart)); crushGrid.forEach(c => c.addEventListener('dragover', dragOver)); crushGrid.forEach(c => c.addEventListener('dragenter', dragEnter)); crushGrid.forEach(c => c.addEventListener('dragleave', dragLeave)); crushGrid.forEach(c => c.addEventListener('drop', dragDrop)); crushGrid.forEach(c => c.addEventListener('dragend', dragEnd));
    let firstClick = null; crushGrid.forEach(c => c.addEventListener('click', function() { if(!firstClick) { firstClick = this; this.classList.add('selected'); } else { draggedCandy = firstClick; replacedCandy = this; firstClick.classList.remove('selected'); dragEnd(); firstClick = null; } }));
    if(crushInterval) clearInterval(crushInterval); crushInterval = setInterval(function() { checkRowForThree(); checkColumnForThree(); moveDown(); checkCrushLevelStatus(); }, 150);
}
function getGemClass(el) { return Array.from(el.classList).find(c => c.startsWith('gem-')); }
function dragStart() { draggedCandy = this; } function dragOver(e) { e.preventDefault(); } function dragEnter(e) { e.preventDefault(); } function dragLeave() {} function dragDrop() { replacedCandy = this; }
function dragEnd() {
    if(!replacedCandy || !draggedCandy) return; let draggedId = parseInt(draggedCandy.id); let replacedId = parseInt(replacedCandy.id); let validMoves = [draggedId - 1, draggedId - crushWidth, draggedId + 1, draggedId + crushWidth];
    if (validMoves.includes(replacedId) && crushMoves > 0) { let draggedClass = getGemClass(draggedCandy); let replacedClass = getGemClass(replacedCandy); draggedCandy.classList.remove(draggedClass); draggedCandy.classList.add(replacedClass); replacedCandy.classList.remove(replacedClass); replacedCandy.classList.add(draggedClass); crushMoves--; document.getElementById('crushMovesText').innerText = crushMoves; }
    draggedCandy = null; replacedCandy = null;
}
function triggerCrushAnim(indexes) { indexes.forEach(index => { crushGrid[index].classList.add('crush-anim'); if (crushGrid[index].classList.contains('ice')) { crushGrid[index].classList.remove('ice'); iceBlocks[index] = false; } setTimeout(() => { let cls = getGemClass(crushGrid[index]); if(cls) crushGrid[index].classList.remove(cls); crushGrid[index].classList.remove('crush-anim'); }, 300); }); }
function checkRowForThree() { for (let i = 0; i < 61; i++) { let rowOfThree = [i, i + 1, i + 2]; let decidedClass = getGemClass(crushGrid[i]); if (notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55].includes(i)) continue; if (decidedClass && rowOfThree.every(idx => getGemClass(crushGrid[idx]) === decidedClass && !crushGrid[idx].classList.contains('crush-anim'))) { crushScore += 10; document.getElementById('crushScore').innerText = crushScore; triggerCrushAnim(rowOfThree); } } }
function checkColumnForThree() { for (let i = 0; i < 47; i++) { let columnOfThree = [i, i + crushWidth, i + crushWidth * 2]; let decidedClass = getGemClass(crushGrid[i]); if (decidedClass && columnOfThree.every(idx => getGemClass(crushGrid[idx]) === decidedClass && !crushGrid[idx].classList.contains('crush-anim'))) { crushScore += 10; document.getElementById('crushScore').innerText = crushScore; triggerCrushAnim(columnOfThree); } } }
function checkCrushLevelStatus() {
    if (crushLevel === 1 && !iceBlocks.includes(true)) { clearInterval(crushInterval); alert(currentLang === 'si' ? "පට්ට! ඔබ ඊළඟ මට්ටමට තේරුණා!" : "Boom! Objective complete. Moving to level 2!"); crushLevel = 2; addGlobalPoints(10); initCrush(); } 
    else if (crushLevel > 1 && crushScore >= (crushLevel * 120)) { clearInterval(crushInterval); alert(currentLang === 'si' ? "නියමයි! ඊළඟ මට්ටම!" : "Level complete!"); crushLevel++; addGlobalPoints(10); initCrush(); }
    if (crushMoves <= 0 && ((crushLevel === 1 && iceBlocks.includes(true)) || (crushLevel > 1 && crushScore < (crushLevel * 120)))) { clearInterval(crushInterval); alert(currentLang === 'si' ? "කනගාටුයි! වාර ගණන අවසන්." : "Game Over! Out of moves."); crushLevel = 1; initCrush(); }
}
function moveDown() { for (let i = 0; i < 55; i++) { if (!getGemClass(crushGrid[i + crushWidth])) { let topClass = getGemClass(crushGrid[i]); if(topClass) { crushGrid[i + crushWidth].classList.add(topClass); crushGrid[i].classList.remove(topClass); } } const isFirstRow = [0, 1, 2, 3, 4, 5, 6, 7].includes(i); if (isFirstRow && !getGemClass(crushGrid[i])) { let randomClass = crushGems[Math.floor(Math.random() * crushGems.length)]; crushGrid[i].classList.add(randomClass); } } }

// --- TIC-TAC-TOE ---
let board = ["", "", "", "", "", "", "", "", ""]; let tttActive = false; let tttPlayerTurn = true; 
function initTTT() { board = ["", "", "", "", "", "", "", "", ""]; tttActive = true; tttPlayerTurn = true; document.getElementById('tttStatus').innerText = lang[currentLang].tttYourTurn; renderTTT(); }

window.playTTT = function(index) { 
    if (!tttActive || !tttPlayerTurn || board[index] !== "") return; 
    
    board[index] = isMultiplayer && !isHost ? "O" : "X"; 
    renderTTT(); checkTTTWin(); 
    
    if(tttActive) { 
        tttPlayerTurn = false; 
        document.getElementById('tttStatus').innerText = isMultiplayer ? "Waiting for Opponent..." : lang[currentLang].tttBotTurn; 
        if(!isMultiplayer) setTimeout(botTTT, 800); 
        else {
            // Push board state to Firebase for multiplayer
            db.ref("rooms/" + currentRoomCode + "/tttBoard").set(board);
        }
    } 
};

// Listen for Multiplayer TTT Moves
function syncTTTFromFirebase() {
    if(isMultiplayer && currentRoomCode) {
        db.ref("rooms/" + currentRoomCode + "/tttBoard").on("value", snap => {
            if(snap.exists()) {
                let newBoard = snap.val();
                let mySymbol = isHost ? "X" : "O";
                let oppSymbol = isHost ? "O" : "X";
                
                // If the board changed and it's not my move that caused it
                if(JSON.stringify(board) !== JSON.stringify(newBoard)) {
                    board = newBoard;
                    renderTTT();
                    checkTTTWin();
                    // If the opponent just moved, it's my turn now
                    if(board.filter(x=>x).length % 2 === (isHost ? 0 : 1)) {
                        tttPlayerTurn = true;
                        document.getElementById('tttStatus').innerText = lang[currentLang].tttYourTurn;
                    }
                }
            }
        });
    }
}


function botTTT() { if(!tttActive) return; let emptySpots = board.map((val, idx) => val === "" ? idx : null).filter(val => val !== null); if (emptySpots.length === 0) return; let move = emptySpots[Math.floor(Math.random() * emptySpots.length)]; board[move] = "O"; renderTTT(); checkTTTWin(); if(tttActive) { tttPlayerTurn = true; document.getElementById('tttStatus').innerText = lang[currentLang].tttYourTurn; } }
function renderTTT() { const cells = document.querySelectorAll('.ttt-cell'); cells.forEach((cell, i) => { cell.innerText = board[i]; cell.className = "ttt-cell " + (board[i] === "X" ? "ttt-x" : (board[i] === "O" ? "ttt-o" : "")); }); }
function checkTTTWin() { const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; for (let w of wins) { if (board[w[0]] && board[w[0]] === board[w[1]] && board[w[1]] === board[w[2]]) { tttActive = false; document.getElementById('tttStatus').innerText = board[w[0]] === "X" ? lang[currentLang].tttWinX : lang[currentLang].tttWinO; if(board[w[0]] === "X") addGlobalPoints(15); setTimeout(initTTT, 2500); return; } } if (!board.includes("")) { tttActive = false; document.getElementById('tttStatus').innerText = lang[currentLang].tttDraw; setTimeout(initTTT, 2500); } }

// --- OMI GAME ENGINE ---
const suits = ['♠', '♥', '♣', '♦']; const values = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A']; const cardPower = { '7':7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13, 'A':14 }; const turnOrder = ['p1', 'p4', 'p3', 'p2']; const botNames = { p1: "You", p2: "Bot 2", p3: "Bot 3", p4: "Bot 4" }; let fullDeck = [], playerHand = [], botHands = { p2: [], p3: [], p4: [] }; let trumpSuit = '', currentTrick = [], ledSuit = ''; let roundDealerIndex = 0, currentTurnIndex = 0; let team1Tricks = 0, team2Tricks = 0, team1Kola = 0, team2Kola = 0, trumpCallerId = ''; let activeSeporu = 0;
function updateActiveTurnUI(activeId) { ['p1', 'p2', 'p3', 'p4'].forEach(p => document.getElementById(`seat-${p}`).classList.remove('active-turn')); if(activeId) document.getElementById(`seat-${activeId}`).classList.add('active-turn'); }
function triggerCelebration(type, winningTeam, tokensEarned = 0) {
    updateActiveTurnUI(null); const overlay = document.getElementById('celebration-overlay'); const title = document.getElementById('celebration-title'); const subtitle = document.getElementById('celebration-subtitle'); const gif = document.getElementById('celebration-gif'); const btn = document.getElementById('celeb-btn');
    let teamNameStr = winningTeam === 1 ? lang[currentLang].lblPart : lang[currentLang].lblT2; overlay.style.display = 'flex';
    if (type !== 'seporu' && type !== 'double_seporu') generateFireworks(); else document.getElementById('fireworks-container').innerHTML = ''; 
    if (type === 'round') {
        let tokenUnit = currentLang === 'si' ? " කැටකොල)" : " Tokens)"; title.innerText = lang[currentLang].celebTokens; subtitle.innerText = teamNameStr + lang[currentLang].celebWinRnd + tokensEarned + tokenUnit; btn.innerText = lang[currentLang].btnCont;
        const roundGifs = ["https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", "https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif", "https://media.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif"]; gif.src = roundGifs[Math.floor(Math.random() * roundGifs.length)];
    } else if (type === 'game') {
        title.innerText = lang[currentLang].celebChamp; subtitle.innerText = lang[currentLang].celebWinGame + teamNameStr + "!"; btn.innerText = lang[currentLang].btnAgain; gif.src = "https://media.giphy.com/media/cnuNz0fTBIUGnx4F9T/giphy.gif"; 
    } else if (type === 'seporu') {
        title.innerText = lang[currentLang].celebSeporu; subtitle.innerText = lang[currentLang].celebSeporuSub; btn.innerText = lang[currentLang].btnCont; gif.src = "https://media.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif"; 
    } else if (type === 'double_seporu') {
        title.innerText = lang[currentLang].celebDblSeporu; subtitle.innerText = lang[currentLang].celebDblSeporuSub; btn.innerText = lang[currentLang].btnCont; gif.src = "https://media.giphy.com/media/xT5LMz1W4oFAycE5vq/giphy.gif"; 
    }
}
window.closeCelebration = function() { document.getElementById('celebration-overlay').style.display = 'none'; if (isGameOver) { team1Kola = 0; team2Kola = 0; activeSeporu = 0; isGameOver = false; startLifecycle(); } else { roundDealerIndex = (roundDealerIndex + 1) % 4; startLifecycle(); } };
function updateRolesInUI() { ['p1', 'p2', 'p3', 'p4'].forEach(p => document.getElementById(`role-${p}`).innerText = ""); document.getElementById(`role-${turnOrder[roundDealerIndex]}`).innerText = lang[currentLang].roleDealer; }
function startLifecycle() {
    team1Tricks = 0; team2Tricks = 0; playerHand = []; botHands = { p2: [], p3: [], p4: [] }; document.getElementById('t1-pile').innerHTML = ''; document.getElementById('t2-pile').innerHTML = ''; document.getElementById('trump-display-board').style.display = 'none'; updateScoresUI(); document.getElementById('my-hand').innerHTML = ''; updateActiveTurnUI(null);
    let cutterId = turnOrder[(roundDealerIndex + 3) % 4]; trumpCallerId = turnOrder[(roundDealerIndex + 1) % 4]; updateRolesInUI();
    document.getElementById('gameStatus').innerText = lang[currentLang].statusShuffle; let deckVis = document.getElementById('deck-visual'); deckVis.style.display = 'block'; deckVis.classList.add('shuffling');
    fullDeck = []; suits.forEach(s => values.forEach(v => fullDeck.push({suit: s, value: v, color: (s==='♥'||s==='♦')?'red':'black'})));
    setTimeout(() => {
        deckVis.classList.remove('shuffling'); updateActiveTurnUI(cutterId);
        if (cutterId === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].myCutPrompt; document.getElementById('cut-selector').style.display = 'flex'; document.getElementById('cut-selector').style.justifyContent = 'center'; document.getElementById('cut-selector').style.gap = '10px'; } 
        else { document.getElementById('gameStatus').innerText = botNames[cutterId] + lang[currentLang].statusCut; setTimeout(() => executeCut(Math.random() > 0.5), 1500); }
    }, 1500);
}
window.executeCut = function(didCut) {
    document.getElementById('cut-selector').style.display = 'none'; if(didCut) fullDeck.sort(() => Math.random() - 0.5); 
    document.getElementById('gameStatus').innerText = lang[currentLang].statusDeal; updateActiveTurnUI(null);
    playerHand = fullDeck.splice(0, 4); botHands.p2 = fullDeck.splice(0, 4); botHands.p3 = fullDeck.splice(0, 4); botHands.p4 = fullDeck.splice(0, 4); renderHand(false);
    setTimeout(() => {
        updateActiveTurnUI(trumpCallerId);
        if (trumpCallerId === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].statusTrump; document.getElementById('trump-selector').style.display = 'block'; } 
        else { document.getElementById('gameStatus').innerText = botNames[trumpCallerId] + lang[currentLang].botTrumpPrompt; setTimeout(() => { let sCounts = {'♠':0, '♥':0, '♣':0, '♦':0}; botHands[trumpCallerId].forEach(c => sCounts[c.suit]++); let best = '♠', max = -1; for (let s in sCounts) if (sCounts[s] > max) { max = sCounts[s]; best = s; } setTrump(best); }, 1500); }
    }, 1000);
};
window.setTrump = function(suit) {
    trumpSuit = suit; document.getElementById('trump-selector').style.display = 'none'; document.getElementById('gameStatus').innerText = lang[currentLang].statusDeal2; document.getElementById('deck-visual').style.display = 'none'; updateActiveTurnUI(null);
    const trumpIcon = document.getElementById('current-trump-icon'); trumpIcon.innerText = suit; trumpIcon.className = 'suit-badge ' + ((suit === '♥' || suit === '♦') ? 'red' : 'black'); document.getElementById('trump-display-board').style.display = 'flex';
    playerHand = playerHand.concat(fullDeck.splice(0, 4)); botHands.p2 = botHands.p2.concat(fullDeck.splice(0, 4)); botHands.p3 = botHands.p3.concat(fullDeck.splice(0, 4)); botHands.p4 = botHands.p4.concat(fullDeck.splice(0, 4));
    setTimeout(() => { currentTurnIndex = turnOrder.indexOf(trumpCallerId); startTrickSequence(); }, 1000);
};
function getValidCards(hand) { if (!ledSuit) return hand; let matchingCards = hand.filter(c => c.suit === ledSuit); if (matchingCards.length > 0) return matchingCards; return hand; }
function renderHand(isMyTurn) { const handDiv = document.getElementById('my-hand'); handDiv.innerHTML = ''; let validCards = isMyTurn ? getValidCards(playerHand) : []; playerHand.forEach((card, idx) => { let disabledClass = validCards.includes(card) ? "" : "disabled"; handDiv.innerHTML += `<div class="playing-card ${card.color} ${disabledClass}" onclick="humanPlay(${idx})"><div class="card-top">${card.value}<br>${card.suit}</div><div class="card-center">${card.suit}</div><div class="card-bottom">${card.value}<br>${card.suit}</div></div>`; }); }
function startTrickSequence() { currentTrick = []; ledSuit = ''; playNextTurn(); }
function playNextTurn() { if (currentTrick.length === 4) { evaluateTrickWinner(); return; } let activePlayer = turnOrder[currentTurnIndex]; updateActiveTurnUI(activePlayer); if (activePlayer === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].statusPlay; renderHand(true); } else { document.getElementById('gameStatus').innerText = botNames[activePlayer] + lang[currentLang].botThink; renderHand(false); setTimeout(() => runBotAI(activePlayer), 1200); } }
window.humanPlay = function(idx) { if (turnOrder[currentTurnIndex] !== 'p1') return; if (!getValidCards(playerHand).includes(playerHand[idx])) return; executePlacement('p1', playerHand.splice(idx, 1)[0]); currentTurnIndex = (currentTurnIndex + 1) % 4; playNextTurn(); };
function runBotAI(botId) {
    let hand = botHands[botId]; let validCards = getValidCards(hand); validCards.sort((a, b) => cardPower[a.value] - cardPower[b.value]); let chosenCard = validCards[0]; 
    if (!ledSuit) { let nonTrumps = validCards.filter(c => c.suit !== trumpSuit); chosenCard = nonTrumps.length > 0 ? nonTrumps[nonTrumps.length - 1] : validCards[validCards.length - 1]; } 
    else {
        let winningPlay = currentTrick[0]; for (let i = 1; i < currentTrick.length; i++) { let current = currentTrick[i], best = winningPlay; if (current.card.suit === trumpSuit && best.card.suit !== trumpSuit) winningPlay = current; else if (current.card.suit === best.card.suit && cardPower[current.card.value] > cardPower[best.card.value]) winningPlay = current; }
        let partnerId = (botId === 'p2') ? 'p4' : (botId === 'p4' ? 'p2' : (botId === 'p3' ? 'p1' : 'p3'));
        if (!(winningPlay.player === partnerId)) {
            if (validCards[0].suit === ledSuit) { if (winningPlay.card.suit === ledSuit) { let potentialWinners = validCards.filter(c => cardPower[c.value] > cardPower[winningPlay.card.value]); if (potentialWinners.length > 0) chosenCard = potentialWinners[potentialWinners.length - 1]; } } 
            else { let trumps = validCards.filter(c => c.suit === trumpSuit); if (trumps.length > 0) { if (winningPlay.card.suit === trumpSuit) { let higherTrumps = trumps.filter(c => cardPower[c.value] > cardPower[winningPlay.card.value]); if (higherTrumps.length > 0) chosenCard = higherTrumps[0]; } else { chosenCard = trumps[0]; } } }
        }
    }
    executePlacement(botId, hand.splice(hand.indexOf(chosenCard), 1)[0]); currentTurnIndex = (currentTurnIndex + 1) % 4; playNextTurn();
}
function executePlacement(playerId, card) { if (!ledSuit) ledSuit = card.suit; currentTrick.push({ player: playerId, card: card }); document.getElementById(`slot-${playerId}`).innerHTML = `<div class="playing-card enter-${playerId} ${card.color}"><div class="card-top">${card.value}<br>${card.suit}</div><div class="card-center">${card.suit}</div><div class="card-bottom">${card.value}<br>${card.suit}</div></div>`; }
function evaluateTrickWinner() {
    updateActiveTurnUI(null); let winningPlay = currentTrick[0]; for (let i = 1; i < currentTrick.length; i++) { let current = currentTrick[i], best = winningPlay; if (current.card.suit === trumpSuit && best.card.suit !== trumpSuit) winningPlay = current; else if (current.card.suit === best.card.suit && cardPower[current.card.value] > cardPower[best.card.value]) winningPlay = current; }
    let winnerId = winningPlay.player; let winningTeam = (winnerId === 'p1' || winnerId === 'p3') ? 1 : 2;
    if (winningTeam === 1) team1Tricks++; else team2Tricks++; document.getElementById('gameStatus').innerText = winningTeam === 1 ? lang[currentLang].t1Win : lang[currentLang].t2Win; updateScoresUI(); currentTurnIndex = turnOrder.indexOf(winnerId); 
    setTimeout(() => {
        let flyClass = winningTeam === 1 ? 'fly-to-t1' : 'fly-to-t2'; ['p1', 'p2', 'p3', 'p4'].forEach(id => { let elem = document.getElementById(`slot-${id}`).firstElementChild; if (elem) elem.classList.add(flyClass); });
        setTimeout(() => { ['p1', 'p2', 'p3', 'p4'].forEach(id => document.getElementById(`slot-${id}`).innerHTML = ''); document.getElementById(winningTeam === 1 ? 't1-pile' : 't2-pile').innerHTML += '<div class="mini-card-back"></div>'; if (playerHand.length > 0) startTrickSequence(); else evaluateMatchPoints(); }, 600);
    }, 1500);
}
function evaluateMatchPoints() {
    let roundWinner = 0; let earnedTokens = 0; let isSeporu = false; let isDoubleSeporu = false;
    if (team1Tricks === 4 && team2Tricks === 4) { if (activeSeporu === 1) { activeSeporu = 0; isDoubleSeporu = true; } else { activeSeporu = 1; isSeporu = true; } } 
    else {
        if (team1Tricks === 8) { earnedTokens = 3; roundWinner = 1; } else if (team2Tricks === 8) { earnedTokens = 3; roundWinner = 2; } else if (team1Tricks > 4) { earnedTokens = 1; roundWinner = 1; } else if (team2Tricks > 4) { earnedTokens = 2; roundWinner = 2; } 
        if (activeSeporu === 1) { earnedTokens += 1; activeSeporu = 0; }
        if (roundWinner === 1) team1Kola += earnedTokens; if (roundWinner === 2) team2Kola += earnedTokens;
    }
    updateScoresUI();
    if (team1Kola >= 10 || team2Kola >= 10) { isGameOver = true; if (team1Kola >= 10) addGlobalPoints(50); triggerCelebration('game', team1Kola >= 10 ? 1 : 2); } else if (isDoubleSeporu) { triggerCelebration('double_seporu', 0); } else if (isSeporu) { triggerCelebration('seporu', 0); } else { triggerCelebration('round', roundWinner, earnedTokens); }
}
function updateScoresUI() { document.getElementById('t1-tricks').innerText = team1Tricks; document.getElementById('t2-tricks').innerText = team2Tricks; document.getElementById('t1-kola').innerText = team1Kola; document.getElementById('t2-kola').innerText = team2Kola; document.getElementById('t1-left').innerText = Math.max(0, 10 - team1Kola); document.getElementById('t2-left').innerText = Math.max(0, 10 - team2Kola); }

initApp();