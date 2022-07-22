
import React from 'react';
import classNames from 'classnames';
import './App.css';

function App() {
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <div className="wrapper">
            <button className="button button-primary" onClick={openModal}>Launch card modal</button>

            <div className={classNames("modal", {
                'is-active': isModalOpen == true
            })}>
                <div className="modal-background" onClick={closeModal}></div>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Modal title</h2>
                        <i className="fa-solid fa-circle-xmark" onClick={closeModal}></i>
                    </div>
                    <div className="modal-body">
                        <p>My content here</p>
                    </div>
                    <div className="modal-footer">
                        <button className="button button-primary" onClick={closeModal}>Save Changes</button>
                        <button className="button" onClick={closeModal}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
