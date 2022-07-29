import Tab from './Tab';
import './App.css';

function App() {
    const tabsData = [
        {
            icon: <i className=""></i>,
            titleText: 'Videos',
            numberOfItems: '80',
            isActive: true
        },
        {
            icon: <i className=""></i>,
            titleText: 'Photos',
            numberOfItems: '1,015',
            isActive: false
        },
        {
            icon: <i className=""></i>,
            titleText: 'Collections',
            numberOfItems: '34',
            isActive: false
        },
    ]

    return (
        <div className="tabs">
            {tabsData.map(({ icon, titleText, numberOfItems, isActive }) => (
                <Tab icon={icon} title={titleText} number={numberOfItems} active={isActive} />
            ))}

        </div>
    );
}

export default App;
