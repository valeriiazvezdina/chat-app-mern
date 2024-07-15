import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { API_ROUTE, USERS_ROUTE } from '../utils/STRINGS';

export default function useGetChats() {
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const getChats = async () => {
            setLoading(true);

            try {
                const response = await fetch(`/${API_ROUTE}/${USERS_ROUTE}/`);

                const data = await response.json();

                if (response.ok) {
                    setChats(data);
                } else {
                    throw new Error(data.error);
                }

            } catch (err) {
                toast.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        getChats();

    }, []);

    return { loading, chats };
}