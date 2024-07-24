import useChat from '../../zustand/useChat';
import { extractTime } from '../../utils/extractTime';
import { useAuthContext } from '../../hooks/useAuthContext';

export default function Message({ message }) {
    const { selectedChat } = useChat();
    const { authUser } = useAuthContext();

    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const formattedTime = extractTime(message.createdAt);
    const profilePic = fromMe
        ? authUser.profilePicture
        : selectedChat.profilePicture;

    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble`}>{message.message}</div>
            <div className="chat-footer opacity-50">
                <time className="text-xs opacity-50">{formattedTime}</time>
            </div>
        </div>
    );
}
