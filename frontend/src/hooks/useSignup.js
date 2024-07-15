import { useState } from 'react';
import toast from 'react-hot-toast';
import { API_ROUTE, USERS_ROUTE } from '../utils/STRINGS';
import { useAuthContext } from './useAuthContext';

export default function useSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async ({
        fullName,
        username,
        email,
        password,
        confirmPassword,
        gender,
    }) => {
        setLoading(true);

        try {
            const response = await fetch(`/${API_ROUTE}/${USERS_ROUTE}/signup`, {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName,
                    username,
                    email,
                    password,
                    confirmPassword,
                    gender,
                })
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(`User successfuly created`);
                localStorage.setItem('chat-user', JSON.stringify(data));
                setAuthUser(data);
            } else {
                throw new Error(data.error[0].msg);
            }
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}
