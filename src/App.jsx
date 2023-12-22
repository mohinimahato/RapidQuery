import ChatBubble from "./components/Chat/ChatBubble"
import ChatInput from "./components/Chat/ChatInput"
// import ChatApp from "./components/Chat/ChatApp"
import { useState } from "react"
function App() {
  const [questionHistory, setQuestionHistory] = useState([]);
  const handleSendMessage = function (question) {
    setQuestionHistory([...questionHistory, { question, sender: 'U' }])
  }
  return (
    <div className="w-100 relative border border-l-amber-950 h-screen px-3 ">
      {/* <ChatApp /> */}
      <div className="flex flex-row border border-l-amber-950 absolute inset-x-0 bottom-0">
        <div className="basis-1/3 sticky bottom-0 border border-l-amber-950">
          {questionHistory.map((chat, index) => (
            <ChatBubble key={index} question={chat.question} sender={chat.sender} />
          ))}

          <ChatInput onSendMessage={handleSendMessage} />
        </div>
        {/* Moderate priority with 3+ upvotes */}
        <div className="basis-1/3 border border-l-amber-950">
          <ChatBubble />
        </div>
        {/* High priority with 3+ upvotes */}
        <div className="basis-1/3 border border-red-600">
          <ChatBubble />
        </div>
      </div>
    </div>

  )
}

export default App