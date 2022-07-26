import React from "react";
import classNames from "classnames";

function Alert(props) {
    const { title, description, icon, type } = props;
    const [isShown, setIsShown] = React.useState(true);

    function hideAlert() {
        setIsShown(false);
    }

    return (
        <div className={classNames("alert", {
            'alert-success': type == 'success',
            'alert-info': type == 'info',
            'alert-warning': type == 'warning',
            'alert-error': type == 'error',
            'alert-hidden': isShown == false
        })}>
            <div className="alert-icon">
                {icon}
            </div>
            <div className="alert-text">
                <div className="alert-title">{title}</div>
                <div className="alert-description">{description}</div>
            </div>
            <div className="alert-close" onClick={hideAlert}>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    );
}

export default Alert;