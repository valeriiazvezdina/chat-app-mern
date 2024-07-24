import MessageInput from './MessageInput';
import Messages from './Messages';
import NoChatSelected from './NoChatSelected';
import useChat from '../../zustand/useChat';
import { useEffect } from 'react';

export default function MessagesContainer() {
    const { selectedChat, setSelectedChat } = useChat();

    useEffect(() => {
        return () => setSelectedChat(null);
    }, [setSelectedChat]);

    return (
        <div className="flex flex-col h-screen w-full">
            {!selectedChat ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="flex flex-col justify-between px-4 py-3 mb-2">
                        <div>
                            <span className="label-text">To: </span>
                            <span className="font-bold">
                                {selectedChat.fullName}
                            </span>
                        </div>
                        <div className="w-full">
                            <div className="divider m-0 p-0"></div>
                        </div>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
}
