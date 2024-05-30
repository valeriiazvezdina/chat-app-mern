export default function Message() {
    return (
        <div className="chat chat-start">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public" />
                </div>
            </div>
            <div className="chat-bubble bg-primary text-white">
                You were the Chosen One!
            </div>
            <div className="chat-footer opacity-50">
                Delivered
                <time className="text-xs opacity-50"> 12:45</time>
            </div>
        </div>
    );
}
