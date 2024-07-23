import { createContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';

export const SocketContext = createContext();

export function SocketContextProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io('http://localhost:4000');

            setSocket(socket);

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            } else {
            }
        }
    }, [authUser]);

    return (
        <SocketContextProvider value={{ socket, onlineUsers }}>
            {children}
        </SocketContextProvider>
    );
}
