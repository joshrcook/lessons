
import React from 'react';
import './App.css';

function App() {
    const [imageUrl, setImageUrl] = React.useState();

    React.useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random').then((response) => {
            return response.json();
        }).then((data) => {
            console.log('data', data.message);
            setImageUrl(data.message);
        });
    }, []);


    return (
        <div>
            <img src={imageUrl} />
            <button>Fetch!</button>
        </div>
    );
}

export default App;
