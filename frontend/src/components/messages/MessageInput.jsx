import { BsSendFill } from 'react-icons/bs';

export default function MessageInput() {
    return (
        <form className="px-4 my-3">
            <div className="w-full relative">
                <input
                    type="text"
                    placeholder="Type message"
                    className="text-lg border shadow-md rounded-lg border-gray-400 block w-full p-2.5"
                />
                <button
                    type="submit"
                    className="absolute inset-y-0 end-0 flex items-center pe-3 pr-5"
                >
                    <BsSendFill />
                </button>
            </div>
        </form>
    );
}
