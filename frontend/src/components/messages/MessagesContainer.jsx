import ThemeToggle from '../theme-toggle/ThemeToggle';
import MessageInput from './MessageInput';
import Messages from './Messages';
import NoChatSelected from './NoChatSelected';

export default function MessagesContainer() {
    const noChatSelected = true;

    return (
        <div className="flex flex-col h-screen w-full">
            {noChatSelected ? (
                <NoChatSelected />
            ) : (
                <>
                    <div className="flex justify-between bg-gray-200 px-4 py-3 mb-2">
                        <div>
                            <span className="label-text">To: </span>
                            <span className="text-primary font-bold">
                                Name Username
                            </span>
                        </div>
                    </div>
                    <Messages />
                    <MessageInput />
                </>
            )}
        </div>
    );
}
