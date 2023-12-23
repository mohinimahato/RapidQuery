import { useState } from "react";
import ChatBubble from "./components/Chat/ChatBubble";
import ChatInput from "./components/Chat/ChatInput";

function App() {
  const [questionHistory, setQuestionHistory] = useState([]);
  const [upvotes, setUpvotes] = useState({}); // Keep track of upvotes for each question

  const handleSendMessage = function (question) {
    const newQuestion = { question, sender: 'User' };
    setQuestionHistory([...questionHistory, newQuestion]);
    setUpvotes({ ...upvotes, [question]: 0 }); // Initialize upvotes for the new question
  };

  const handleUpvote = (question) => {
    const currentUpvotes = upvotes[question] || 0;
    setUpvotes({ ...upvotes, [question]: currentUpvotes + 1 });
  };

  return (
    <div className="w-100 relative border border-l-amber-950 h-screen px-3 ">
      <div className="flex flex-row border border-l-amber-950 absolute inset-x-0 bottom-0">
        <div className="basis-1/3 sticky bottom-0 border">
          {questionHistory.map((chat, index) => (
            <ChatBubble
              key={index}
              question={chat.question}
              sender={chat.sender}
              upvotes={upvotes[chat.question] || 0}
              handleUpvote={() => handleUpvote(chat.question)}
            />
          ))}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
        <div className="basis-1/3 border moderatePriority">
          {questionHistory.map((chat, index) => {
            const currentUpvotes = upvotes[chat.question] || 0;
            if (currentUpvotes >= 3 && currentUpvotes < 10) {
              return (
                <ChatBubble
                  key={index}
                  question={chat.question}
                  sender={chat.sender}
                  upvotes={currentUpvotes}
                  handleUpvote={() => handleUpvote(chat.question)}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="basis-1/3  highPriority">
          {questionHistory.map((chat, index) => {
            const currentUpvotes = upvotes[chat.question] || 0;
            if (currentUpvotes >= 10) {
              return (
                <ChatBubble
                  key={index}
                  question={chat.question}
                  sender={chat.sender}
                  upvotes={currentUpvotes}
                  handleUpvote={() => handleUpvote(chat.question)}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
