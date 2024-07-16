import useChat from '../../zustand/useChat';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Message({ message }) {
    const { selectedChat, setSelectedChat } = useChat();
    const { authUser } = useAuthContext();

    const fromMe = message.sederId === authUser._id;
    const chatClassName = fromMe ? 'chat-start' : 'chat-end';
    const profilePic = fromMe
        ? authUser.profilePicture
        : selectedChat.profilePicture;
    const bgColor = fromMe ? 'bg-accent' : 'bg-primary';

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bgColor}`}>
                {message.message}
            </div>
            <div className="chat-footer opacity-50">
                Delivered
                <time className="text-xs opacity-50"> 12:45</time>
            </div>
        </div>
    );
}
