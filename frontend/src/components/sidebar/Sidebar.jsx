import SidebarIcon from './SidebarIcon.jsx';
import { AiOutlineMessage, AiOutlineContacts } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import ThemeToggle from '../theme-toggle/ThemeToggle.jsx';
import useLogout from '../../hooks/useLogout.js';

export default function Sidebar() {
    const { loading, logout } = useLogout();
    return (
        <>
            <div className="flex flex-col drawer lg:drawer-open justify-between h-screen w-24 m-0">
                <ul className="menu flex flex-col">
                    <li>
                        <SidebarIcon
                            icon={<AiOutlineMessage size="28" />}
                            text="Chats"
                        />
                    </li>
                    <li>
                        <SidebarIcon
                            icon={<AiOutlineContacts size="28" />}
                            text="Contacts"
                        />
                    </li>
                    <li>
                        <SidebarIcon
                            icon={<LuLogOut size="28" />}
                            text="Log Out"
                            onClick={logout}
                        />
                    </li>
                </ul>
                <ThemeToggle />
            </div>
            <div className="divider divider-horizontal m-0 p-0"></div>
        </>
    );
}
