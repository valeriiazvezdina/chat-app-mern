import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { API_ROUTE, USERS_ROUTE } from '../utils/STRINGS';
import { useNavigate } from 'react-router-dom';
import useLogout from "./useLogout";

export default function useGetChats() {
    const [loading, setLoading] = useState(false);
    const [chats, setChats] = useState([]);
    const { logout } = useLogout();
    const navigate = useNavigate();

    useEffect(() => {
        const getChats = async () => {
            setLoading(true);

            try {
                const response = await fetch(`/${API_ROUTE}/${USERS_ROUTE}/`);
                console.log(response)

                const data = await response.json();

                if (response.ok) {
                    setChats(data);
                }

                if (response.status === 403) {
                    logout();
                    navigate('/login');
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