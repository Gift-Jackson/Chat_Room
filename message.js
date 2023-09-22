// Select elements
const message = document.querySelector("#message");
const sendBtn = document.querySelector(".send-message-btn");
const messageContainer = document.querySelector(".message-container");

// Add event listeners
sendBtn.addEventListener('click', handleSendClick);
message.addEventListener('focus', handleMessageFocus);

function handleSendClick() {
    const messageValue = message.value.trim();

    if (messageValue === "") {
        message.classList.add("error");
    } else {
        message.classList.remove("error");
        sendMessage(messageValue);
    }

    message.value = "";
}

function sendMessage(messageValue) {
    const formattedMessage = formatMessageText(messageValue);
    const messageDiv = createUserMessageDiv(formattedMessage);
    messageContainer.appendChild(messageDiv);

    // Scroll to the last appended message
    messageDiv.scrollIntoView({ behavior: 'smooth' });
}

function formatMessageText(messageValue) {
    // Replace newline characters with <br> tags
    return messageValue.replace(/\n/g, '<br>');
}

function createUserMessageDiv(messageValue) {
    const messageColumn = createElement('div', 'message-column');
    const userMessage = createElement('div', 'user-message');
    const userMessageBox = createElement('div', 'user-message-box');
    const p = createElement('p', 'user-text', messageValue);

    userMessageBox.appendChild(p);
    userMessage.appendChild(userMessageBox);
    messageColumn.appendChild(userMessage);

    return messageColumn;
}

function createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    if (className) {
        element.className = className;
    }
    if (innerHTML) {
        element.innerHTML = innerHTML;
    }
    return element;
}

function handleMessageFocus() {
    message.classList.remove("error");
}
