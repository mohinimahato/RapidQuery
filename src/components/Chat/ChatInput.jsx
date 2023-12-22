import { useState } from "react";
import PropTypes from 'prop-types';

function ChatInput({ onSendMessage }) {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') {
            return; // Don't send empty messages
        } else {
            onSendMessage(inputText);
            setInputText('');
        }
    }

    return (
        <div className="w-100 ">
            {/* Chat Input */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                <div className="flex-grow ml-4">
                    <div className="relative w-full">
                        <input
                            type="text"
                            className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                            value={inputText}
                            onChange={handleInputChange}
                            placeholder="Type your question here..."
                        />
                    </div>
                </div>
                <div className="ml-4">
                    <button
                        className="flex items-center justify-center bg-indigo-700 hover:bg-indigo-500 rounded-xl text-white px-4 py-1 flex-shrink-0"
                        onClick={handleSendMessage}>
                        <span>Send</span>
                        <span className="ml-2">
                            <svg
                                className="w-4 h-4 transform rotate-45 -mt-px"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

ChatInput.propTypes = {
    onSendMessage: PropTypes.func.isRequired,
};

export default ChatInput;