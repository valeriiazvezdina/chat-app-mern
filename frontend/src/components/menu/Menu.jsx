import SearchInput from '../searchinput/SearchInput';
import Chats from './chats/Chats';

export default function Menu() {
    return (
        <>
            <div className="h-screen w-96 m-0 flex flex-col">
                <SearchInput />
                <div className="divider my-0 mr-5 ml-5"></div>
                <Chats />
            </div>
            <div className="divider divider-horizontal m-0 p-0"></div>
        </>
    );
}
