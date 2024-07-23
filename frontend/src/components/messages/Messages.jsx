import { useEffect, useRef } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessagesSkeleton from '../skeletons/MessagesSkeleton';
import Message from './Message';

export default function Messages() {
    const { messages, loading } = useGetMessages();

    const lastMessageRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
    }, [messages]);

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
                    <div key={message._id} ref={lastMessageRef}>
                        <Message message={message} />
                    </div>
                ))}

            {!loading && messages.length === 0 && (
                <p className="text-center">Send a message to start the chat</p>
            )}
        </div>
    );
}
