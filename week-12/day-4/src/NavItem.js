import classNames from "classnames";

function NavItem(props) {
    const { text, icon, active } = props;

    return (
        <a href="/" className={classNames("nav-item", {
            'is-active': active == true
        })}>
            <div className="nav-item-icon">
                {icon}
            </div>
            <div className="nav-item-text">{text}</div>
        </a>
    );
}

export default NavItem;