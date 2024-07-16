import useGetMessages from '../../hooks/useGetMessages';
import MessagesSkeleton from '../skeletons/MessagesSkeleton';
import Message from './Message';

export default function Messages() {
    const { messages, loading } = useGetMessages();
    console.log(messages);
    return (
        <div className="px-4 flex-1 overflow-auto">
            {loading && (
                <>
                    <MessagesSkeleton />
                    <MessagesSkeleton />
                    <MessagesSkeleton />
                </>
            )}

            {!loading &&
                messages.length > 0 &&
                messages.map((message) => (
                    <Message key={message._id} message={message} />
                ))}

            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start the chat</p>
            )}
        </div>
    );
}
