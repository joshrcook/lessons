
import NavItem from './NavItem';
import './App.css';

function App() {

    const navItems = [
        {
            text: 'Home',
            icon: <i className="fa-solid fa-house"></i>,
            isActive: false,
        },
        {
            text: 'My Trips',
            icon: <i className="fa-solid fa-caravan"></i>,
            isActive: true,
        },
        {
            text: 'My Campgrounds',
            icon: <i className="fa-solid fa-campground"></i>,
            isActive: false,
        }
    ];



    return (
        <nav className="wrapper">
            {navItems.map(({ text, icon, isActive }) => (
                <NavItem text={text} icon={icon} active={isActive} />
            ))}

            {/* <NavItem text="My Trips" icon={<i className="fa-solid fa-caravan"></i>} />
            <NavItem text="My Campgrounds" icon={<i className="fa-solid fa-campground"></i>} /> */}
        </nav>
    );
}

export default App;
