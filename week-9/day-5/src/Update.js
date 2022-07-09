import classNames from "classnames";

function Update(props) {
    return (
        <div className={classNames("update", props.className)}>
            <div className="update-img" style={{ backgroundImage: `url(${props.image})` }}></div>
            <div className="update-text">
                <span className="update-main">{props.children}</span>
                &nbsp;
                <span className="update-time">{props.time} minutes ago</span>
            </div>
        </div>
    );
}

export default Update;
