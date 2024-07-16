import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { API_ROUTE, MESSEGES_ROUTE } from '../utils/STRINGS';
import useChat from "../zustand/useChat";

export default function useGetMessages() {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedChat } = useChat();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);

            try {
                const response = await fetch(`/${API_ROUTE}/${MESSEGES_ROUTE}/${selectedChat._id}`);

                const data = await response.json();

                if (response.ok) {
                    setMessages(data);
                } else {
                    throw new Error(data.error);
                }
            } catch (err) {
                toast.error(`Loading messages failed`);
            } finally {
                setLoading(false);
            }
        }

        if (selectedChat?._id) getMessages();

    }, [selectedChat?._id, setMessages]);

    return { messages, loading };
}