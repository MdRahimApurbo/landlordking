"use client";
import { socket } from "@/app/socket";
import SendMessageForm from "@/components/form/SendMessageForm";
import { ScrollShadow } from "@nextui-org/react";
import { useEffect, useState } from "react";

interface ChatMessage {
  roomId: string;
  message: string;
  timestamp: number;
}

const ChatBoard = () => {
  const [messagesList, setMessagesList] = useState<ChatMessage[]>([]);
  const [roomId, setRoomId] = useState<string>("xdftgv");

  useEffect(() => {
    socket.emit("join_room", roomId);
    socket.on("chat_history", (messages: ChatMessage[]) => {
      setMessagesList(messages);
    });
    socket.on("chat_transfer", (message: ChatMessage) => {
      setMessagesList((prevMessages) => [...prevMessages, message]);
    });
    return () => {
      socket.off("chat_history");
      socket.off("chat_transfer");
    };
  }, [roomId]);

  return (
    <div className="h-full flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-primary">
        This is ChatBoard for Room: {roomId}
      </h2>
      <div className="flex flex-col h-full justify-between">
        <ScrollShadow
          className="w-full h-[400px] flex flex-col gap-5 justify-start items-start"
          as={"ul"}
          hideScrollBar
        >
          {messagesList.map((msg, index) => (
            <li key={index} className="p-2 bg-pink-700 rounded-full px-5 ">
              <div>{msg.message}</div>
            </li>
          ))}
        </ScrollShadow>
        <SendMessageForm roomId={roomId} />
      </div>
    </div>
  );
};

export default ChatBoard;
