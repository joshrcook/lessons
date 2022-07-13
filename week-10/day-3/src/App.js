import React from "react";
import "./App.css";

function App() {
    const [likes, setLikes] = React.useState(99);

    function buttonClicked() {
        setLikes(likes + 1);
    }

    return (
        <div className="App">
            <div>Likes: {likes}</div>
            <button onClick={buttonClicked}>Add a like</button>
        </div>
    );
}

export default App;
