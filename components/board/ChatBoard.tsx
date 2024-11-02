"use client";
import { socket } from "@/app/socket";
import SendMessageForm from "@/components/form/SendMessageForm";
import { useEffect, useState } from "react";

const ChatBoard = () => {
  const [messagesList, setMessagesList] = useState<string[]>([]);
  const [roomId, setRoomId] = useState<string>("xdftgv");


  useEffect(() => {
    socket.emit("join_room", roomId);
    socket.on("chat_transfer", (message) => {
      setMessagesList((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.off("chat_transfer");
    };
  }, [roomId]);

  return (
    <div className="h-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-primary">This is ChatBoard for Room: {roomId}</h2>
      <div className="flex flex-col h-full justify-between">
        <ul>
          {messagesList.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <SendMessageForm roomId={roomId} />
      </div>
    </div>
  );
};

export default ChatBoard;
