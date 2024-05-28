import SidebarIcon from './SidebarIcon.jsx';
import { AiOutlineMessage, AiOutlineContacts } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';

export default function Sidebar() {
    return (
        <>
            <div className="fixed top-0 left-0 h-screen w-24 m-0 flex flex-col bg-white text-white shadow-lg border ">
                <SidebarIcon
                    icon={<AiOutlineMessage size="28" />}
                    text="Chats"
                />
                <SidebarIcon
                    icon={<AiOutlineContacts size="28" />}
                    text="Contacts"
                />
                <SidebarIcon icon={<LuLogOut size="28" />} text="Log Out" />
            </div>
        </>
    );
}
