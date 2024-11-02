"use client";
import { socket } from "@/app/socket";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

const SendMessageForm = ({ roomId }: { roomId: string }) => {
    const [message, setMessage] = useState<string>("");

    const handleSubmit = () => {
        socket.emit("chat", { roomId, message });
        setMessage("");
    };

    return (
        <div className="flex flex-row gap-4">
            <Input
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <Button onPress={handleSubmit}>Send</Button>
        </div>
    );
};

export default SendMessageForm;
