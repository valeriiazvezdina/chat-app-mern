import SearchInput from '../searchinput/SearchInput';
import Chats from './chats/Chats';

export default function Menu() {
    return (
        <>
            <div className="h-screen w-96 m-0 flex flex-col text-primary shadow-lg">
                <SearchInput />
                <div className="divider mt-0 mr-5 ml-5"></div>
                <Chats />
            </div>
        </>
    );
}
