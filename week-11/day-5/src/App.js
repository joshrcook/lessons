
import React from 'react';
import Alert from './Alert';
import './App.css';

function App() {

    return (
        <div className="wrapper">
            <Alert title="Congratulations" description="Your OS has been updated" icon={<i className="fa-solid fa-shield-halved"></i>} type="success" />
            <Alert title="Did you know?" description="You can do stuff" icon={<i class="fa-solid fa-circle-info"></i>} />
            <Alert title="Warning" description="Your password strength is low" icon={<i class="fa-solid fa-circle-exclamation"></i>} type="warning" />
            <Alert title="Something went wrong" description="The program turned off" icon={<i class="fa-solid fa-triangle-exclamation"></i>} type="error" />
        </div>
    );
}

export default App;
