import Menu from '../../components/menu/Menu.jsx';
import MessagesContainer from '../../components/messages/MessagesContainer.jsx';
import Sidebar from '../../components/sidebar/Sidebar.jsx';

export default function Home() {
    return (
        <>
            <div className="flex flex-auto">
                <Sidebar />
                <Menu />
                <MessagesContainer />
            </div>
        </>
    );
}
