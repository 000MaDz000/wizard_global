import React, { useState } from "react";
import './AIchatbot.css';
import ropot from '../assets/ropot2.png';
import { X } from 'lucide-react';
import { sendMessageToGemini } from './Gemini';


const AIChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const suggestedQuestions = [
    "ما هي خدمات الشركة؟",
    "من أبرز الشركات التابعة للعربية للاستثمار؟",
    "كيفية التواصل مع الشركة؟",
  ];

  const sendMessage = async (text) => {
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);
    setUserInput("");

    const reply = await sendMessageToGemini(text);
    setMessages(prev => [...prev, { sender: "ai", text: reply }]);
  };



  const handleSend = () => {
    if (userInput.trim()) {
      sendMessage(userInput.trim());
    }
  };

  const handleSuggestedClick = (question) => {
    sendMessage(question);
  };

  return (
    <>
      {!showChat && (
        <img
          src={ropot}
          alt="AI مساعد"
          className="ropot"
          onClick={() => setShowChat(true)}
        />
      )}

      {showChat && (
        <div className="ai-chat-box">
          <div className="chat-header">
            <span>مساعد الشركة</span>
            <X className="close-btn" onClick={() => setShowChat(false)} />
          </div>

          <div className="suggested-questions">
            <p className="suggested-title">👋 يمكنك البدء بالأسئلة التالية:</p>
            <ul>
              {suggestedQuestions.map((q, idx) => (
                <li key={idx} onClick={() => handleSuggestedClick(q)}>{q}</li>
              ))}
            </ul>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="اكتب سؤالك هنا..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>إرسال</button>
          </div>
        </div>
      )}

    </>
  );
};

export default AIChatBot;
