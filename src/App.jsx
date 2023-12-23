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
      return (q.priority !== priority || q.question !== question);
    });
    setQuestionHistory(updatedQuestions);
    const updatedUpvotes = { ...upvotes };
    delete updatedUpvotes[question];
    setUpvotes(updatedUpvotes);
  };

  return (
    <div className="w-100 relative h-screen px-3 overflow-hidden">
      <div className="flex flex-row text-center">
        <div className="basis-1/3 sticky bottom-0">All Chats</div>
        <div className="basis-1/3 sticky bottom-0">Moderate Priority</div>
        <div className="basis-1/3 sticky bottom-0">High Priority</div>
      </div>

      <div className="flex flex-row h-screen end-0">
        <div className="basis-1/3 border end-0 ">
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

          <div className="w-100 inputConatiner absolute bottom-1">
            <ChatInput onSendMessage={handleSendMessage} />
          </div>

        </div>

        <div className="basis-1/3 border moderatePriority" style={{ alignSelf: 'flex-start' }}>
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
        <div className="basis-1/3 border highPriority" style={{ alignSelf: 'flex-start' }}>
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
