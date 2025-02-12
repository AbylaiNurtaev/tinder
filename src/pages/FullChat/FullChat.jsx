import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import io from "socket.io-client";
import axios from "../../axios";
import TopChat from "../../components/TopChat";
import "./FullChat.css";

// const socket = io("http://localhost:3001");
const socket = io("wss://tinder-back-production.up.railway.app");

function FullChat() {
  const { userId } = useParams();
  const id = localStorage.getItem("id");

  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      socket.emit("joinChat", id);
    }

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receiveMessage");
    };
  }, [id]);

  useEffect(() => {
    if (id && userId) {
      axios.post("/auth/getUserById", { userId: userId }).then((res) => {
        if (res.data) {
          setUser(res.data);
        }
      });
      axios
        .post("/getMessages", {
          userId: id,
          receiverId: userId,
        })
        .then((res) => {
          setMessages(res.data);
        })
        .catch((err) => console.error(err));
    }
  }, [userId]);

  const sendMessage = () => {
    if (message.trim() && userId) {
      const newMessage = {
        senderId: id,
        receiverId: userId,
        message,
        createdAt: new Date().toISOString(),
      };
      socket.emit("sendMessage", newMessage);

      setMessages((prev) => [...prev, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <TopChat name={user?.name} img={user?.photos[0]} />

      <div className="chat-box">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message-wrapper ${
              msg.senderId === id ? "sent" : "received"
            }`}
          >
            <div className="message">
              <p className="text">{msg.message}</p>
              <span className="time">
                {new Date(msg.createdAt).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                {msg.senderId === id && (
                  <img src="/images/icons/Receive.svg" alt="" />
                )}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение..."
        />
        <img
          onClick={sendMessage}
          src="/images/icons/secondary button (1).svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default FullChat;
