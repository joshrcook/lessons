import classNames from 'classnames';

function Tab(props) {
    return (
        <div className={classNames("tab", props.className)}>
            <div className="icon">
                <i className={classNames("fa-solid", props.iconClass)}></i>
            </div>
            <div className="tab-text">{props.children}</div>
            <div className="tab-tag">{props.number}</div>
        </div>
    );
}

export default Tab;
