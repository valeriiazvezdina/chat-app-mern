import { useEffect } from "react";
import useChat from "../zustand/useChat";
import { useSocketContext } from "./useSocketContext";

export default function useListenMessages() {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useChat();

    useEffect(() => {
        socket?.on('newMessage', (newMessage) => {
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off('newMessage');
    }, [socket, messages, setMessages]);
}