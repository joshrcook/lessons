
import './App.css';
import Item from './Item';

function App() {

    const data = [
        {
            text: 'Portraits'
        },
        {
            text: 'Table',
        },
        {
            text: 'Buildings'
        },
        {
            text: 'Forest'
        },
        {
            text: 'Landscapes'
        },
        {
            text: 'Share',
        },
        {
            text: 'Office'
        }
    ];

    return (
        <div className="wrapper">
            <div className="header">Recent searches</div>
            <div className="items">
                {data.map((item) => (
                    <Item title={item.text} />
                ))}
            </div>
        </div>
    );
}

export default App;
