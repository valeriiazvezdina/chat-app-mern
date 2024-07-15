import { useState } from "react";
import toast from 'react-hot-toast';
import { API_ROUTE, USERS_ROUTE } from '../utils/STRINGS';
import { useAuthContext } from './useAuthContext';

export default function useLogin() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        setLoading(true);

        try {
            const response = await fetch(`/${API_ROUTE}/${USERS_ROUTE}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password,
                })
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(`Successfuly login`);
                localStorage.setItem('chat-user', JSON.stringify(data));
                setAuthUser(data);
            } else {
                throw new Error(data.error);
            }

        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, login };
}