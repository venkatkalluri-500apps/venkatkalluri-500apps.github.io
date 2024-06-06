let kongWidgetBotUUID;
let kongWidgetUserUUID;
let kongWidgetLogoURL;
let kongWidgetHeaderTitle;
let kongWidgetHeaderDescription;
let kongWidgetInputImageURL;
let kongWidgetMessageImageURL;
let kongWidgetTargetDivID;
let kongWidgetExcludedPaths = [];
let kongWidgetBotprefs = {};

async function kongWidgetInitialize() {
    // Adding reset CSS
    const resetCSS = document.createElement('link');
    resetCSS.rel = 'stylesheet';
    resetCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css';
    document.head.appendChild(resetCSS);

    const scriptElement = document.getElementById('data-script');
    if (scriptElement) {
        const base64Data = scriptElement.getAttribute('data-prefs');
        const data = JSON.parse(atob(base64Data));

        kongWidgetBotUUID = data.uuid;
        kongWidgetUserUUID = data.userId;
        kongWidgetLogoURL = data.logoURL || 'https://v1.kong.ai/static/images/kong.png';
        kongWidgetHeaderTitle = data.headerTitle || 'Chat Header';
        kongWidgetHeaderDescription = data.headerDescription || 'This is the description of the chat.';
        kongWidgetInputImageURL = data.inputImageURL || '';
        kongWidgetMessageImageURL = data.messageImageURL || '';
        kongWidgetTargetDivID = data.targetDivID || null;
        kongWidgetExcludedPaths = data.excludedPaths || [];
        kongWidgetBotprefs = {};

        // Check the initial route and initialize the widget accordingly
        checkRouteAndInitialize();

        // Listen for route changes to re-check the paths
        window.addEventListener('popstate', checkRouteAndInitialize);
        window.addEventListener('hashchange', checkRouteAndInitialize);
    }
}

function checkRouteAndInitialize() {
    if (kongWidgetExcludedPaths.includes(window.location.origin + window.location.pathname)) {
        return; // Exit if the current path is in the excluded paths
    }
    initializeWidget();
}

async function initializeWidget() {
    let chatContainer;
    let iconContainer;
    if (kongWidgetTargetDivID && document.getElementById(kongWidgetTargetDivID)) {
        chatContainer = document.getElementById(kongWidgetTargetDivID);
        iconContainer = chatContainer;
    } else {
        chatContainer = document.createElement("div");
        chatContainer.id = "kong-widget-chat-section";
        document.body.appendChild(chatContainer);
        chatContainer.style.position = 'fixed';
        chatContainer.style.bottom = '72px';
        chatContainer.style.right = '20px';
        chatContainer.style.transition = 'max-height 0.3s ease-in-out';
        chatContainer.style.maxHeight = '0';
        chatContainer.style.overflow = 'hidden';
        iconContainer = document.body;
    }

    const kongWidgetIcon = document.createElement('img');
    kongWidgetIcon.id = 'kong-widget-icon';
    kongWidgetIcon.src = 'https://v1.kong.ai/static/images/kong.png';
    kongWidgetIcon.style.width = '60px';
    kongWidgetIcon.style.height = '60px';
    kongWidgetIcon.style.cursor = 'pointer';
    kongWidgetIcon.style.margin = '20px';
    kongWidgetIcon.style.boxShadow = 'rgba(51, 51, 51, 0.25) 0px 0px 12px 0px';
    kongWidgetIcon.style.transition = 'all .3s';
    kongWidgetIcon.style.borderRadius = '100%';

    if (iconContainer === document.body) {
        kongWidgetIcon.style.position = 'fixed';
        kongWidgetIcon.style.bottom = '0';
        kongWidgetIcon.style.right = '20px';
    } else {
        kongWidgetIcon.style.position = 'relative';
        kongWidgetIcon.style.display = 'block';
        kongWidgetIcon.style.marginTop = '10px';
    }

    iconContainer.appendChild(kongWidgetIcon);

    kongWidgetIcon.addEventListener('click', () => {
        const chatWindow = document.getElementById('kong-widget-chat-window');
        if (chatWindow) {
            chatWindow.classList.toggle('kong-widget-hidden');
            if (chatWindow.classList.contains('kong-widget-hidden')) {
                chatContainer.style.maxHeight = '0';
            } else {
                chatContainer.style.maxHeight = '80vh';
            }
        } else {
            kongWidgetInitializeChat(kongWidgetBotUUID, chatContainer);
            chatContainer.style.maxHeight = '80vh';
        }
    });
    kongWidgetBotprefs = await kongWidgetGetBotPreferences(kongWidgetBotUUID);

    kongWidgetAddStyles();
}

async function kongWidgetInitializeChat(botUUID, chatContainer) {
    chatContainer.classList.remove('kong-widget-hidden');

    const chatWindow = document.createElement('div');
    chatWindow.id = 'kong-widget-chat-window';
    chatWindow.className = 'kong-widget-chat-window';

    const headerSection = document.createElement('div');
    headerSection.className = 'kong-widget-header-section';
    const logo = document.createElement('img');
    logo.src = kongWidgetLogoURL;
    logo.alt = 'Logo';
    logo.className = 'kong-widget-logo';
    const headerText = document.createElement('div');
    const headerTitleElem = document.createElement('h1');
    headerTitleElem.textContent = kongWidgetHeaderTitle;
    headerTitleElem.className = 'kong-widget-header-title';
    const headerDescriptionElem = document.createElement('p');
    headerDescriptionElem.textContent = kongWidgetHeaderDescription;
    headerDescriptionElem.className = 'kong-widget-header-description';
    headerText.appendChild(headerTitleElem);
    headerText.appendChild(headerDescriptionElem);
    headerSection.appendChild(logo);
    headerSection.appendChild(headerText);

    const chatMessagesDiv = document.createElement('div');
    chatMessagesDiv.id = 'kong-widget-chat-messages';
    chatMessagesDiv.className = 'kong-widget-chat-messages';

    const chatInputDiv = document.createElement('div');
    chatInputDiv.className = 'kong-widget-chat-input';

    const poweredByDiv = document.createElement('div');
    poweredByDiv.className = 'kong-widget-powered-by';
    poweredByDiv.innerHTML = '<span>Powered by <a style="cursor-pointer;font-weight:600;" href="v1.kong.ai" target="_blank">Kong.ai</a></span>';

    const inputBox = document.createElement('input');
    inputBox.type = 'text';
    inputBox.id = 'kong-widget-input-box';
    inputBox.placeholder = 'Type a message...';
    inputBox.className = 'kong-widget-input-box';

    const kongWidgetSendButton = document.createElement('button');
    kongWidgetSendButton.id = 'kong-widget-send-button';
    kongWidgetSendButton.className = 'kong-widget-button';
    kongWidgetSendButton.disabled = true; // Disable the button initially

    // Create a div to hold the SVG code
    const sendIconSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
    lucide-send-horizontal">
    <path d="m3 3 3 9-3 9 19-9Z"/>
    <path d="M6 12h16"/>
    </svg>`;

    // Insert the SVG code into the button
    kongWidgetSendButton.innerHTML = sendIconSVG;

    chatInputDiv.appendChild(inputBox);
    chatInputDiv.appendChild(kongWidgetSendButton);

    chatWindow.appendChild(headerSection);
    chatWindow.appendChild(chatMessagesDiv);
    chatWindow.appendChild(chatInputDiv);
    chatWindow.appendChild(poweredByDiv);
    chatContainer.appendChild(chatWindow);

    const botPrefs = kongWidgetBotprefs && Object.keys(kongWidgetBotprefs).length > 0 ? kongWidgetBotprefs : await kongWidgetGetBotPreferences(botUUID);
    const chatMessages = kongWidgetGetChatMessages(botUUID);

    if (chatMessages.length === 0) {
        const firstMessage = {
            from: 'system',
            message: botPrefs.firstChatMessage || 'Hi, how can I help you today?'
        };
        chatMessages.push(firstMessage);
        kongWidgetSaveChatMessages(botUUID, chatMessages);
    }

    kongWidgetRenderChatMessages(chatMessages);

    kongWidgetSendButton.addEventListener('click', () => {
        kongWidgetSendMessage();
    });

    chatContainer.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            kongWidgetSendMessage();
        }
    });

    // Enable the send button when the cursor enters the input text box
    inputBox.addEventListener('focus', () => {
        kongWidgetSendButton.disabled = inputBox.value.trim() === '';
    });

    // Dynamically enable/disable the send button based on input content
    inputBox.addEventListener('input', () => {
        kongWidgetSendButton.disabled = inputBox.value.trim() === '';
    });
}

async function kongWidgetGetBotPreferences(botUUID) {
  // const userData = JSON.parse(localStorage.getItem('UserData')) || {};
  // const bots = userData.bots || [];
  // return bots.find(bot => bot.uuid === botUUID) || {};

  const url = `http://127.0.0.1:8000/bot/${kongWidgetUserUUID}/${botUUID}`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
}

function kongWidgetGetChatMessages(botUUID) {
    const webChatData = JSON.parse(localStorage.getItem('webchat')) || {};
    return webChatData[botUUID] || [];
}

function kongWidgetSaveChatMessages(botUUID, messages) {
    const webChatData = JSON.parse(localStorage.getItem('webchat')) || {};
    webChatData[botUUID] = messages;
    localStorage.setItem('webchat', JSON.stringify(webChatData));
}

function kongWidgetRenderChatMessages(messages) {
    const chatMessagesDiv = document.getElementById('kong-widget-chat-messages');
    chatMessagesDiv.innerHTML = '';

    messages.forEach(message => {
        const messageWrapper = document.createElement('div');
        messageWrapper.className = 'kong-widget-message-wrapper';
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('kong-widget-message', 'kong-font');
        if (message.from === 'user') {
            messageWrapper.classList.add('kong-widget-user-message', 'kong-font');
            messageDiv.classList.add('kong-widget-user-message-bg', 'kong-font');
        } else {
            messageWrapper.classList.add('kong-widget-assistant-message', 'kong-font');
            messageDiv.classList.add('kong-widget-assistant-message-bg', 'kong-font');
        }

        if (message.loading) {
            messageDiv.innerHTML = message.message; // Insert loading dots
        } else {
            messageDiv.textContent = message.message;
        }

        if (message.from === 'user' && kongWidgetInputImageURL) {
            const messageImage = document.createElement('img');
            messageImage.src = kongWidgetInputImageURL;
            messageImage.alt = 'User Image';
            messageImage.className = 'kong-widget-message-image';
            messageWrapper.appendChild(messageDiv);
            messageWrapper.appendChild(messageImage);
        } else if (message.from === 'assistant' && kongWidgetMessageImageURL) {
            const messageImage = document.createElement('img');
            messageImage.src = kongWidgetMessageImageURL;
            messageImage.alt = 'Assistant Image';
            messageImage.className = 'kong-widget-message-image';
            messageWrapper.appendChild(messageImage);
            messageWrapper.appendChild(messageDiv);
        } else {
            messageWrapper.appendChild(messageDiv);
        }

        chatMessagesDiv.appendChild(messageWrapper);
    });

    chatMessagesDiv.scrollTop = chatMessagesDiv.scrollHeight;
}

async function kongWidgetSendMessage() {
    const inputBox = document.getElementById('kong-widget-input-box');
    const messageText = inputBox.value.trim();
    if (!messageText) return;

    const chatMessages = kongWidgetGetChatMessages(kongWidgetBotUUID);
    chatMessages.push({ from: 'user', message: messageText });

    kongWidgetSaveChatMessages(kongWidgetBotUUID, chatMessages);
    kongWidgetRenderChatMessages(chatMessages);

    // const sendSound = new Audio('https://dl.prokerala.com/downloads/ringtones/files/mp3/samsung-galaxy-s21-ultra-sms-ringtone-samsung-galaxy-s21-ultra-notificatio-58692.mp3');
    // sendSound.play();

    inputBox.value = '';
    inputBox.focus();

    // Add loading dots
    const loadingDots = { from: 'assistant', message: '<div class="kong-widget-loading-dots"><div></div><div></div><div></div></div>', loading: true };
    chatMessages.push(loadingDots);
    kongWidgetRenderChatMessages(chatMessages);

    const recentMessages = chatMessages.slice(-20).map(msg => ({ type: msg.from, message: msg.message }));
    const botPrefs = kongWidgetBotprefs && Object.keys(kongWidgetBotprefs).length > 0 ? kongWidgetBotprefs : await kongWidgetGetBotPreferences(kongWidgetBotUUID);

    try {
        const response = await fetch('https://v1.kong.ai/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: botPrefs.prompt,
                messages: recentMessages,
                botUUID: kongWidgetBotUUID,
                model: botPrefs.model,
                trainingFiles: botPrefs.trainingFiles,
                trainingSites: botPrefs.trainingSites
            })
        });

        if (response.ok) {
            const result = await response.json();
            const botReply = { from: 'assistant', message: result.message };
            chatMessages.pop(); // Remove loading dots
            chatMessages.push(botReply);
            // const receiveSound = new Audio('https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/never-50672.mp3');
            // receiveSound.play();

        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        const errorMessage = { from: 'assistant', message: 'Something went wrong. Please try again.' };
        chatMessages.pop(); // Remove loading dots
        chatMessages.push(errorMessage);
        // const receiveSound = new Audio('https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/never-50672.mp3');
        // receiveSound.play();
    }

    kongWidgetSaveChatMessages(kongWidgetBotUUID, chatMessages);
    kongWidgetRenderChatMessages(chatMessages);
}

function kongWidgetAddStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
        .kong-font{
            font-family: "Lato", sans-serif;
        }
        .kong-widget-chat-window {
            width: 400px;
            max-width: 100%;
            background: white;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
            max-height: 660px;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            transition: max-height 0.3s ease-in-out;
            border-radius: 15px;
            -webkit-box-shadow: 0 4px 16px rgba(0, 0, 0, .25);
            box-shadow: 0 4px 16px rgba(0, 0, 0, .25);
            margin: 20px;
            overflow: hidden;
        }

        .kong-widget-chat-messages {
            max-height: calc(70vh - 118px);
            overflow-y: auto;
            min-height: 250px;
            padding: 16px;
            background: #FFF;
            flex-grow: 1;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-message-wrapper {
            display: flex;
            align-items: flex-end;
            margin-bottom: 15px;
        }

        .kong-widget-user-message {
            justify-content: flex-end;
        }

        .kong-widget-assistant-message {
            justify-content: flex-start;
        }

        .kong-widget-message {
            padding: 8px;
            border-radius: 8px;
            max-width: 75%;
            font-family: "Lato", sans-serif;
            font-size: 0.9rem;
        }

        .kong-widget-user-message-bg {
            text-align: left;
            background: #000;
            color: rgb(255, 255, 255);
            word-wrap: break-word;
            border-radius: 20px;
            font-size: 14px;
            line-height: 20px;
            max-width: 100%;
            padding: 13px 18px;
            white-space: pre-wrap;
            word-break: break-word;
            border-bottom-right-radius: 2px;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-assistant-message-bg {
            text-align: left;
            word-wrap: break-word;
            border-radius: 20px;
            font-size: 14px;
            background: #f2f2f2;
            color: rgb(0, 0, 0);
            line-height: 20px;
            max-width: 100%;
            padding: 13px 18px;
            border: 1px solid #f2eeee;
            white-space: pre-wrap;
            border-bottom-left-radius: 2px;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-message-image {
            width: 32px;
            height: 32px;
            margin-left: 8px;
        }

        .kong-widget-chat-input {
            display: flex;
            align-items: center;
            padding: 0;
            height: 50px;
            border-top: 1px solid #ececec;
            border-bottom: 1px solid #ececec;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-input-box {
            border-bottom: 0px solid #ccc;
            border-radius: 4px;
            padding: 8px 8px 8px 20px;
            flex-grow: 1;
            margin-right: 8px;
            font-size: 0.9rem;
            outline: none;
            font-family: "Lato", sans-serif;
        }
        .kong-widget-header-section {
            display: flex;
            align-items: center;
            padding: 16px;
            background: #000;
            color: white;
            height: 68px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-logo {
            width: 45px;
            height: 45px;
            margin-right: 12px;
            border-radius: 100%;
        }

        .kong-widget-header-title {
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 6px;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-header-description {
            color: #ffffffcc;
            font-size: 14px;
            font-family: "Lato", sans-serif;
        }

        .kong-widget-button {
            padding: 8px 16px 8px 0px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .kong-widget-button:hover {
            cursor: pointer;
        }

        .kong-widget-button {
            color: black; /* Active color */
            cursor: pointer;
        }

        .kong-widget-button:disabled {
            color: #cccccc; /* Disabled color */
            cursor: not-allowed;
        }

        .kong-widget-hidden {
            display: none;
        }

        .kong-widget-loading-dots {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 40px;
            height: 10px;
        }

        .kong-widget-loading-dots div {
            width: 6px;
            height: 6px;
            background-color: #000;
            border-radius: 50%;
            animation: kong-widget-fade 1s infinite;
        }

        .kong-widget-loading-dots div:nth-child(1) {
            animation-delay: 0s;
        }

        .kong-widget-loading-dots div:nth-child(2) {
            animation-delay: 0.2s;
        }

        .kong-widget-loading-dots div:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes kong-widget-fade {
            0%, 80%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }
        .kong-widget-powered-by {
            text-align: center;
            padding: 8px;
            background: #f8f8f8;
            font-size: 12px;
            font-family: "Lato", sans-serif;
            color: #515050;
        }
        .kong-widget-powered-by a:hover {
            text-decoration: underline;
            color:#000;
            
        }
    `;
    document.head.appendChild(style);
}

document.addEventListener('DOMContentLoaded', () => {
    kongWidgetInitialize();
});
