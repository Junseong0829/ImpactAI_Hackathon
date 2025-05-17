import React, { useState, type KeyboardEvent } from "react";
import "./Chat.css";
import axios from "axios";
import { marked } from "marked";

type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}

const ChatUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages: Message[] = [
      ...messages,
      { role: "user", content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const response = await axios.post(
        // `${api_url}/chat`,
        "http://13.209.95.133:5100/chat",
        {
          user_id: "dlakd",
          content: input,
        }
      );

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response.data },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ 서버 오류가 발생했습니다. 나중에 다시 시도해주세요.",
        },
      ]);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chat-container">
      <h1 className="chat-title">정치 관점 탐색 챗봇</h1>
      <div className="chat-window">
        {messages.map((msg) => (
          <div
            className={`chat-bubble ${msg.role}`}
            dangerouslySetInnerHTML={{ __html: marked.parse(msg.content) }}
          />
        ))}
        {loading && (
          <div className="chat-bubble assistant">답변을 생성 중입니다...</div>
        )}
      </div>
      <div className="chat-input-row">
        <input
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="정치 이슈에 대해 토론해보세요."
          disabled={loading}
          autoFocus
        />
        <button className="chat-button" onClick={handleSend} disabled={loading}>
          보내기
        </button>
      </div>
    </div>
  );
};

export default ChatUI;
