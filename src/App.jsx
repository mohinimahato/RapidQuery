import ChatBubble from "./components/Chat/ChatBubble"
import ChatInput from "./components/Chat/ChatInput"
import { useState } from "react"
function App() {
  const [questionHistory, setQuestionHistory] = useState([]);
  const handleSendMessage = function (question) {
    setQuestionHistory([...questionHistory, { question, sender: 'User' }])
  }
  return (
    <div className="w-100 relative border border-l-amber-950 h-screen px-3 ">
      {/* <ChatApp /> */}
      <div className="flex flex-row border border-l-amber-950 absolute inset-x-0 bottom-0">
        <div className="basis-1/3 sticky bottom-0 border ">
          {questionHistory.map((chat, index) => (
            <ChatBubble key={index} question={chat.question} sender={chat.sender} />
          ))}

          <ChatInput onSendMessage={handleSendMessage} />
        </div>
        {/* Moderate priority with 3+ upvotes */}
        <div className="basis-1/3 border moderatePriority">


        </div>
        {/* High priority with 10+ upvotes */}
        <div className="basis-1/3  highPriority">


        </div>
      </div>
    </div>

  )
}

export default App