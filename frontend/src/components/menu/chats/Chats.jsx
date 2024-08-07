import useGetChats from '../../../hooks/useGetChats';
import Chat from './Chat';

export default function Chats() {
    const { loading, chats } = useGetChats();

    return (
        <ul className="menu">
            {chats.map((chat) => (
                <Chat key={chat._id} chat={chat} />
            ))}

            {loading ? <span className="loading loading-spinner"></span> : null}
        </ul>
    );
}
