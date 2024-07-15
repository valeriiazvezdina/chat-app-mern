import SidebarIcon from './SidebarIcon.jsx';
import { AiOutlineMessage, AiOutlineContacts } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import ThemeToggle from '../theme-toggle/ThemeToggle.jsx';
import useLogout from '../../hooks/useLogout.js';

export default function Sidebar() {
    const { loading, logout } = useLogout();
    return (
        <>
            <div className="flex flex-col justify-between h-screen w-24 m-0 shadow-lg">
                <div className="flex flex-col">
                    <SidebarIcon
                        icon={<AiOutlineMessage size="28" />}
                        text="Chats"
                    />
                    <SidebarIcon
                        icon={<AiOutlineContacts size="28" />}
                        text="Contacts"
                    />
                    <SidebarIcon
                        icon={<LuLogOut size="28" />}
                        text="Log Out"
                        onClick={logout}
                    />
                </div>
                <ThemeToggle />
            </div>
        </>
    );
}
