import { useState } from 'react';
import { BsSendFill } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

export default function MessageInput() {
    const [message, setMessage] = useState('');
    const { loading, sendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        await sendMessage(message);
        setMessage('');
    };

    return (
        <form className="px-4 my-3" onSubmit={handleSubmit}>
            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="Type message"
                    className="text-lg border shadow-md rounded-lg border-gray-400 block w-full p-2.5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center pe-3 pr-5"
                >
                    {loading ? (
                        <div className="loading loading-spinner"></div>
                    ) : (
                        <BsSendFill />
                    )}
                </button>
            </div>
        </form>
    );
}
