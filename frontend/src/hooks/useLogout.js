import { useState } from "react";
import toast from 'react-hot-toast';
import { API_ROUTE, USERS_ROUTE } from '../utils/STRINGS';
import { useAuthContext } from "./useAuthContext";

export default function useLogout() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        setLoading(true);

        try {
            const response = await fetch(`/${API_ROUTE}/${USERS_ROUTE}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(`Successfuly logout`);
                localStorage.removeItem('chat-user');
                setAuthUser(null);
            } else {
                throw new Error(data.error[0].msg);
            }
        } catch (err) {
            toast.error(`Logout failed`);
        } finally {
            setLoading(false);
        }
    }

    return { loading, logout };
}