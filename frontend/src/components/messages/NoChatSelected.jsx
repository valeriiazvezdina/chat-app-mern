import { useAuthContext } from '../../hooks/useAuthContext';

export default function NoChatSelected() {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center h-full w-full">
            <span className="text-2xl">
                {`✨ Welcome, ${authUser.fullName}! Select a chat to start messaging ✨`}
            </span>
        </div>
    );
}
