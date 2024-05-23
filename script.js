// Add CSS for the chat window
const chatWindowStyle = document.createElement('style');
chatWindowStyle.innerHTML = `
#chatWindow {
    position: fixed;
    bottom: 60px;
    right: 20px;
    width: 300px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    z-index: 9999;
    font-family: Arial, sans-serif;
}

#chatHeader {
    background-color: #008CBA;
    color: white;
    padding: 10px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

#chatBody {
    padding: 10px;
    max-height: 200px;
    overflow-y: auto;
}

.message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 20px;
    background-color: #008CBA;
    color: white;
    display: inline-block;
    max-width: 70%;
}

#chatInput {
    display: flex;
    padding: 10px;
}

#messageInput {
    flex: 1;
    padding: 5px;
    border-radius: 3px;
    border: 1px solid #ccc;
}

#sendButton {
    padding: 5px 10px;
    margin-left: 10px;
    border: none;
    background-color: #008CBA;
    color: white;
    border-radius: 3px;
    cursor: pointer;
}
`;
document.head.appendChild(chatWindowStyle);

// Create the chat window
const chatWindow = document.createElement('div');
chatWindow.id = 'chatWindow';
chatWindow.style.display = 'none'; // Initially hide the chat window

// Chat header
const chatHeader = document.createElement('div');
chatHeader.id = 'chatHeader';
chatHeader.textContent = 'Chat';
chatWindow.appendChild(chatHeader);

// Chat body
const chatBody = document.createElement('div');
chatBody.id = 'chatBody';
chatWindow.appendChild(chatBody);

// Chat input
const chatInput = document.createElement('div');
chatInput.id = 'chatInput';
chatWindow.appendChild(chatInput);

// Message input field
const messageInput = document.createElement('input');
messageInput.type = 'text';
messageInput.id = 'messageInput';
messageInput.placeholder = 'Type your message...';
chatInput.appendChild(messageInput);

// Send button
const sendButton = document.createElement('button');
sendButton.id = 'sendButton';
sendButton.textContent = 'Send';
chatInput.appendChild(sendButton);

// Add the chat window to the document body
document.body.appendChild(chatWindow);

// Create the floating button
const floatingButton = document.createElement('button');
floatingButton.id = 'floatingButton';
floatingButton.textContent = '+';
floatingButton.style.position = 'fixed';
floatingButton.style.bottom = '20px';
floatingButton.style.right = '20px';
floatingButton.style.backgroundColor = '#008CBA';
floatingButton.style.color = 'white';
floatingButton.style.border = 'none';
floatingButton.style.borderRadius = '50%';
floatingButton.style.padding = '15px 20px';
floatingButton.style.fontSize = '18px';
floatingButton.style.cursor = 'pointer';
floatingButton.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
floatingButton.style.zIndex = '1000';
document.body.appendChild(floatingButton);

// Add event listener to toggle chat window visibility
floatingButton.addEventListener('click', () => {
    if (chatWindow.style.display === 'none') {
        chatWindow.style.display = 'block';
    } else {
        chatWindow.style.display = 'none';
    }
});

// Function to send a message
function sendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.classList.add('message');
    chatBody.appendChild(messageElement);
    // Scroll to the bottom of the chat window
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Example usage: sendMessage('Hello, how can I help you?');
