"use client";
import { socket } from "@/app/socket";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    message: z.string().min(1, { message: "Message cannot be empty" }).max(500, { message: "Message cannot exceed 500 characters" }),
});

interface FormValues {
    message: string;
}

const SendMessageForm = ({ roomId }: { roomId: string }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormValues) => {
        socket.emit("chat", { roomId, message: data.message });
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-4">
            <div>
                <Input
                    placeholder="Type your message here"
                    {...register("message")}
                />
                {errors.message && (
                    <p className="text-red-500">{errors.message?.message}</p>
                )}
            </div>
            <Button type="submit">Send</Button>
        </form>
    );
};

export default SendMessageForm;
