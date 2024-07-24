import useChat from '../../../zustand/useChat';
import { useSocketContext } from '../../../hooks/useSocketContext';

export default function Chat({ chat }) {
    const { selectedChat, setSelectedChat } = useChat();

    const isSelected = selectedChat?._id === chat._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(chat._id);

    return (
        <li>
            <div
                className={`flex items-center align-center  cursor-pointer min-h-25 rounded-lg p-2 py-1 mx-1 my-1 `}
                onClick={() => setSelectedChat(chat)}
            >
                <div className={`avatar ${isOnline ? 'online' : 'offline'}`}>
                    <div className="w-16 rounded-full">
                        <img src={chat.profilePicture} />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-left ml-5">
                    <p className="font-bold">{chat.fullName}</p>
                </div>
            </div>
        </li>
    );
}
