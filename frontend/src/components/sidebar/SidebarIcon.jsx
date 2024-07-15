export default function SidebarIcon({ icon, text = 'tooltip', onClick }) {
    return (
        <div className="sidebar-icon group" onClick={onClick}>
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    );
}
