export default function Chat() {
    return (
        <>
            <div className="flex items-center align-center hover:bg-gray-300 cursor-pointer min-h-25 rounded-lg p-2 py-1 mx-1 my-1">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://avatar.iran.liara.run/public" />
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-left ml-5">
                    <p className="font-bold">Name Surname</p>
                </div>
            </div>
        </>
    );
}
