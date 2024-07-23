import { useState } from "react";
import toast from "react-hot-toast";
import { API_ROUTE, MESSEGES_ROUTE } from '../utils/STRINGS';
import useChat from '../zustand/useChat';

export default function useSendMessage() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedChat } = useChat();

    const sendMessage = async (message) => {
        try {
            setLoading(true);

            const response = await fetch(`/${API_ROUTE}/${MESSEGES_ROUTE}/send/${selectedChat._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            });

            const data = await response.json();

            if (response.ok) {
                setMessages([...messages, data]);
            } else {
                throw new Error(data.error);
            }

        } catch (err) {
            toast.error(`Sending message failed`);
        } finally {
            setLoading(false);
        }
    }

    return { sendMessage, loading };
}