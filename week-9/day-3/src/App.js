import Tab from './Tab';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="tabs-wrapper">
        <Tab number="22" iconClass="fa-film" className="is-active">Videos</Tab>
        <Tab number="36" iconClass="fa-image">Photos</Tab>
        <Tab number="22" iconClass="fa-users">Users</Tab>
      </div>
    </div>
  );
}

export default App;
