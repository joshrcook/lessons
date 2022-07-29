import './App.css';
import NavItem from './NavItem';

function App() {
    const items = [
        {
            "title": "Home",
            "iconColor": "#3D81F6",
            "number": 12,
            "selected": true
        },
        {
            "title": "Today",
            "iconColor": "#E9B306",
            "number": 7,
            "selected": false
        },
        {
            "title": "Personal",
            "iconColor": "#A755F7",
            "number": 8,
            "selected": false
        },
        {
            "title": "Work",
            "iconColor": "#22C55D",
            "number": 5,
            "selected": false
        },
        {
            "title": "Errands",
            "iconColor": "#EC4899",
            "number": 2,
            "selected": false
        },
        {
            "title": "Road Trip",
            "iconColor": "#F87316",
            "number": 3,
            "selected": false
        }
    ];

    return (
        <div className="nav-wrapper">
            {items.map(
                (item) => (
                    <NavItem number={item.number} color={item.iconColor}>{item.title}</NavItem>
                )
            )}
        </div>
    );
}

export default App;
