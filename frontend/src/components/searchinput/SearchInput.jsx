import { useState } from 'react';
import useChat from '../../zustand/useChat';
import useGetChats from '../../hooks/useGetChats';
import toast from 'react-hot-toast';

export default function SearchInput() {
    const [search, setSearch] = useState('');
    const { setSelectedChat } = useChat();
    const { chats } = useGetChats();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;

        if (search.length < 3)
            return toast.error('Search must be at least 3 characters');

        const chat = chats.find((c) =>
            c.fullName.toLowerCase().includes(search.toLowerCase())
        );

        if (chat) {
            setSelectedChat(chat);
            setSearch('');
        } else {
            toast.error('No such chat found');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className="input border shadow-md rounded-full border-gray-400 flex items-center gap-2 m-3">
                    <input
                        type="text"
                        className="grow"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="w-4 h-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </label>
            </form>
        </>
    );
}
