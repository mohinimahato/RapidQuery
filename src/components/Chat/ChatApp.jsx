import { useState } from "react";
const ChatApp = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') {
            return; // Don't send empty messages
        }

        // Update chat history with the new message
        setChatHistory([...chatHistory, { text: inputText, sender: 'localUser' }]);

        // Clear the input box after sending the message
        setInputText('');
    };

    return (
        <div>
            <div style={{ border: '1px solid #ccc', padding: '10px', height: '200px', overflowY: 'scroll' }}>
                {chatHistory.map((message, index) => (
                    <div key={index}>{message.sender}: {message.text}</div>
                ))}
            </div>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatApp;
