import React, { useState } from "react";
import './AIchatbot.css';
import ropot from '../assets/ropot2.png';
// import ropot from '../assets/newRoptot.jpg';
import { X } from 'lucide-react';
import { sendMessageToGemini } from './Gemini';
import { useAiChatbot } from "../api/hooks/useAiChatbot";


const AIChatBot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");
    const dataRes = useAiChatbot();
    if (dataRes.isLoading) return;

    const data = dataRes.data?.data;
    if (!data) return;

    const suggestedQuestions = data.suggested_questions;

    const sendMessage = async (text) => {
        const newMessages = [...messages, { sender: "user", text }];
        setMessages(newMessages);
        setUserInput("");

        const reply = await sendMessageToGemini(text, data.system_prompt || "");
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
                        <span>{data.form_title}</span>
                        <X className="close-btn" onClick={() => setShowChat(false)} />
                    </div>

                    <div className="suggested-questions">
                        <p className="suggested-title">{data.suggested_questions_title}</p>
                        <ul>
                            {suggestedQuestions.map(({ question: q }, idx) => (
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
                            placeholder={data.input_placeholder}
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend}>{data.submit_button_text}</button>
                    </div>
                </div>
            )}

        </>
    );
};

export default AIChatBot;
