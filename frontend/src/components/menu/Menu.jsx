import SearchInput from '../searchinput/SearchInput';
import Chats from './chats/Chats';

export default function Menu() {
    return (
        <>
            <div className="fixed top-0 left-24 h-screen w-96 m-0 flex flex-col bg-white text-primary shadow-lg border">
                <SearchInput />
                <div className="divider mt-0 mr-5 ml-5"></div>
                <Chats />
            </div>
        </>
    );
}
