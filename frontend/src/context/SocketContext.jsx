import { createContext, useEffect, useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import io from 'socket.io-client';

export const SocketContext = createContext();

export function SocketContextProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser) {
            const socket = io('http://localhost:4000', {
                query: {
                    userId: authUser._id,
                },
            });

            socket.on('connect_error', (err) => {
                console.log(`connect_error due to ${err.message}`);
            });

            setSocket(socket);

            socket.on('getOnlineUsers', (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}
