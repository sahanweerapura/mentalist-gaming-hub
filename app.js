const lang = {
    en: { 
        title: "MENTALIST LIVE <span class='neon-pink'>HUB</span>", toggleBtn: "සිංහල (Sinhala)", 
        regTitle: "ENTER THE LOBBY", namePH: "Player Alias", phonePH: "Mobile Number", emailPH: "Email Address", 
        btnPlay: "CONNECT TO SERVER", btnQuit: "Exit Game", txtOnline: "PLAYERS ONLINE:",
        lobbyTitle: "SELECT A GAME", txtCareerPoints: "CAREER POINTS",
        txtGameOmi: "ORMI SINHALA", txtGameOmiDesc: "Classic Sri Lankan Card Game", 
        txtGameTTT: "TIC-TAC-TOE", txtGameTTTDesc: "Kathira Binduwa Showdown",
        txtGameCrush: "SWEET CRUSH", txtGameCrushDesc: "Match 3 Puzzle Game",
        txtGameShooter: "NEON BLASTER", txtGameShooterDesc: "Live Arena Shooter",
        txtGameSoon2: "GTA FIVEM", btnLocked2: "LOCKED",
        modalTitle: "SELECT MODE", btnSolo: "SOLO", btnMulti: "MULTIPLAYER (ONLINE)", btnCancel: "CANCEL",
        roomModalTitle: "MULTIPLAYER ROOM", btnCreateRoom: "CREATE CUSTOM ROOM", txtOr: "— OR —", roomCodeInputPH: "ENTER ROOM CODE", btnJoinRoom: "JOIN ROOM",
        waitingTitleJoin: "JOINED ROOM", waitingSubJoin: "Waiting for host to start...",
        waitingTitleCreate: "ROOM LOBBY", waitingSubCreate: "Share this code with your friends:", waitingStatus: "Waiting for players to join...", btnStartMulti: "START GAME", btnCancelWait: "LEAVE ROOM",
        txtWaitingPlayers: "Players Connected", txtPublicRooms: "PUBLIC LOBBIES",
        txtChatRooms: "COMMUNITY CHATS", btnCreateChat: "+ CREATE ROOM", txtCreateChatTitle: "CREATE CHAT ROOM", btnConfirmChat: "CREATE", btnCancelChat: "CANCEL",
        txtChatLockTitle: "PRIVATE ROOM", txtChatLockSub: "Enter password to join.", btnVerifyChat: "JOIN", btnCancelPass: "CANCEL",
        chatDefHeader: "Select a room to join the conversation.", btnSendChat: "SEND",
        txtRoomChatTitle: "ROOM CHAT", roomChatPH: "Message...",
        t1Label: "TEAM A", t2Label: "TEAM B", txtKata: "Tricks", txtKola: "Tokens", txtTrumpBadge: "TRUMP", lblPart: "Team A", lblT2: "Team B", roleDealer: "(DEALER)",
        statusWait: "Awaiting Players...", statusShuffle: "Shuffling deck...", statusCut: " is cutting...", myCutPrompt: "Your turn to Cut or Decline.", btnCut: "CUT DECK", btnDecline: "DECLINE",
        statusDeal: "Dealing Phase 1...", statusTrump: "Select Trump Suit", trumpTitle: "SELECT TRUMP", botTrumpPrompt: " is selecting Trump...", statusDeal2: "Dealing Phase 2...", statusPlay: "YOUR TURN! PLAY A CARD.", botThink: " is calculating...",
        t1Win: "TEAM A SECURES TRICK!", t2Win: "TEAM B SECURES TRICK!", gameOver: "MATCH TERMINATED", celebTokens: "TOKENS EARNED!", celebWinRnd: " secured the round!", btnCont: "CONTINUE",
        celebChamp: "🏆 MATCH CHAMPIONS 🏆", celebWinGame: "ABSOLUTE VICTORY FOR ", btnAgain: "PLAY AGAIN", celebSeporu: "SEPORU! (TIE)", celebSeporuSub: "No tokens awarded. Next round is worth +1 Bonus Token!", celebDblSeporu: "SEPORU CANCELLED!", celebDblSeporuSub: "Double Tie! The bonus token has been cancelled.",
        tttYourTurn: "Your Turn! (X)", tttBotTurn: "Bot is thinking... (O)", tttWinX: "YOU WIN!", tttWinO: "BOT WINS!", tttDraw: "IT'S A DRAW!", txtCrushScore: "MATCH SCORE", txtCrushMoves: "MOVES", txtCrushLvl: "LEVEL",
        winMsg: "Great! Yes, you won!", winSub: "You won [X] tokens this round!", loseMsg: "You lost...", loseSub: "You lost [X] tokens this round."
    },
    si: { 
        title: "MENTALIST LIVE <span class='neon-pink'>හබ්</span>", toggleBtn: "English", 
        regTitle: "ලොබියට පිවිසෙන්න", namePH: "ක්‍රීඩකයාගේ නම", phonePH: "ජංගම අංකය", emailPH: "විද්‍යුත් තැපෑල", 
        btnPlay: "සර්වර් එකට සම්බන්ධ වන්න", btnQuit: "ඉවත් වන්න", txtOnline: "මාර්ගගත ක්‍රීඩකයින්:",
        lobbyTitle: "ක්‍රීඩාවක් තෝරන්න", txtCareerPoints: "ඔබගේ ලකුණු",
        txtGameOmi: "ඔර්මි සිංහල", txtGameOmiDesc: "සාම්ප්‍රදායික ක්‍රීඩාව", 
        txtGameTTT: "කතිර බින්දුව", txtGameTTTDesc: "Tic-Tac-Toe තරගය",
        txtGameCrush: "ස්වීට් ක්‍රශ්", txtGameCrushDesc: "Match 3 ප්‍රහේලිකාව",
        txtGameShooter: "නියොන් බ්ලාස්ටර්", txtGameShooterDesc: "සජීවී වෙඩි තැබීමේ ක්‍රීඩාව",
        txtGameSoon2: "GTA FIVEM", btnLocked2: "අගුලු දමා ඇත",
        modalTitle: "මාදිලිය තෝරන්න", btnSolo: "තනිවම", btnMulti: "ඔන්ලයින් (මිතුරන් සමඟ)", btnCancel: "අවලංගු කරන්න",
        roomModalTitle: "ඔන්ලයින් කාමරය", btnCreateRoom: "නව කාමරයක් සාදන්න", txtOr: "— හෝ —", roomCodeInputPH: "කේතය ඇතුලත් කරන්න", btnJoinRoom: "එක්වන්න",
        waitingTitleJoin: "කාමරයට එක්විය", waitingSubJoin: "ක්‍රීඩාව ආරම්භ කරන තෙක් රැඳී සිටින්න...",
        waitingTitleCreate: "කාමර ලොබිය", waitingSubCreate: "ඔබේ මිතුරන් සමඟ මෙම කේතය බෙදාගන්න:", waitingStatus: "ක්‍රීඩකයින් එක්වන තෙක් රැඳී සිටින්න...", btnStartMulti: "ක්‍රීඩාව අරඹන්න", btnCancelWait: "ඉවත් වන්න",
        txtWaitingPlayers: "සම්බන්ධිත ක්‍රීඩකයින්", txtPublicRooms: "පොදු කාමර",
        txtChatRooms: "චැට් කාමර", btnCreateChat: "+ කාමරයක් සාදන්න", txtCreateChatTitle: "නව චැට් එකක්", btnConfirmChat: "සාදන්න", btnCancelChat: "අවලංගු කරන්න",
        txtChatLockTitle: "රහස්‍ය කාමරය", txtChatLockSub: "මුරපදය ඇතුලත් කරන්න.", btnVerifyChat: "එක්වන්න", btnCancelPass: "අවලංගු කරන්න",
        chatDefHeader: "කතාබස් කිරීමට කාමරයක් තෝරන්න.", btnSendChat: "යවන්න",
        txtRoomChatTitle: "කාමරයේ කතාබස්", roomChatPH: "පණිවිඩය...",
        t1Label: "කණ්ඩායම A", t2Label: "කණ්ඩායම B", txtKata: "අත්", txtKola: "කැටකොල", txtTrumpBadge: "තුරුම්පුව", lblPart: "කණ්ඩායම A", lblT2: "කණ්ඩායම B", roleDealer: "(බෙදන්නා)",
        statusWait: "රැඳී සිටින්න...", statusShuffle: "කාඩ්පත් කලවම් කරමින්...", statusCut: " කුට්ටිය කපමින්...", myCutPrompt: "ඔබේ වාරය: කපන්න හෝ ප්‍රතික්ෂේප කරන්න.", btnCut: "කපන්න", btnDecline: "එපා",
        statusDeal: "පළමු අදියර බෙදමින්...", statusTrump: "තුරුම්පුව තෝරන්න", trumpTitle: "තුරුම්පුව කුමක්ද?", botTrumpPrompt: " තුරුම්පුව තෝරමින්...", statusDeal2: "දෙවන අදියර බෙදමින්...", statusPlay: "ඔබේ වාරය! කාඩ්පතක් දමන්න.", botThink: " සිතමින් සිටී...",
        t1Win: "කණ්ඩායම A වටය දිනුවා!", t2Win: "කණ්ඩායම B වටය දිනුවා!", gameOver: "තරගය අවසන්", celebTokens: "අඩෝ උඹල කැටකොල දින්නා...!!", celebWinRnd: " මෙම වටය ජයගත්තා!", btnCont: "ඉදිරියට",
        celebChamp: "🏆 තරගයේ ශූරයින් 🏆", celebWinGame: "විශිෂ්ට ජයග්‍රහණයක්! දිනුවේ ", btnAgain: "නැවත ක්‍රීඩා කරන්න", celebSeporu: "සෙපෝරුයි!", celebSeporuSub: "කිසිවෙකුට කැටකොල නැත. ඊළඟ වටයට අමතර +1 එකතු වේ!", celebDblSeporu: "සෙපෝරුට සෙපෝරු කැපුණා!", celebDblSeporuSub: "දිගටම සෙපෝරුයි! අමතර කැටකොලය අවලංගු විය.",
        tttYourTurn: "ඔබේ වාරය! (X)", tttBotTurn: "පරිගණකය සිතමින්... (O)", tttWinX: "ඔබ දිනුවා!", tttWinO: "පරිගණකය දිනුවා!", tttDraw: "තරගය සමයි!", txtCrushScore: "ලකුණු", txtCrushMoves: "වාර ගණන", txtCrushLvl: "මට්ටම",
        winMsg: "නියමයි! ඔබ දිනුවා!", winSub: "ඔබට මෙම වටයෙන් කැටකොල [X] ක් ලැබුණා!", loseMsg: "ඔබ පරාදයි...", loseSub: "ඔබට මෙම වටයෙන් කැටකොල [X] ක් අහිමි වුණා."
    }
};

let currentLang = 'en'; let selectedGame = ''; let isMultiplayer = false; let isOwner = false;
let userProfile = { alias: "", email: "", phone: "", points: 0 }; let currentLobbyMax = 4; let myIndex = 0; 
let isGameOver = false;

// --- 1. FIREBASE CONNECTION ---
const firebaseConfig = {
    apiKey: "AIzaSyDFcV8p0GwyOlCAkblwIbBVnsp6C_zYAs0", authDomain: "mentalist-live-hub.firebaseapp.com",
    databaseURL: "https://mentalist-live-hub-default-rtdb.firebaseio.com", projectId: "mentalist-live-hub",
    storageBucket: "mentalist-live-hub.firebasestorage.app", messagingSenderId: "130632052362",
    appId: "1:130632052362:web:0d5225fbe28c9ebf528773", measurementId: "G-Y1CNV7G7J0"
};
firebase.initializeApp(firebaseConfig); const db = firebase.database();

// --- 2. LIVE PRESENCE & STORAGE ---
function initPresence() { const listRef = db.ref("onlinePlayers"); const userRef = listRef.push(); db.ref(".info/connected").on("value", (snap) => { if (snap.val()) { userRef.onDisconnect().remove(); userRef.set(userProfile.alias || "Anonymous"); } }); listRef.on("value", (snap) => { document.getElementById('live-count').innerText = snap.numChildren() || 1; }); }
function initApp() { let saved = localStorage.getItem('mentalistProfile'); if (saved) { userProfile = JSON.parse(saved); loginUser(userProfile.alias, userProfile.email, userProfile.phone); } }
function saveProfile() { localStorage.setItem('mentalistProfile', JSON.stringify(userProfile)); updateCareerUI(); }
function addGlobalPoints(pts) { userProfile.points += pts; saveProfile(); const popup = document.createElement('div'); popup.className = 'point-popup'; popup.innerText = `+${pts} MP`; popup.style.left = '50%'; popup.style.top = '20%'; document.body.appendChild(popup); setTimeout(() => popup.remove(), 1000); }
function updateCareerUI() { document.getElementById('profilePoints').innerHTML = `${userProfile.points} <span style="font-size: 1rem; color: #fff;">MP</span>`; let rank = "BRONZE NOVICE"; if(userProfile.points >= 100) rank = "SILVER CHALLENGER"; if(userProfile.points >= 500) rank = "GOLD VETERAN"; if(userProfile.points >= 1000) rank = "DIAMOND MENTALIST"; document.getElementById('profileRank').innerText = rank; }
window.logoutProfile = function() { localStorage.removeItem('mentalistProfile'); location.reload(); }

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'si' : 'en'; let l = lang[currentLang];
    document.getElementById('titleText').innerHTML = l.title; document.getElementById('langToggle').innerText = l.toggleBtn; document.getElementById('registerTitle').innerText = l.regTitle; document.getElementById('playerName').placeholder = l.namePH; document.getElementById('playerPhone').placeholder = l.phonePH; document.getElementById('playerEmail').placeholder = l.emailPH; document.getElementById('joinBtn').innerText = l.btnPlay; document.getElementById('txtOnline').innerText = l.txtOnline; document.getElementById('btnQuit').innerText = l.btnQuit; document.getElementById('btnQuitTTT').innerText = l.btnQuit; document.getElementById('btnQuitCrush').innerText = l.btnQuit;
    document.getElementById('lobbyTitle').innerText = l.lobbyTitle; document.getElementById('txtCareerPoints').innerText = l.txtCareerPoints; document.getElementById('txtGameOmi').innerText = l.txtGameOmi; document.getElementById('txtGameOmiDesc').innerText = l.txtGameOmiDesc; document.getElementById('txtGameTTT').innerText = l.txtGameTTT; document.getElementById('txtGameTTTDesc').innerText = l.txtGameTTTDesc; document.getElementById('txtGameCrush').innerText = l.txtGameCrush; document.getElementById('txtGameCrushDesc').innerText = l.txtGameCrushDesc; document.getElementById('txtGameShooter').innerText = l.txtGameShooter; document.getElementById('txtGameShooterDesc').innerText = l.txtGameShooterDesc; document.getElementById('txtGameSoon2').innerText = l.txtGameSoon2; document.getElementById('btnLocked2').innerText = l.btnLocked2;
    document.getElementById('modalTitle').innerText = l.modalTitle; document.getElementById('btnSolo').innerText = l.btnSolo; document.getElementById('btnMulti').innerText = l.btnMulti; document.getElementById('btnCancel').innerText = l.btnCancel;
    document.getElementById('roomModalTitle').innerText = l.roomModalTitle; document.getElementById('btnCreateRoom').innerText = l.btnCreateRoom; document.getElementById('txtOr').innerText = l.txtOr; document.getElementById('roomCodeInput').placeholder = l.roomCodeInputPH; document.getElementById('btnJoinRoom').innerText = l.btnJoinRoom; document.getElementById('btnCancelRoom').innerText = l.btnCancel; document.getElementById('btnStartMulti').innerText = l.btnStartMulti; document.getElementById('btnCancelWait').innerText = l.btnCancelWait; document.getElementById('txtWaitingPlayers').innerHTML = `${l.txtWaitingPlayers} <span id="queueCount">1</span>/<span id="queueMax">${currentLobbyMax}</span>`;
    document.getElementById('txtChatRooms').innerText = l.txtChatRooms; document.getElementById('btnCreateChat').innerText = l.btnCreateChat; document.getElementById('txtCreateChatTitle').innerText = l.txtCreateChatTitle; document.getElementById('btnConfirmChat').innerText = l.btnConfirmChat; document.getElementById('btnCancelChat').innerText = l.btnCancelChat; document.getElementById('txtChatLockTitle').innerText = l.txtChatLockTitle; document.getElementById('txtChatLockSub').innerText = l.txtChatLockSub; document.getElementById('btnVerifyChat').innerText = l.btnVerifyChat; document.getElementById('btnCancelPass').innerText = l.btnCancelPass; document.getElementById('btnSendChat').innerText = l.btnSendChat; if(!activeChatRoomId) document.getElementById('chatHeader').innerText = l.chatDefHeader;
    document.getElementById('txtRoomChatTitle').innerText = l.txtRoomChatTitle; document.getElementById('roomChatInput').placeholder = l.roomChatPH; document.getElementById('btnRoomSendChat').innerText = l.btnSendChat;
    document.getElementById('txtPublicRooms').innerText = l.txtPublicRooms;
    
    document.getElementById('t1Label').innerText = l.t1Label; document.getElementById('t2Label').innerText = l.t2Label; 
    document.getElementById('lblPart').innerText = l.lblPart; document.getElementById('lblT1').innerText = l.lblPart; 
    document.getElementById('lblT2A').innerText = l.lblT2; document.getElementById('lblT2B').innerText = l.lblT2; 

    ['txtKata1', 'txtKata2'].forEach(id => document.getElementById(id).innerText = l.txtKata); 
    ['txtKola1', 'txtKola2'].forEach(id => document.getElementById(id).innerText = l.txtKola); 
    document.getElementById('txtTrumpBadge').innerText = l.txtTrumpBadge; document.getElementById('btnCut').innerText = l.btnCut; document.getElementById('btnDecline').innerText = l.btnDecline; document.getElementById('trumpTitle').innerText = l.trumpTitle; document.getElementById('txtCrushScore').innerText = l.txtCrushScore; document.getElementById('txtCrushMoves').innerText = l.txtCrushMoves; document.getElementById('txtCrushLvl').innerText = l.txtCrushLvl;
    updateRolesInUI(); 
    if(tttActive) { let mySymbol = isHost ? "X" : "O"; document.getElementById('tttStatus').innerText = board.includes("X") || board.includes("O") ? (tttPlayerTurn ? (currentLang==='si'?`ඔබේ වාරය! (${mySymbol})`:`Your Turn! (${mySymbol})`) : (currentLang==='si'?"ප්‍රතිවාදියාගේ වාරය...":"Waiting for Opponent...")) : l.tttYourTurn; }
}

document.getElementById('playerForm').addEventListener('submit', function(e) { e.preventDefault(); let alias = document.getElementById('playerName').value; let email = document.getElementById('playerEmail').value; let phone = document.getElementById('playerPhone').value; userProfile.alias = alias; userProfile.email = email; userProfile.phone = phone; saveProfile(); loginUser(alias, email, phone); });

// ENTER KEY SYNC
document.addEventListener("DOMContentLoaded", () => { 
    document.getElementById('chatInput').addEventListener('keypress', e => { if(e.key === 'Enter') sendChatMessage(); }); 
    document.getElementById('roomChatInput').addEventListener('keypress', e => { if(e.key === 'Enter') sendRoomMessage(); }); 
});

function loginUser(alias, email, phone) { 
    let lowerName = alias.toLowerCase(); if(lowerName.includes('mentalist') || lowerName.includes('sahan')) isOwner = true; 
    botNames.p1 = alias; document.getElementById('p1-name').innerText = alias; document.getElementById('profileName').innerText = alias.toUpperCase(); 
    document.getElementById('login-screen').style.display = 'none'; document.getElementById('lobby-screen').style.display = 'flex'; 
    initPresence(); initGlobalChatSync(); initPublicRoomsSync(); updateCareerUI(); toggleLanguage(); toggleLanguage(); 
}

// --- 4. GLOBAL FIREBASE CHAT & PUBLIC ROOMS SYNC ---
let chatRooms = []; let activeChatRoomId = null; let pendingRoomId = null;
function initGlobalChatSync() { db.ref("globalChatRooms").on("value", snap => { if(snap.exists()) { chatRooms = snap.val(); chatRooms.forEach(r => r.messages = r.messages || []); renderChatRooms(); if(activeChatRoomId) renderMessages(); } else { chatRooms = [{ id: 1, name: "General Lobby", isLocked: false, password: "", messages: [{user: "System", text: "Welcome to Mentalist Live Hub!", isAdmin: true}] }]; db.ref("globalChatRooms").set(chatRooms); } }); }
function renderChatRooms() { const list = document.getElementById('chatRoomList'); list.innerHTML = ''; chatRooms.forEach(room => { let lockIcon = room.isLocked ? "🔒" : "💬"; list.innerHTML += `<div class="chat-room-item" onclick="attemptJoinChat(${room.id})"><span>${lockIcon} ${room.name}</span><span style="font-size:0.8rem; color:#aaa;">${room.messages.length} msgs</span></div>`; }); }
window.openCreateChatModal = function() { document.getElementById('newChatName').value = ''; document.getElementById('newChatPassword').value = ''; document.getElementById('create-chat-modal').style.display = 'flex'; }
window.confirmCreateChat = function() { let name = document.getElementById('newChatName').value; let pass = document.getElementById('newChatPassword').value; if(!name) return; let newRoom = { id: Date.now(), name: name, isLocked: pass.length > 0, password: pass, messages: [] }; chatRooms.push(newRoom); db.ref("globalChatRooms").set(chatRooms); document.getElementById('create-chat-modal').style.display = 'none'; attemptJoinChat(newRoom.id); }
window.closeChatModal = function() { document.getElementById('create-chat-modal').style.display = 'none'; document.getElementById('newChatName').value = ''; document.getElementById('newChatPassword').value = ''; }
window.attemptJoinChat = function(id) { let room = chatRooms.find(r => r.id === id); if(room.isLocked && !isOwner) { pendingRoomId = id; document.getElementById('joinChatPassword').value = ''; document.getElementById('chat-password-modal').style.display = 'flex'; } else { openChatRoom(id); } }
window.verifyChatPassword = function() { let room = chatRooms.find(r => r.id === pendingRoomId); let pass = document.getElementById('joinChatPassword').value; if(room.password === pass || isOwner) { document.getElementById('chat-password-modal').style.display = 'none'; openChatRoom(room.id); } else { alert(currentLang === 'si' ? "මුරපදය වැරදියි!" : "Incorrect Password!"); } }
window.closeChatPassModal = function() { document.getElementById('chat-password-modal').style.display = 'none'; document.getElementById('joinChatPassword').value = ''; }
function openChatRoom(id) { activeChatRoomId = id; let room = chatRooms.find(r => r.id === id); document.getElementById('chatHeader').innerText = room.name + (room.isLocked ? " 🔒" : ""); document.getElementById('chatInput').disabled = false; document.getElementById('btnSendChat').disabled = false; renderMessages(); }
function renderMessages() { if(!activeChatRoomId) return; let room = chatRooms.find(r => r.id === activeChatRoomId); const msgDiv = document.getElementById('chatMessages'); msgDiv.innerHTML = ''; room.messages.forEach(m => { let isMe = m.user === botNames.p1; let adminTag = m.isAdmin ? `<span class="admin-badge">ADMIN</span>` : ""; msgDiv.innerHTML += `<div class="chat-msg ${isMe ? 'self' : ''} ${m.isAdmin ? 'admin' : ''}"><div class="chat-user">${m.user} ${adminTag}</div><div>${m.text}</div></div>`; }); msgDiv.scrollTop = msgDiv.scrollHeight; }
window.sendChatMessage = function() { let input = document.getElementById('chatInput'); if(!input.value || !activeChatRoomId) return; let roomIdx = chatRooms.findIndex(r => r.id === activeChatRoomId); chatRooms[roomIdx].messages.push({ user: botNames.p1, text: input.value, isAdmin: isOwner }); db.ref("globalChatRooms/" + roomIdx).set(chatRooms[roomIdx]); input.value = ''; }

function initPublicRoomsSync() {
    db.ref("rooms").on("value", snap => {
        if(document.getElementById('lobby-screen').style.display !== 'flex') return;
        const pubList = document.getElementById('publicRoomsListContainer'); pubList.innerHTML = '';
        if(snap.exists()) {
            let rooms = snap.val();
            for(let code in rooms) {
                let r = rooms[code];
                if(!r.isPrivate && r.status === "waiting") {
                    let pCount = r.players ? r.players.filter(x => x !== "").length : 0;
                    let icon = r.game === 'omi' ? '🎴' : (r.game === 'ttt' ? '❌⭕' : '🔫');
                    pubList.innerHTML += `<div class="chat-room-item" onclick="joinSpecificRoom('${code}')"><span>${icon} ${r.game.toUpperCase()} - Host: ${r.host}</span><span style="color:#00ff00;">${pCount}/${r.maxPlayers}</span></div>`;
                }
            }
        }
        if(pubList.innerHTML === '') pubList.innerHTML = `<div style="color:#aaa; text-align:center; padding: 20px;">No public lobbies available right now.</div>`;
    });
}
window.joinSpecificRoom = function(code) { document.getElementById('roomCodeInput').value = code; joinRoom(); }

// --- 5. FIREBASE MATCHMAKING ---
let currentRoomCode = null; let isHost = false;
window.openModeModal = function(game) { selectedGame = game; document.getElementById('mode-modal').style.display = 'flex'; };
window.closeModal = function() { document.getElementById('mode-modal').style.display = 'none'; };
window.closeRoomModal = function() { document.getElementById('room-modal').style.display = 'none'; document.getElementById('roomCodeInput').value = ''; document.getElementById('isPrivateRoom').checked = false; };

window.launchGame = function(mode) {
    isMultiplayer = (mode === 'multi'); document.getElementById('mode-modal').style.display = 'none';
    if (mode === 'crush') { document.getElementById('lobby-screen').style.display = 'none'; document.getElementById('crush-screen').style.display = 'block'; initCrush(); return; }
    if (isMultiplayer) { document.getElementById('room-modal').style.display = 'flex'; return; }
    document.getElementById('lobby-screen').style.display = 'none'; mySeat = 'p1'; myIndex = 0; 
    if (selectedGame === 'omi') { document.getElementById('game-screen').style.display = 'block'; startLifecycle(); } 
    else if (selectedGame === 'ttt') { document.getElementById('ttt-screen').style.display = 'block'; initTTT(); }
    else if (selectedGame === 'shooter') { document.getElementById('shooter-screen').style.display = 'block'; initShooter(); }
};

window.createRoom = function() {
    currentLobbyMax = (selectedGame === 'omi') ? 4 : (selectedGame === 'shooter' ? 6 : 2); 
    let code = Math.random().toString(36).substring(2, 8).toUpperCase(); currentRoomCode = code; isHost = true;
    let isPrivate = document.getElementById('isPrivateRoom').checked;
    
    // Fixed Size Array to map positions
    let pArr = Array(currentLobbyMax).fill(""); pArr[0] = botNames.p1;
    
    db.ref("rooms/" + code).set({ game: selectedGame, host: botNames.p1, maxPlayers: currentLobbyMax, players: pArr, status: "waiting", chat: [], isPrivate: isPrivate });
    document.getElementById('room-modal').style.display = 'none'; document.getElementById('roomCodeInput').value = ''; document.getElementById('isPrivateRoom').checked = false;
    
    let l = lang[currentLang]; document.getElementById('waitingTitle').innerText = l.waitingTitleCreate; document.getElementById('waitingSub').innerText = l.waitingSubCreate; document.getElementById('displayRoomCode').innerText = code; document.getElementById('waitingStatus').innerText = l.waitingStatus;
    document.getElementById('btnStartMulti').style.display = 'block'; document.getElementById('btnStartMulti').disabled = true; document.getElementById('waiting-modal').style.display = 'flex'; openRoomChat(code); listenToFirebaseRoom(code);
};

window.joinRoom = function() {
    let code = document.getElementById('roomCodeInput').value.toUpperCase(); if(!code) return; 
    db.ref("rooms/" + code).once("value", snap => {
        if(snap.exists()) {
            let roomData = snap.val();
            let pArr = roomData.players || Array(roomData.maxPlayers).fill("");
            
            if (pArr.includes(botNames.p1)) {
                alert("This Alias is already in the room! Please wait or use a different name."); return; 
            }

            let activeCount = pArr.filter(x => x !== "").length;
            if(activeCount < roomData.maxPlayers && roomData.status === "waiting") {
                isHost = false; currentRoomCode = code; selectedGame = roomData.game; currentLobbyMax = roomData.maxPlayers;
                
                let emptyIdx = pArr.findIndex(x => x === "");
                if (emptyIdx > -1) { pArr[emptyIdx] = botNames.p1; db.ref("rooms/" + code + "/players").set(pArr); }
                
                document.getElementById('room-modal').style.display = 'none'; document.getElementById('roomCodeInput').value = ''; document.getElementById('isPrivateRoom').checked = false;
                let l = lang[currentLang]; document.getElementById('waitingTitle').innerText = l.waitingTitleJoin; document.getElementById('displayRoomCode').innerText = code; document.getElementById('waitingSub').innerText = l.waitingSubJoin; document.getElementById('waitingStatus').innerText = currentLang === 'si' ? "සම්බන්ධ විය. Host ආරම්භ කරන තෙක් රැඳී සිටින්න." : "Connected. Waiting for Host to start.";
                document.getElementById('btnStartMulti').style.display = 'none'; document.getElementById('waiting-modal').style.display = 'flex'; openRoomChat(code); listenToFirebaseRoom(code);
            } else { alert("Room is full or game has started!"); }
        } else { alert("Room code not found!"); }
    });
};

window.joinTeam = function(team) {
    if(!currentRoomCode) return;
    db.ref("rooms/" + currentRoomCode + "/players").once("value", snap => {
        if(snap.exists()) {
            let pArr = snap.val(); let oldIdx = pArr.indexOf(botNames.p1);
            let targetIndices = (team === 'A') ? [0, 2] : [1, 3];
            if(targetIndices.includes(oldIdx)) return; // Already there
            
            let emptyIdx = targetIndices.find(i => pArr[i] === "" || pArr[i] === undefined);
            if(emptyIdx !== undefined) {
                if(oldIdx > -1) pArr[oldIdx] = "";
                pArr[emptyIdx] = botNames.p1;
                db.ref("rooms/" + currentRoomCode + "/players").set(pArr);
            } else { alert("That team is full!"); }
        }
    });
};

function listenToFirebaseRoom(code) {
    db.ref("rooms/" + code).on("value", snap => {
        let data = snap.val(); if(!data) return; 
        document.getElementById('queueMax').innerText = data.maxPlayers; 
        
        let pArr = data.players || Array(data.maxPlayers).fill("");
        let actualPlayers = pArr.filter(x => x !== "");
        document.getElementById('queueCount').innerText = actualPlayers.length;
        myIndex = pArr.indexOf(botNames.p1);

        // OMI TEAM SELECTION UI
        if(selectedGame === 'omi') {
            document.getElementById('standardQueue').style.display = 'none';
            document.getElementById('teamSelection').style.display = 'flex';
            
            const formatName = (n, idx) => {
                if(!n || n === "") return '<div style="color:#555; font-style:italic;">- Empty -</div>';
                let icon = idx === 0 ? "👑" : "🎮"; let meTxt = n === botNames.p1 ? " <span style='color:#ffd700;'>(You)</span>" : "";
                return `<div>${icon} ${n}${meTxt}</div>`;
            }
            document.getElementById('listTeamA').innerHTML = formatName(pArr[0], 0) + formatName(pArr[2], 2);
            document.getElementById('listTeamB').innerHTML = formatName(pArr[1], 1) + formatName(pArr[3], 3);
            
            if(myIndex > -1) {
                botNames.p3 = pArr[(myIndex + 2) % 4] || "Waiting...";
                botNames.p4 = pArr[(myIndex + 1) % 4] || "Waiting...";
                botNames.p2 = pArr[(myIndex + 3) % 4] || "Waiting...";
                document.getElementById('p3-name').innerText = botNames.p3;
                document.getElementById('p4-name').innerText = botNames.p4;
                document.getElementById('p2-name').innerText = botNames.p2;
            }
        } else {
            // Standard List UI
            document.getElementById('teamSelection').style.display = 'none';
            document.getElementById('standardQueue').style.display = 'block';
            const qList = document.getElementById('waitingPlayerList'); qList.innerHTML = '';
            let dispCount = 0;
            pArr.forEach((p, idx) => {
                if(p !== "") {
                    let icon = idx === 0 ? "👑" : "🎮"; let meTxt = p === botNames.p1 ? " (You)" : ""; qList.innerHTML += `<div class="queue-item"><div class="queue-avatar">${icon}</div> ${p}${meTxt}</div>`;
                    dispCount++;
                }
            });
            for(let i=dispCount; i<data.maxPlayers; i++) { qList.innerHTML += `<div class="queue-item empty">Waiting for player...</div>`; }
        }
        
        let minPlayers = (selectedGame === 'shooter') ? 4 : data.maxPlayers;
        if(isHost) {
            if (actualPlayers.length >= minPlayers) {
                document.getElementById('waitingStatus').innerText = currentLang === 'si' ? "ආරම්භ කිරීමට සූදානම්!" : "Ready to start!"; 
                document.getElementById('btnStartMulti').disabled = false; 
            } else {
                document.getElementById('waitingStatus').innerText = currentLang === 'si' ? "ක්‍රීඩකයින් එක්වන තෙක් රැඳී සිටින්න..." : "Waiting for players to join..."; 
                document.getElementById('btnStartMulti').disabled = true; 
            }
        }

        if(data.status === "playing" && !isHost && document.getElementById('waiting-modal').style.display === 'flex') { startMultiplayerGameClient(); }
        if(data.chat) { const msgDiv = document.getElementById('roomChatMessages'); msgDiv.innerHTML = ''; data.chat.forEach(msg => { let isMe = msg.user === userProfile.alias; msgDiv.innerHTML += `<div class="chat-msg ${isMe ? 'self' : ''}"><div class="chat-user">${msg.user}</div><div>${msg.text}</div></div>`; }); msgDiv.scrollTop = msgDiv.scrollHeight; }
    });
}

window.startMultiplayerGame = function() { db.ref("rooms/" + currentRoomCode + "/status").set("playing"); startMultiplayerGameClient(); }
function startMultiplayerGameClient() { 
    document.getElementById('waiting-modal').style.display = 'none'; document.getElementById('lobby-screen').style.display = 'none'; 
    if (selectedGame === 'omi') { document.getElementById('game-screen').style.display = 'block'; syncOmiFromFirebase(); if(isHost) startLifecycle(); else document.getElementById('gameStatus').innerText = "Waiting for Host..."; } 
    else if (selectedGame === 'ttt') { document.getElementById('ttt-screen').style.display = 'block'; syncTTTFromFirebase(); initTTT(); } 
    else if (selectedGame === 'shooter') { document.getElementById('shooter-screen').style.display = 'block'; initShooter(); syncShooterFirebase(); }
}

window.closeWaitingModal = function() { 
    if(currentRoomCode) { 
        if(isHost) { db.ref("rooms/" + currentRoomCode).remove(); } 
        else {
            db.ref("rooms/" + currentRoomCode + "/players").once("value", snap => {
                if(snap.exists()) { let cleanedArr = snap.val().map(n => n === botNames.p1 ? "" : n); db.ref("rooms/" + currentRoomCode + "/players").set(cleanedArr); }
            });
        }
        db.ref("rooms/" + currentRoomCode).off(); 
    } 
    document.getElementById('waiting-modal').style.display = 'none'; document.getElementById('btnStartMulti').style.display = 'none'; document.getElementById('room-chat-sidebar').style.display = 'none'; 
};

window.quitToLobby = function() { 
    isGameOver = true; team1Kola = 0; team2Kola = 0; activeSeporu = 0; tttActive = false; shooterActive = false; 
    if (crushInterval) clearInterval(crushInterval); 
    if(currentRoomCode) { 
        if(isHost) { db.ref("rooms/" + currentRoomCode).remove(); } 
        else {
            db.ref("rooms/" + currentRoomCode + "/players").once("value", snap => {
                if(snap.exists()) { let cleanedArr = snap.val().map(n => n === botNames.p1 ? "" : n); db.ref("rooms/" + currentRoomCode + "/players").set(cleanedArr); }
            });
            if (selectedGame === 'shooter') db.ref("rooms/" + currentRoomCode + "/shooterState/" + botNames.p1).remove();
        }
        db.ref("rooms/" + currentRoomCode).off(); 
    } 
    document.getElementById('game-screen').style.display = 'none'; document.getElementById('ttt-screen').style.display = 'none'; document.getElementById('crush-screen').style.display = 'none'; document.getElementById('shooter-screen').style.display = 'none'; document.getElementById('lobby-screen').style.display = 'flex'; document.getElementById('room-chat-sidebar').style.display = 'none'; 
};

let roomChatMinimized = false;
function openRoomChat(code) { document.getElementById('room-chat-sidebar').style.display = 'flex'; document.getElementById('roomChatCodeDisplay').innerText = code.toUpperCase(); document.getElementById('roomChatMessages').innerHTML = ''; }
window.toggleRoomChat = function() { roomChatMinimized = !roomChatMinimized; document.getElementById('roomChatBody').style.display = roomChatMinimized ? 'none' : 'flex'; document.getElementById('chatMinimizeBtn').innerText = roomChatMinimized ? '□' : '_'; document.getElementById('room-chat-sidebar').style.height = roomChatMinimized ? 'auto' : '380px'; }
window.toggleEmojiPicker = function() { const picker = document.getElementById('emoji-picker'); picker.style.display = picker.style.display === 'none' ? 'flex' : 'none'; }
window.insertEmoji = function(emoji) { const input = document.getElementById('roomChatInput'); input.value += emoji; toggleEmojiPicker(); input.focus(); }
window.sendRoomMessage = function() { const input = document.getElementById('roomChatInput'); if(!input.value || !currentRoomCode) return; db.ref("rooms/" + currentRoomCode + "/chat").once("value", snap => { let chat = snap.val() || []; chat.push({ user: userProfile.alias, text: input.value }); db.ref("rooms/" + currentRoomCode + "/chat").set(chat); input.value = ''; }); }

// --- FIREWORKS SYSTEM ---
function generateFireworks() {
    const container = document.getElementById('fireworks-container');
    if(!container) return; container.innerHTML = '';
    for(let i=0; i<40; i++) {
        let p = document.createElement('div'); p.className = 'particle'; p.style.left = (Math.random() * 100) + '%';
        p.style.backgroundColor = ['#ff3366', '#33b5e5', '#ffd700', '#00ff00'][Math.floor(Math.random()*4)];
        p.style.animationDuration = (Math.random() * 1 + 1) + 's'; p.style.animationDelay = (Math.random() * 0.5) + 's';
        container.appendChild(p);
    }
}

// --- NEON BLASTER ARENA (SHOOTER) DEATHMATCH ---
let shooterActive = false; let sCanvas, sCtx; let localShooter = { x: 400, y: 250, hp: 100, dead: false, color: '#33b5e5' }; let remoteShooters = {}; let sBullets = []; let sKeys = {}; let mx = 400, my = 250; let lastShot = 0; let shooterKills = {};
const pColors = ['#ff3366', '#33b5e5', '#00ff00', '#ffd700', '#cc66ff', '#ff8800'];

function initShooter() {
    shooterActive = true; sCanvas = document.getElementById('shooterCanvas'); sCtx = sCanvas.getContext('2d');
    localShooter = { x: 100 + Math.random() * 600, y: 100 + Math.random() * 300, hp: 100, dead: false, color: pColors[myIndex % 6] }; 
    sBullets = []; remoteShooters = {}; shooterKills = {};
    document.getElementById('mainHealthBar').style.width = "100%"; document.getElementById('mainHealthText').innerText = "100%";
    
    window.addEventListener('keydown', e => sKeys[e.key.toLowerCase()] = true); window.addEventListener('keyup', e => sKeys[e.key.toLowerCase()] = false);
    sCanvas.addEventListener('mousemove', e => { let r = sCanvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; });
    sCanvas.addEventListener('mousedown', () => { 
        if(!shooterActive || localShooter.dead || Date.now() - lastShot < 200) return;
        lastShot = Date.now();
        let angle = Math.atan2(my - localShooter.y, mx - localShooter.x);
        let b = { id: Date.now() + Math.random(), owner: botNames.p1, x: localShooter.x, y: localShooter.y, vx: Math.cos(angle)*10, vy: Math.sin(angle)*10 };
        sBullets.push(b); if(isMultiplayer && currentRoomCode) db.ref("rooms/"+currentRoomCode+"/bullets").push(b);
    });
    
    if(isMultiplayer && isHost && currentRoomCode) { db.ref("rooms/"+currentRoomCode+"/shooterKills").set({}); }
    requestAnimationFrame(shooterLoop);
}

function syncShooterFirebase() {
    if(!isMultiplayer || !currentRoomCode) return;
    setInterval(() => { if(shooterActive && !localShooter.dead) db.ref("rooms/"+currentRoomCode+"/shooterState/"+botNames.p1).set(localShooter); }, 50);
    
    db.ref("rooms/"+currentRoomCode+"/shooterState").on("value", snap => { 
        if(snap.exists() && shooterActive) { 
            let d = snap.val(); remoteShooters = {}; 
            for(let p in d) { if(p !== botNames.p1) remoteShooters[p] = d[p]; } 
        } else { remoteShooters = {}; }
    });
    
    db.ref("rooms/"+currentRoomCode+"/bullets").on("child_added", snap => { let b = snap.val(); if(b.owner !== botNames.p1) sBullets.push(b); });
    
    db.ref("rooms/"+currentRoomCode+"/shooterKills").on("value", snap => {
        if(snap.exists() && shooterActive) {
            shooterKills = snap.val();
            let sorted = Object.keys(shooterKills).sort((a,b) => shooterKills[b] - shooterKills[a]);
            let html = "";
            for(let i=0; i<Math.min(5, sorted.length); i++) {
                html += `<div class="leaderboard-item"><span>${i+1}. ${sorted[i]}</span><span>${shooterKills[sorted[i]]} Kills</span></div>`;
                if (shooterKills[sorted[i]] >= 15) {
                    shooterActive = false; alert(`${sorted[i]} WINS THE MATCH!`); quitToLobby();
                }
            }
            document.getElementById('shooterLeaderboard').innerHTML = html;
        }
    });
}

function shooterLoop() {
    if(!shooterActive) return;
    if(!localShooter.dead) {
        if(sKeys['w']) localShooter.y -= 4; if(sKeys['s']) localShooter.y += 4; if(sKeys['a']) localShooter.x -= 4; if(sKeys['d']) localShooter.x += 4;
        localShooter.x = Math.max(15, Math.min(785, localShooter.x)); localShooter.y = Math.max(15, Math.min(485, localShooter.y));
    }
    
    sCtx.clearRect(0,0,800,500);
    sCtx.strokeStyle = "rgba(51, 181, 229, 0.1)"; sCtx.lineWidth = 1;
    for(let i=0; i<800; i+=50) { sCtx.beginPath(); sCtx.moveTo(i,0); sCtx.lineTo(i,500); sCtx.stroke(); sCtx.beginPath(); sCtx.moveTo(0,i); sCtx.lineTo(800,i); sCtx.stroke(); }
    
    for(let p in remoteShooters) { let r = remoteShooters[p]; if(!r.dead && r.hp > 0) drawShooter(r.x, r.y, r.color, p, r.hp); }
    if(!localShooter.dead) drawShooter(localShooter.x, localShooter.y, localShooter.color, "YOU", localShooter.hp);
    
    for(let i=sBullets.length-1; i>=0; i--) {
        let b = sBullets[i]; b.x += b.vx; b.y += b.vy;
        sCtx.fillStyle = "#ffd700"; sCtx.beginPath(); sCtx.arc(b.x, b.y, 4, 0, Math.PI*2); sCtx.fill();
        if(b.x < 0 || b.x > 800 || b.y < 0 || b.y > 500) { sBullets.splice(i,1); continue; }
        
        if(b.owner !== botNames.p1 && !localShooter.dead && Math.hypot(b.x - localShooter.x, b.y - localShooter.y) < 20) {
            localShooter.hp -= 20; 
            document.getElementById('mainHealthBar').style.width = Math.max(0, localShooter.hp) + "%";
            document.getElementById('mainHealthText').innerText = Math.max(0, localShooter.hp) + "%";
            
            if(localShooter.hp <= 0 && !localShooter.dead) { 
                localShooter.dead = true; localShooter.hp = 0;
                if(isMultiplayer && currentRoomCode) {
                    let currentKills = shooterKills[b.owner] || 0;
                    db.ref("rooms/"+currentRoomCode+"/shooterKills/"+b.owner).set(currentKills + 1);
                    db.ref("rooms/"+currentRoomCode+"/shooterState/"+botNames.p1).set(localShooter);
                }
                setTimeout(() => {
                    localShooter.hp = 100; localShooter.dead = false;
                    localShooter.x = 100 + Math.random() * 600; localShooter.y = 100 + Math.random() * 300;
                    document.getElementById('mainHealthBar').style.width = "100%"; document.getElementById('mainHealthText').innerText = "100%";
                }, 3000);
            }
            sBullets.splice(i,1);
        }
    }

    if(localShooter.dead) {
        sCtx.fillStyle = "rgba(255, 0, 0, 0.3)"; sCtx.fillRect(0,0,800,500);
        sCtx.fillStyle = "#fff"; sCtx.font = "bold 30px Rajdhani"; sCtx.textAlign = "center";
        sCtx.fillText("SYSTEM FAILURE - REBOOTING...", 400, 250);
    }
    requestAnimationFrame(shooterLoop);
}

function drawShooter(x, y, color, name, hp) {
    sCtx.fillStyle = color; sCtx.shadowBlur = 15; sCtx.shadowColor = color;
    sCtx.beginPath(); sCtx.arc(x, y, 15, 0, Math.PI*2); sCtx.fill();
    sCtx.shadowBlur = 0; sCtx.fillStyle = "#fff"; sCtx.font = "12px Rajdhani"; sCtx.textAlign = "center"; sCtx.fillText(name, x, y-25);
    sCtx.fillStyle = "#ff3366"; sCtx.fillRect(x-15, y-20, 30, 4); sCtx.fillStyle = "#00ff00"; sCtx.fillRect(x-15, y-20, 30 * (hp/100), 4);
}

// --- SWEET CRUSH ---
const crushGems = ['gem-red', 'gem-orange', 'gem-yellow', 'gem-green', 'gem-blue', 'gem-purple']; 
let crushWidth = 8; let crushGrid = []; let crushScore = 0; let crushLevel = 1; let crushMoves = 30; let iceBlocks = []; let draggedCandy, replacedCandy; let crushInterval;

const crushLevelData = [
    { target: 300, moves: 15, ice: [] }, { target: 800, moves: 20, ice: [] }, { target: 1500, moves: 25, ice: [27,28,35,36, 18, 21, 42, 45] } 
];

function initCrush() { 
    const board = document.getElementById('crushBoard'); board.innerHTML = ''; crushGrid = []; crushScore = 0; document.getElementById('crushScore').innerText = crushScore; document.getElementById('crushLevelText').innerText = crushLevel; 
    let lvlData = crushLevelData[Math.min(crushLevel - 1, 2)]; crushMoves = lvlData.moves; document.getElementById('crushObjectiveDisplay').innerText = `Objective: Reach ${lvlData.target} pts!`; document.getElementById('crushMovesText').innerText = crushMoves; 
    
    iceBlocks = Array(64).fill(false); lvlData.ice.forEach(idx => iceBlocks[idx] = true);

    for (let i = 0; i < 64; i++) { 
        const candy = document.createElement('div'); candy.className = 'candy'; candy.setAttribute('draggable', true); candy.setAttribute('id', i); 
        let randomClass = crushGems[Math.floor(Math.random() * crushGems.length)]; candy.classList.add(randomClass); 
        if (iceBlocks[i]) candy.classList.add('ice'); 
        board.appendChild(candy); crushGrid.push(candy); 
    } 
    crushGrid.forEach(c => c.addEventListener('dragstart', dragStart)); crushGrid.forEach(c => c.addEventListener('dragover', dragOver)); crushGrid.forEach(c => c.addEventListener('dragenter', dragEnter)); crushGrid.forEach(c => c.addEventListener('dragleave', dragLeave)); crushGrid.forEach(c => c.addEventListener('drop', dragDrop)); crushGrid.forEach(c => c.addEventListener('dragend', dragEnd)); 
    let firstClick = null; crushGrid.forEach(c => c.addEventListener('click', function() { if(this.classList.contains('ice')) return; if(!firstClick) { firstClick = this; this.classList.add('selected'); } else { draggedCandy = firstClick; replacedCandy = this; firstClick.classList.remove('selected'); dragEnd(); firstClick = null; } })); 
    if(crushInterval) clearInterval(crushInterval); crushInterval = setInterval(function() { checkRowForThree(); checkColumnForThree(); moveDown(); checkCrushLevelStatus(lvlData.target); }, 150); 
}

function getGemClass(el) { return Array.from(el.classList).find(c => c.startsWith('gem-')); } 
function dragStart() { if (this.classList.contains('ice')) return; draggedCandy = this; } 
function dragOver(e) { e.preventDefault(); } function dragEnter(e) { e.preventDefault(); } function dragLeave() {} 
function dragDrop() { if (this.classList.contains('ice')) return; replacedCandy = this; }

function dragEnd() { 
    if(!replacedCandy || !draggedCandy || draggedCandy.classList.contains('ice') || replacedCandy.classList.contains('ice')) return; 
    let draggedId = parseInt(draggedCandy.id); let replacedId = parseInt(replacedCandy.id); let validMoves = [draggedId - 1, draggedId - crushWidth, draggedId + 1, draggedId + crushWidth]; 
    if (validMoves.includes(replacedId) && crushMoves > 0) { 
        let draggedClass = getGemClass(draggedCandy); let replacedClass = getGemClass(replacedCandy); 
        let draggedBomb = draggedCandy.classList.contains('power-bomb'); let replacedBomb = replacedCandy.classList.contains('power-bomb');
        
        draggedCandy.classList.remove(draggedClass); draggedCandy.classList.add(replacedClass); replacedCandy.classList.remove(replacedClass); replacedCandy.classList.add(draggedClass); 
        
        if(draggedBomb) { draggedCandy.classList.remove('power-bomb'); replacedCandy.classList.add('power-bomb'); }
        if(replacedBomb) { replacedCandy.classList.remove('power-bomb'); draggedCandy.classList.add('power-bomb'); }
        
        crushMoves--; document.getElementById('crushMovesText').innerText = crushMoves; 
    } 
    draggedCandy = null; replacedCandy = null; 
}

function triggerCrushAnim(indexes, createBombIndex = -1) { 
    let brokeIce = false; let fullClearList = new Set(indexes);

    indexes.forEach(idx => {
        if(crushGrid[idx].classList.contains('power-bomb') && idx !== createBombIndex) {
            let adj = [idx-9, idx-8, idx-7, idx-1, idx, idx+1, idx+7, idx+8, idx+9];
            adj.forEach(a => { if(a>=0 && a<64) fullClearList.add(a); });
        }
    });

    fullClearList.forEach(index => { 
        if(index === createBombIndex) { crushGrid[index].classList.add('power-bomb'); crushScore += 20; return; }
        crushGrid[index].classList.add('crush-anim'); crushGrid[index].classList.remove('power-bomb');
        
        let adj = [index-1, index+1, index-8, index+8];
        adj.forEach(a => {
            if(a>=0 && a<64 && iceBlocks[a] && Math.abs((a%8) - (index%8)) <= 1) {
                iceBlocks[a] = false; crushGrid[a].classList.remove('ice'); crushGrid[a].classList.add('crush-anim');
                setTimeout(() => crushGrid[a].classList.remove('crush-anim'), 300); crushScore += 50; brokeIce = true;
            }
        });
        setTimeout(() => { let cls = getGemClass(crushGrid[index]); if(cls) crushGrid[index].classList.remove(cls); crushGrid[index].classList.remove('crush-anim'); }, 300); 
    }); 
    if(brokeIce) document.getElementById('crushScore').innerText = crushScore;
}

function checkRowForThree() { 
    for (let i = 0; i < 64; i++) { 
        if(i%8 > 5) continue; 
        let rowOfThree = [i, i + 1, i + 2]; let decidedClass = getGemClass(crushGrid[i]); 
        
        if (decidedClass && !crushGrid[i].classList.contains('ice') && rowOfThree.every(idx => getGemClass(crushGrid[idx]) === decidedClass && !crushGrid[idx].classList.contains('crush-anim') && !crushGrid[idx].classList.contains('ice'))) { 
            let matchLength = 3; let matchIndexes = [...rowOfThree];
            if(i%8 <= 4 && getGemClass(crushGrid[i+3]) === decidedClass && !crushGrid[i+3].classList.contains('ice')) { matchLength = 4; matchIndexes.push(i+3); }
            if(i%8 <= 3 && matchLength === 4 && getGemClass(crushGrid[i+4]) === decidedClass && !crushGrid[i+4].classList.contains('ice')) { matchLength = 5; matchIndexes.push(i+4); }
            
            crushScore += matchLength * 10; document.getElementById('crushScore').innerText = crushScore; 
            triggerCrushAnim(matchIndexes, matchLength >= 4 ? i : -1); 
        } 
    } 
}

function checkColumnForThree() { 
    for (let i = 0; i < 48; i++) { 
        let columnOfThree = [i, i + 8, i + 16]; let decidedClass = getGemClass(crushGrid[i]); 
        if (decidedClass && !crushGrid[i].classList.contains('ice') && columnOfThree.every(idx => getGemClass(crushGrid[idx]) === decidedClass && !crushGrid[idx].classList.contains('crush-anim') && !crushGrid[idx].classList.contains('ice'))) { 
            let matchLength = 3; let matchIndexes = [...columnOfThree];
            if(i < 40 && getGemClass(crushGrid[i+24]) === decidedClass && !crushGrid[i+24].classList.contains('ice')) { matchLength = 4; matchIndexes.push(i+24); }
            if(i < 32 && matchLength === 4 && getGemClass(crushGrid[i+32]) === decidedClass && !crushGrid[i+32].classList.contains('ice')) { matchLength = 5; matchIndexes.push(i+32); }
            
            crushScore += matchLength * 10; document.getElementById('crushScore').innerText = crushScore; 
            triggerCrushAnim(matchIndexes, matchLength >= 4 ? i : -1); 
        } 
    } 
}

function checkCrushLevelStatus(target) { 
    if (crushScore >= target) { clearInterval(crushInterval); alert(currentLang === 'si' ? "නියමයි! ඊළඟ මට්ටම!" : "Level complete!"); crushLevel++; addGlobalPoints(10); initCrush(); } 
    if (crushMoves <= 0 && crushScore < target) { clearInterval(crushInterval); alert(currentLang === 'si' ? "කනගාටුයි! වාර ගණන අවසන්." : "Game Over! Out of moves."); crushLevel = 1; initCrush(); } 
}

function moveDown() { 
    for (let i = 0; i < 55; i++) { 
        if (!getGemClass(crushGrid[i + 8]) && !iceBlocks[i + 8]) { 
            let topClass = getGemClass(crushGrid[i]); let isBomb = crushGrid[i].classList.contains('power-bomb');
            if(topClass && !iceBlocks[i]) { 
                crushGrid[i + 8].classList.add(topClass); crushGrid[i].classList.remove(topClass); 
                if(isBomb) { crushGrid[i+8].classList.add('power-bomb'); crushGrid[i].classList.remove('power-bomb'); }
            } 
        } 
        if ([0, 1, 2, 3, 4, 5, 6, 7].includes(i) && !getGemClass(crushGrid[i]) && !iceBlocks[i]) { 
            crushGrid[i].classList.add(crushGems[Math.floor(Math.random() * crushGems.length)]); 
        } 
    } 
}

// --- SECURE TIC-TAC-TOE MULTIPLAYER ---
let board = ["", "", "", "", "", "", "", "", ""]; let tttActive = false; let tttPlayerTurn = true; 
function initTTT() { 
    board = ["", "", "", "", "", "", "", "", ""]; tttActive = true; 
    if (isMultiplayer) {
        if(isHost) { let hostStarts = Math.random() < 0.5; db.ref("rooms/" + currentRoomCode + "/tttTurn").set(hostStarts ? "Host" : "Guest"); db.ref("rooms/" + currentRoomCode + "/tttBoard").set(board); }
    } else { tttPlayerTurn = Math.random() < 0.5; document.getElementById('tttStatus').innerText = tttPlayerTurn ? lang[currentLang].tttYourTurn : lang[currentLang].tttBotTurn; if(!tttPlayerTurn) setTimeout(botTTT, 800); }
    renderTTT(); 
}
window.playTTT = function(index) { 
    if (!tttActive || !tttPlayerTurn || board[index] !== "") return; 
    board[index] = isMultiplayer ? (isHost ? "X" : "O") : "X"; renderTTT(); 
    if (isMultiplayer) { tttPlayerTurn = false; document.getElementById('tttStatus').innerText = currentLang==='si'?"ප්‍රතිවාදියාගේ වාරය...":"Waiting for Opponent..."; db.ref("rooms/" + currentRoomCode + "/tttBoard").set(board); db.ref("rooms/" + currentRoomCode + "/tttTurn").set(isHost ? "Guest" : "Host"); checkTTTWin();
    } else { checkTTTWin(); if(tttActive) { tttPlayerTurn = false; document.getElementById('tttStatus').innerText = lang[currentLang].tttBotTurn; setTimeout(botTTT, 800); } }
};
function syncTTTFromFirebase() {
    if(isMultiplayer && currentRoomCode) {
        db.ref("rooms/" + currentRoomCode + "/tttTurn").on("value", snap => { if(snap.exists() && tttActive) { let turn = snap.val(); tttPlayerTurn = (isHost && turn === "Host") || (!isHost && turn === "Guest"); let mySymbol = isHost ? "X" : "O"; document.getElementById('tttStatus').innerText = tttPlayerTurn ? (currentLang==='si'?`ඔබේ වාරය! (${mySymbol})`:`Your Turn! (${mySymbol})`) : (currentLang==='si'?"ප්‍රතිවාදියාගේ වාරය...":"Waiting for Opponent..."); } });
        db.ref("rooms/" + currentRoomCode + "/tttBoard").on("value", snap => { if(snap.exists()) { let newBoard = snap.val(); if (!newBoard || newBoard.length < 9) newBoard = ["", "", "", "", "", "", "", "", ""]; for(let i=0; i<9; i++) if(!newBoard[i]) newBoard[i] = ""; if(JSON.stringify(board) !== JSON.stringify(newBoard)) { board = newBoard; renderTTT(); checkTTTWin(); } } });
    }
}
function botTTT() { if(!tttActive) return; let emptySpots = board.map((val, idx) => val === "" ? idx : null).filter(val => val !== null); if (emptySpots.length === 0) return; let move = emptySpots[Math.floor(Math.random() * emptySpots.length)]; board[move] = "O"; renderTTT(); checkTTTWin(); if(tttActive) { tttPlayerTurn = true; document.getElementById('tttStatus').innerText = lang[currentLang].tttYourTurn; } }
function renderTTT() { const cells = document.querySelectorAll('.ttt-cell'); cells.forEach((cell, i) => { cell.innerText = board[i]; cell.className = "ttt-cell " + (board[i] === "X" ? "ttt-x" : (board[i] === "O" ? "ttt-o" : "")); }); }
function checkTTTWin() { const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; for (let w of wins) { if (board[w[0]] && board[w[0]] === board[w[1]] && board[w[1]] === board[w[2]]) { tttActive = false; tttPlayerTurn = false; document.getElementById('tttStatus').innerText = board[w[0]] === "X" ? lang[currentLang].tttWinX : lang[currentLang].tttWinO; if(!isMultiplayer && board[w[0]] === "X") addGlobalPoints(15); else if (isMultiplayer && board[w[0]] === (isHost ? "X" : "O")) addGlobalPoints(15); setTimeout(initTTT, 3000); return; } } if (!board.includes("")) { tttActive = false; tttPlayerTurn = false; document.getElementById('tttStatus').innerText = lang[currentLang].tttDraw; setTimeout(initTTT, 3000); } }

// --- OMI GAME ENGINE WITH MANUAL HOST SYNC & PUSH QUEUE ---
const suits = ['♠', '♥', '♣', '♦']; const values = ['7', '8', '9', '10', 'J', 'Q', 'K', 'A']; const cardPower = { '7':7, '8':8, '9':9, '10':10, 'J':11, 'Q':12, 'K':13, 'A':14 }; const turnOrder = ['p1', 'p4', 'p3', 'p2']; const botNames = { p1: "You", p2: "Bot 2", p3: "Bot 3", p4: "Bot 4" }; 
let fullDeck = [], hands = { p1: [], p2: [], p3: [], p4: [] }; let trumpSuit = '', currentTrick = [], ledSuit = ''; let roundDealerIndex = 0, currentTurnIndex = 0; let team1Tricks = 0, team2Tricks = 0, team1Kola = 0, team2Kola = 0, trumpCallerId = ''; let activeSeporu = 0; let omiSynced = false;

function syncOmiFromFirebase() {
    if(!isMultiplayer || !currentRoomCode || omiSynced) return; omiSynced = true;
    
    // ATOMIC ROUND RESET LISTENER
    db.ref("rooms/" + currentRoomCode + "/nextRound").on("value", snap => { 
        if(snap.exists() && !isHost && document.getElementById('celebration-overlay').style.display === 'flex') { 
            closeCelebrationForce(); 
        } 
    });

    db.ref("rooms/" + currentRoomCode + "/omiDealer").on("value", snap => { if(snap.exists()) { window.currentAbsDealer = snap.val(); roundDealerIndex = (window.currentAbsDealer - myIndex + 4) % 4; trumpCallerId = turnOrder[(roundDealerIndex + 1) % 4]; updateRolesInUI(); } });
    db.ref("rooms/" + currentRoomCode + "/omiDeck").on("value", snap => { if(snap.exists() && !isHost) { fullDeck = snap.val(); document.getElementById('gameStatus').innerText = lang[currentLang].statusShuffle; let deckVis = document.getElementById('deck-visual'); deckVis.style.display = 'block'; deckVis.classList.add('shuffling'); setTimeout(() => { deckVis.classList.remove('shuffling'); let cutterId = turnOrder[(roundDealerIndex + 3) % 4]; updateActiveTurnUI(cutterId); if (cutterId === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].myCutPrompt; document.getElementById('cut-selector').style.display = 'flex'; document.getElementById('cut-selector').style.justifyContent = 'center'; document.getElementById('cut-selector').style.gap = '10px'; } else { document.getElementById('gameStatus').innerText = isMultiplayer ? `Waiting for ${botNames[cutterId]}...` : botNames[cutterId] + lang[currentLang].statusCut; } }, 1500); } });
    db.ref("rooms/" + currentRoomCode + "/omiDeck2").on("value", snap => { if(snap.exists() && turnOrder[(roundDealerIndex + 3) % 4] !== 'p1') { fullDeck = snap.val(); executeCutLocal(); } });
    db.ref("rooms/" + currentRoomCode + "/omiTrump").on("value", snap => { if(snap.exists() && turnOrder[(roundDealerIndex + 1) % 4] !== 'p1') setTrumpLocal(snap.val()); });
    
    db.ref("rooms/" + currentRoomCode + "/omiMoves").on("child_added", snap => { 
        if(snap.exists()) { 
            let move = snap.val(); 
            if(move.firebaseIdx !== myIndex) { 
                let localId = turnOrder[(4 + move.firebaseIdx - myIndex) % 4]; 
                let h = hands[localId]; if (!h) return; 
                let cIdx = h.findIndex(c => c.suit === move.card.suit && c.value === move.card.value); 
                if(cIdx > -1) { 
                    let playedCard = h.splice(cIdx, 1)[0]; 
                    executePlacement(localId, playedCard); 
                    currentTurnIndex = (currentTurnIndex + 1) % 4; 
                    playNextTurn(); 
                } 
            } 
        } 
    });
}

function updateActiveTurnUI(activeId) { ['p1', 'p2', 'p3', 'p4'].forEach(p => document.getElementById(`seat-${p}`).classList.remove('active-turn')); if(activeId) document.getElementById(`seat-${activeId}`).classList.add('active-turn'); }

function triggerCelebration(type, winningTeam, tokensEarned = 0) { 
    updateActiveTurnUI(null); const overlay = document.getElementById('celebration-overlay'); const title = document.getElementById('celebration-title'); const subtitle = document.getElementById('celebration-subtitle'); const gif = document.getElementById('celebration-gif'); const btn = document.getElementById('celeb-btn'); let teamNameStr = winningTeam === 1 ? lang[currentLang].lblPart : lang[currentLang].lblT2; overlay.style.display = 'flex'; 
    
    let isLocalWin = (winningTeam === 1);
    
    if (type !== 'seporu' && type !== 'double_seporu') {
        if (isLocalWin) generateFireworks(); 
        else document.getElementById('fireworks-container').innerHTML = ''; 
    } else {
        document.getElementById('fireworks-container').innerHTML = ''; 
    }

    const winGifs = ["https://media0.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif", "https://media3.giphy.com/media/artj92V8o75VPL7AeQ/giphy.gif"];
    const loseGifs = ["https://media2.giphy.com/media/10tIjpzIu8fe0/giphy.gif", "https://media1.giphy.com/media/xT5LMz1W4oFAycE5vq/giphy.gif"];
    
    let l = lang[currentLang];

    if (type === 'round') { 
        title.innerText = isLocalWin ? l.winMsg : l.loseMsg;
        title.style.color = isLocalWin ? "#ffd700" : "#ff3366";
        subtitle.innerText = isLocalWin ? l.winSub.replace("[X]", tokensEarned) : l.loseSub.replace("[X]", tokensEarned); 
        btn.innerText = l.btnCont; 
        gif.src = isLocalWin ? winGifs[Math.floor(Math.random() * winGifs.length)] : loseGifs[Math.floor(Math.random() * loseGifs.length)]; 
    } 
    else if (type === 'game') { 
        title.innerText = isLocalWin ? (currentLang === 'si' ? "විශිෂ්ට ජයග්‍රහණයක්!" : "VICTORY!") : (currentLang === 'si' ? "පරාජයක්!" : "DEFEAT!");
        title.style.color = isLocalWin ? "#ffd700" : "#ff3366";
        subtitle.innerText = l.celebWinGame + teamNameStr + "!"; 
        btn.innerText = l.btnAgain; 
        gif.src = isLocalWin ? "https://media2.giphy.com/media/cnuNz0fTBIUGnx4F9T/giphy.gif" : "https://media2.giphy.com/media/l41Ywx8mJg0B8A1A4/giphy.gif"; 
    } 
    else if (type === 'seporu') { 
        title.innerText = l.celebSeporu; title.style.color = "#33b5e5";
        subtitle.innerText = l.celebSeporuSub; btn.innerText = l.btnCont; 
        gif.src = "https://media3.giphy.com/media/l36kU80xPf0ojG0Erg/giphy.gif"; 
    } 
    else if (type === 'double_seporu') { 
        title.innerText = l.celebDblSeporu; title.style.color = "#ff8800";
        subtitle.innerText = l.celebDblSeporuSub; btn.innerText = l.btnCont; 
        gif.src = "https://media1.giphy.com/media/xT5LMz1W4oFAycE5vq/giphy.gif"; 
    } 

    if(isMultiplayer && !isGameOver) {
        document.getElementById('celeb-btn').style.display = 'none'; 
        if(isHost) {
            document.getElementById('btnHostNextRound').style.display = 'block';
        } else {
            subtitle.innerHTML += "<br><br><span style='color:#33b5e5; font-size:0.9rem;'>" + (currentLang==='si'?"Host ඊළඟ වටය ආරම්භ කරන තෙක් රැඳී සිටින්න...":"Waiting for Host to start next round...") + "</span>";
        }
    } else {
        document.getElementById('celeb-btn').style.display = 'block';
        document.getElementById('btnHostNextRound').style.display = 'none';
    }
}

window.hostTriggerNextRound = function() {
    if(!isHost || !isMultiplayer) return;
    db.ref("rooms/" + currentRoomCode + "/nextRound").set(Date.now());
    closeCelebrationForce();
}

window.closeCelebration = function() { 
    if(isMultiplayer && !isGameOver) return; 
    closeCelebrationForce(); 
};

function closeCelebrationForce() {
    document.getElementById('celebration-overlay').style.display = 'none'; 
    document.getElementById('btnHostNextRound').style.display = 'none';
    if (isGameOver) { team1Kola = 0; team2Kola = 0; activeSeporu = 0; isGameOver = false; window.currentAbsDealer = undefined; window.soloDealerIndex = undefined; startLifecycle(); } 
    else { if (isMultiplayer) { if (isHost) { window.currentAbsDealer = (window.currentAbsDealer + 1) % 4; db.ref("rooms/" + currentRoomCode + "/omiDealer").set(window.currentAbsDealer); } } else { window.soloDealerIndex = (window.soloDealerIndex + 1) % 4; } startLifecycle(); } 
}

function updateRolesInUI() { ['p1', 'p2', 'p3', 'p4'].forEach(p => document.getElementById(`role-${p}`).innerText = ""); document.getElementById(`role-${turnOrder[roundDealerIndex]}`).innerText = lang[currentLang].roleDealer; }

function startLifecycle() {
    team1Tricks = 0; team2Tricks = 0; hands = { p1: [], p2: [], p3: [], p4: [] }; document.getElementById('t1-pile').innerHTML = ''; document.getElementById('t2-pile').innerHTML = ''; document.getElementById('trump-display-board').style.display = 'none'; updateScoresUI(); document.getElementById('my-hand').innerHTML = ''; updateActiveTurnUI(null);
    if (!isMultiplayer) {
        if(window.soloDealerIndex === undefined) window.soloDealerIndex = Math.floor(Math.random() * 4); roundDealerIndex = window.soloDealerIndex;
        let cutterId = turnOrder[(roundDealerIndex + 3) % 4]; trumpCallerId = turnOrder[(roundDealerIndex + 1) % 4]; updateRolesInUI(); document.getElementById('gameStatus').innerText = lang[currentLang].statusShuffle; let deckVis = document.getElementById('deck-visual'); deckVis.style.display = 'block'; deckVis.classList.add('shuffling'); fullDeck = []; suits.forEach(s => values.forEach(v => fullDeck.push({suit: s, value: v, color: (s==='♥'||s==='♦')?'red':'black'})));
        setTimeout(() => { deckVis.classList.remove('shuffling'); updateActiveTurnUI(cutterId); if (cutterId === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].myCutPrompt; document.getElementById('cut-selector').style.display = 'flex'; document.getElementById('cut-selector').style.justifyContent = 'center'; document.getElementById('cut-selector').style.gap = '10px'; } else { document.getElementById('gameStatus').innerText = botNames[cutterId] + lang[currentLang].statusCut; setTimeout(() => executeCut(Math.random() > 0.5), 1500); } }, 1500);
    } else {
        if (isHost) {
            db.ref("rooms/" + currentRoomCode + "/omiDeck2").remove(); db.ref("rooms/" + currentRoomCode + "/omiTrump").remove(); 
            db.ref("rooms/" + currentRoomCode + "/omiMoves").remove(); 
            fullDeck = []; suits.forEach(s => values.forEach(v => fullDeck.push({suit: s, value: v, color: (s==='♥'||s==='♦')?'red':'black'}))); fullDeck.sort(() => Math.random() - 0.5); 
            let absDealer = window.currentAbsDealer !== undefined ? window.currentAbsDealer : Math.floor(Math.random() * 4);
            db.ref("rooms/" + currentRoomCode + "/omiDealer").set(absDealer); db.ref("rooms/" + currentRoomCode + "/omiDeck").set(fullDeck);
            let cutterId = turnOrder[((absDealer - myIndex + 4) % 4 + 3) % 4];
            let deckVis = document.getElementById('deck-visual'); deckVis.style.display = 'block'; deckVis.classList.add('shuffling');
            setTimeout(() => { deckVis.classList.remove('shuffling'); updateActiveTurnUI(cutterId); if (cutterId === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].myCutPrompt; document.getElementById('cut-selector').style.display = 'flex'; } else { document.getElementById('gameStatus').innerText = `Waiting for ${botNames[cutterId]}...`; } }, 1500);
        }
    }
}
window.executeCut = function(didCut) { document.getElementById('cut-selector').style.display = 'none'; if(didCut) fullDeck.sort(() => Math.random() - 0.5); if(isMultiplayer) db.ref("rooms/" + currentRoomCode + "/omiDeck2").set(fullDeck); executeCutLocal(); };
function executeCutLocal() {
    document.getElementById('gameStatus').innerText = lang[currentLang].statusDeal; updateActiveTurnUI(null);
    let h0 = fullDeck.splice(0, 4); let h1 = fullDeck.splice(0, 4); let h2 = fullDeck.splice(0, 4); let h3 = fullDeck.splice(0, 4);
    if(isMultiplayer) { let dm = [h0, h1, h2, h3]; hands.p1 = hands.p1.concat(dm[myIndex]); hands.p4 = hands.p4.concat(dm[(myIndex+1)%4]); hands.p3 = hands.p3.concat(dm[(myIndex+2)%4]); hands.p2 = hands.p2.concat(dm[(myIndex+3)%4]); } else { hands.p1 = hands.p1.concat(h0); hands.p2 = hands.p2.concat(h1); hands.p3 = hands.p3.concat(h2); hands.p4 = hands.p4.concat(h3); }
    renderHand(false); setTimeout(() => { updateActiveTurnUI(trumpCallerId); if (trumpCallerId === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].statusTrump; document.getElementById('trump-selector').style.display = 'block'; } else { document.getElementById('gameStatus').innerText = isMultiplayer ? `Waiting for ${botNames[trumpCallerId]}...` : botNames[trumpCallerId] + lang[currentLang].botTrumpPrompt; if(!isMultiplayer) { setTimeout(() => { let sCounts = {'♠':0, '♥':0, '♣':0, '♦':0}; hands[trumpCallerId].forEach(c => sCounts[c.suit]++); let best = '♠', max = -1; for (let s in sCounts) if (sCounts[s] > max) { max = sCounts[s]; best = s; } setTrump(best); }, 1500); } } }, 1000);
}
window.setTrump = function(suit) { if(isMultiplayer) db.ref("rooms/" + currentRoomCode + "/omiTrump").set(suit); setTrumpLocal(suit); };
function setTrumpLocal(suit) {
    trumpSuit = suit; document.getElementById('trump-selector').style.display = 'none'; document.getElementById('gameStatus').innerText = lang[currentLang].statusDeal2; document.getElementById('deck-visual').style.display = 'none'; updateActiveTurnUI(null); const trumpIcon = document.getElementById('current-trump-icon'); trumpIcon.innerText = suit; trumpIcon.className = 'suit-badge ' + ((suit === '♥' || suit === '♦') ? 'red' : 'black'); document.getElementById('trump-display-board').style.display = 'flex';
    let h0 = fullDeck.splice(0, 4); let h1 = fullDeck.splice(0, 4); let h2 = fullDeck.splice(0, 4); let h3 = fullDeck.splice(0, 4);
    if(isMultiplayer) { let dm = [h0, h1, h2, h3]; hands.p1 = hands.p1.concat(dm[myIndex]); hands.p4 = hands.p4.concat(dm[(myIndex+1)%4]); hands.p3 = hands.p3.concat(dm[(myIndex+2)%4]); hands.p2 = hands.p2.concat(dm[(myIndex+3)%4]); } else { hands.p1 = hands.p1.concat(h0); hands.p2 = hands.p2.concat(h1); hands.p3 = hands.p3.concat(h2); hands.p4 = hands.p4.concat(h3); }
    setTimeout(() => { currentTurnIndex = turnOrder.indexOf(trumpCallerId); startTrickSequence(); }, 1000);
}
function getValidCards(hand) { if (!ledSuit) return hand; let matchingCards = hand.filter(c => c.suit === ledSuit); if (matchingCards.length > 0) return matchingCards; return hand; }
function renderHand(isMyTurn) { const handDiv = document.getElementById('my-hand'); handDiv.innerHTML = ''; let validCards = isMyTurn ? getValidCards(hands['p1']) : []; hands['p1'].forEach((card, idx) => { let disabledClass = validCards.includes(card) ? "" : "disabled"; handDiv.innerHTML += `<div class="playing-card ${card.color} ${disabledClass}" onclick="humanPlay(${idx})"><div class="card-top">${card.value}<br>${card.suit}</div><div class="card-center">${card.suit}</div><div class="card-bottom">${card.value}<br>${card.suit}</div></div>`; }); }
function startTrickSequence() { currentTrick = []; ledSuit = ''; playNextTurn(); }
function playNextTurn() { 
    if (currentTrick.length === 4) { evaluateTrickWinner(); return; } 
    let activePlayer = turnOrder[currentTurnIndex]; updateActiveTurnUI(activePlayer); 
    if (activePlayer === 'p1') { document.getElementById('gameStatus').innerText = lang[currentLang].statusPlay; renderHand(true); } 
    else { document.getElementById('gameStatus').innerText = isMultiplayer ? (currentLang==='si' ? `${botNames[activePlayer]} ගේ වාරය...` : `Waiting for ${botNames[activePlayer]}...`) : botNames[activePlayer] + (currentLang==='si'?" සිතමින් සිටී...":" is calculating..."); renderHand(false); if(!isMultiplayer) setTimeout(() => runBotAI(activePlayer), 1200); } 
}
window.humanPlay = function(idx) { 
    if (turnOrder[currentTurnIndex] !== 'p1') return; if (!getValidCards(hands['p1']).includes(hands['p1'][idx])) return; 
    let playedCard = hands['p1'].splice(idx, 1)[0]; executePlacement('p1', playedCard); 
    
    if(isMultiplayer) db.ref("rooms/" + currentRoomCode + "/omiMoves").push({ firebaseIdx: myIndex, card: playedCard, timestamp: Date.now() });
    currentTurnIndex = (currentTurnIndex + 1) % 4; playNextTurn(); 
};
function runBotAI(botId) {
    let h = hands[botId]; let validCards = getValidCards(h); validCards.sort((a, b) => cardPower[a.value] - cardPower[b.value]); let chosenCard = validCards[0]; 
    if (!ledSuit) { let nonTrumps = validCards.filter(c => c.suit !== trumpSuit); chosenCard = nonTrumps.length > 0 ? nonTrumps[nonTrumps.length - 1] : validCards[validCards.length - 1]; } 
    else { let winningPlay = currentTrick[0]; for (let i = 1; i < currentTrick.length; i++) { let current = currentTrick[i], best = winningPlay; if (current.card.suit === trumpSuit && best.card.suit !== trumpSuit) winningPlay = current; else if (current.card.suit === best.card.suit && cardPower[current.card.value] > cardPower[best.card.value]) winningPlay = current; } let partnerId = (botId === 'p2') ? 'p4' : (botId === 'p4' ? 'p2' : (botId === 'p3' ? 'p1' : 'p3')); if (!(winningPlay.player === partnerId)) { if (validCards[0].suit === ledSuit) { if (winningPlay.card.suit === ledSuit) { let potentialWinners = validCards.filter(c => cardPower[c.value] > cardPower[winningPlay.card.value]); if (potentialWinners.length > 0) chosenCard = potentialWinners[potentialWinners.length - 1]; } } else { let trumps = validCards.filter(c => c.suit === trumpSuit); if (trumps.length > 0) { if (winningPlay.card.suit === trumpSuit) { let higherTrumps = trumps.filter(c => cardPower[c.value] > cardPower[winningPlay.card.value]); if (higherTrumps.length > 0) chosenCard = higherTrumps[0]; } else { chosenCard = trumps[0]; } } } } }
    executePlacement(botId, h.splice(h.indexOf(chosenCard), 1)[0]); currentTurnIndex = (currentTurnIndex + 1) % 4; playNextTurn();
}
function executePlacement(playerId, card) { if (!ledSuit) ledSuit = card.suit; currentTrick.push({ player: playerId, card: card }); document.getElementById(`slot-${playerId}`).innerHTML = `<div class="playing-card enter-${playerId} ${card.color}"><div class="card-top">${card.value}<br>${card.suit}</div><div class="card-center">${card.suit}</div><div class="card-bottom">${card.value}<br>${card.suit}</div></div>`; }
function evaluateTrickWinner() {
    updateActiveTurnUI(null); let winningPlay = currentTrick[0]; for (let i = 1; i < currentTrick.length; i++) { let current = currentTrick[i], best = winningPlay; if (current.card.suit === trumpSuit && best.card.suit !== trumpSuit) winningPlay = current; else if (current.card.suit === best.card.suit && cardPower[current.card.value] > cardPower[best.card.value]) winningPlay = current; }
    let winnerId = winningPlay.player; let winningTeam = (winnerId === 'p1' || winnerId === 'p3') ? 1 : 2; if (winningTeam === 1) team1Tricks++; else team2Tricks++; document.getElementById('gameStatus').innerText = winningTeam === 1 ? lang[currentLang].t1Win : lang[currentLang].t2Win; updateScoresUI(); currentTurnIndex = turnOrder.indexOf(winnerId); 
    setTimeout(() => { let flyClass = winningTeam === 1 ? 'fly-to-t1' : 'fly-to-t2'; ['p1', 'p2', 'p3', 'p4'].forEach(id => { let elem = document.getElementById(`slot-${id}`).firstElementChild; if (elem) elem.classList.add(flyClass); }); setTimeout(() => { ['p1', 'p2', 'p3', 'p4'].forEach(id => document.getElementById(`slot-${id}`).innerHTML = ''); document.getElementById(winningTeam === 1 ? 't1-pile' : 't2-pile').innerHTML += '<div class="mini-card-back"></div>'; if (hands['p1'].length > 0) startTrickSequence(); else evaluateMatchPoints(); }, 600); }, 1500);
}
function evaluateMatchPoints() {
    let roundWinner = 0; let earnedTokens = 0; let isSeporu = false; let isDoubleSeporu = false;
    let callerRelativeId = trumpCallerId; 
    let callerTeam = (callerRelativeId === 'p1' || callerRelativeId === 'p3') ? 1 : 2;

    if (team1Tricks === 4 && team2Tricks === 4) { 
        if (activeSeporu === 1) { activeSeporu = 0; isDoubleSeporu = true; } else { activeSeporu = 1; isSeporu = true; } 
    } 
    else { 
        if (team1Tricks === 8) { earnedTokens = (callerTeam === 1) ? 2 : 3; roundWinner = 1; } 
        else if (team2Tricks === 8) { earnedTokens = (callerTeam === 2) ? 2 : 3; roundWinner = 2; } 
        else if (team1Tricks > 4) { earnedTokens = (callerTeam === 1) ? 1 : 2; roundWinner = 1; } 
        else if (team2Tricks > 4) { earnedTokens = (callerTeam === 2) ? 1 : 2; roundWinner = 2; } 
        
        if (activeSeporu === 1) { earnedTokens += 1; activeSeporu = 0; } 
        if (roundWinner === 1) team1Kola += earnedTokens; 
        if (roundWinner === 2) team2Kola += earnedTokens; 
    }
    
    updateScoresUI();
    if (team1Kola >= 10 || team2Kola >= 10) { isGameOver = true; if (team1Kola >= 10) addGlobalPoints(50); triggerCelebration('game', team1Kola >= 10 ? 1 : 2); } else if (isDoubleSeporu) { triggerCelebration('double_seporu', 0); } else if (isSeporu) { triggerCelebration('seporu', 0); } else { triggerCelebration('round', roundWinner, earnedTokens); }
}
function updateScoresUI() { document.getElementById('t1-tricks').innerText = team1Tricks; document.getElementById('t2-tricks').innerText = team2Tricks; document.getElementById('t1-kola').innerText = team1Kola; document.getElementById('t2-kola').innerText = team2Kola; document.getElementById('t1-left').innerText = Math.max(0, 10 - team1Kola); document.getElementById('t2-left').innerText = Math.max(0, 10 - team2Kola); }

initApp();
