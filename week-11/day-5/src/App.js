
import React from 'react';
import Alert from './Alert';
import './App.css';

function App() {

    return (
        <div className="wrapper">
            <Alert title="Account created" description="You have successfully created your account" icon={<i className="fa-solid fa-circle-check"></i>} type="success" />
            <Alert title="Choose a strong password" description="blah" icon={<i className="fa-solid fa-circle-exclamation"></i>} type="info" />
            <Alert title="Choose a strong password" description="blah" icon={<i className="fa-solid fa-circle-exclamation"></i>} type="warning" />
            <Alert title="Choose a strong password" description="blah" icon={<i className="fa-solid fa-circle-exclamation"></i>} type="error" />
        </div>
    );
}

export default App;
