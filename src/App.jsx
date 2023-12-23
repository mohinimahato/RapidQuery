import { useState } from "react";
import ChatBubble from "./components/Chat/ChatBubble";
import ChatInput from "./components/Chat/ChatInput";

function App() {
  const [questionHistory, setQuestionHistory] = useState([]);
  const [upvotes, setUpvotes] = useState({});

  const handleSendMessage = function (question) {
    const newQuestion = { question, sender: 'User' };
    setQuestionHistory([...questionHistory, newQuestion]);
    setUpvotes({ ...upvotes, [question]: 0 });
  };

  const handleUpvote = (question) => {
    const currentUpvotes = upvotes[question] || 0;
    setUpvotes({ ...upvotes, [question]: currentUpvotes + 1 });
  };

  const handleDismiss = (question, priority) => {
    const updatedQuestions = questionHistory.filter((q) => {
      return q.priority !== priority || q.question !== question;
    });
    setQuestionHistory(updatedQuestions);
    const updatedUpvotes = { ...upvotes };
    delete updatedUpvotes[question];
    setUpvotes(updatedUpvotes);
  };

  return (
    <div className="w-100 relative h-screen px-3  overflow-hidden bg-[#011936]">
      <div className="font-bold text-2xl text-center py-2 text-white">Rapid Query</div>

      <div className="flex flex-row h-screen end-0 pt-2">
        <div className="basis-1/3 border end-0 overflow-y-auto">
          <div className="basis-1/3 sticky bottom-0 text-center font-bold text-xl bg-[#ED254E] py-2">All Chats</div>
          <div style={{ alignSelf: 'flex-end' }}>
            {questionHistory.map((chat, index) => (
              <ChatBubble
                key={index}
                question={chat.question}
                sender={chat.sender}
                upvotes={upvotes[chat.question] || 0}
                handleUpvote={() => handleUpvote(chat.question)}
                handleDismiss={() => handleDismiss(chat.question, 'normal')}
                priority={'normal'}
              />
            ))}
          </div>

          <div className="w-100 inputContainer absolute bottom-1">
            <ChatInput onSendMessage={handleSendMessage} className="w-100" />
          </div>

        </div>

        <div className="basis-1/3 border h-screen moderatePriority overflow-y-auto" style={{ alignSelf: 'flex-start' }}>
          <div className="basis-1/3 sticky bottom-0 text-center font-bold text-xl bg-[#F9DC5C] py-2 text-dark">Moderate Priority</div>
          {questionHistory.map((chat, index) => {
            const currentUpvotes = upvotes[chat.question] || 0;
            if (currentUpvotes >= 3 && currentUpvotes < 10) {
              return (
                <ChatBubble
                  key={index}
                  question={chat.question}
                  sender={chat.sender}
                  upvotes={upvotes[chat.question] || 0}
                  handleUpvote={() => handleUpvote(chat.question)}
                  handleDismiss={() => handleDismiss(chat.question, 'moderate')}
                  priority={'moderate'}
                />
              );
            }
            return null;
          })}
        </div>
        <div className="basis-1/3 border h-screen highPriority overflow-y-auto" style={{ alignSelf: 'flex-start' }}>
          <div className="basis-1/3 sticky bottom-0 text-center font-bold text-xl bg-[#9ADE7B] py-2">High Priority</div>
          {questionHistory.map((chat, index) => {
            const currentUpvotes = upvotes[chat.question] || 0;
            if (currentUpvotes >= 10) {
              return (
                <ChatBubble
                  key={index}
                  question={chat.question}
                  sender={chat.sender}
                  upvotes={upvotes[chat.question] || 0}
                  handleUpvote={() => handleUpvote(chat.question)}
                  handleDismiss={() => handleDismiss(chat.question, 'high')}
                  priority={'high'}
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
