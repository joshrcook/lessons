import classNames from "classnames";

function Tab(props) {
    const { icon, title, number, active } = props;

    return (
        <div className={classNames("tab", {
            'is-active': active == true
        })}>
            <div className="tab-icon">
                {icon}
            </div>
            <div className="tab-title">{title}</div>
            <div className="tab-number">{number}</div>
        </div>
    )
};

export default Tab;