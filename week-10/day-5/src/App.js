import classNames from "classnames";
import React from "react";
import "./App.css";

function App() {
    const [isModalActive, setIsModalActive] = React.useState(false);
    const [counter, setCounter] = React.useState(0);

    function launchModal() {
        setIsModalActive(true);
        setCounter(counter + 1);
    }

    function closeModal() {
        setIsModalActive(false);
    }

    return (
        <div className="container">
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <p>
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet
                rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus
                mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet.
            </p>
            <div>How many times modal was launched: {counter}</div>
            <button className="button primary" onClick={launchModal}>
                Launch modal
            </button>
            <div
                className={classNames("modal-background", {
                    "is-active": isModalActive,
                })}
            >
                <div className="modal">
                    <h3 className="modal-title">Modal title</h3>
                    <p className="modal-content">Woohoo, you're reading this text in a modal!</p>
                    <footer className="modal-footer">
                        <button className="button secondary" onClick={closeModal}>
                            Close
                        </button>
                        <button className="button primary" onClick={closeModal}>
                            Save Changes
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
