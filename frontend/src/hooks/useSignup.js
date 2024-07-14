import { useState } from 'react';
import toast from 'react-hot-toast';
import { API_ROUTE, LOCALHOST, USERS_ROUTE } from '../utils/STRINGS';

export default function useSignup() {
    const [loading, setLoading] = useState(false);

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

            if (!response.ok) {
                throw new Error(data.error[0].msg);
            }

            toast.success(`User successfuly created`);
        } catch (err) {
            toast.error(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
}
