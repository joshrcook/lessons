import React from "react";
import classNames from 'classnames';

function Alert(props) {
    const [isShown, setIsShown] = React.useState(true);
    const { title, description, icon, type } = props;

    function hideAlert() {
        setIsShown(false);
    }

    return (
        <div className={classNames("alert", {
            'alert-success': type == 'success',
            'alert-warning': type == 'warning',
            'alert-error': type == 'error',
            'alert-hidden': isShown == false
        })}>
            <div className="alert-icon">
                {icon}
            </div>
            <div className="alert-text">
                <h2 className="alert-title">{title}</h2>
                <p className="alert-description">{description}</p>
            </div>
            <div className="alert-close" onClick={hideAlert}>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </div>
    );
}

export default Alert;
