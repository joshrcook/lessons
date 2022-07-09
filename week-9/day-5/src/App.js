
import './App.css';
import Update from './Update';

function App() {
  return (
    <div className="wrapper">
      <Update time="29" image="/assets/images/image-1.jpg">
        <strong>Louisa Law</strong> completed the standup
      </Update>
      <Update image="/assets/images/image-3.jpg" time="50">
        <strong>Charlotte Diaz</strong> completed the standup
      </Update>
      <Update time="33" image="/assets/images/image-2.jpg" className="is-disabled">
        <strong>Emily Carter</strong> has not completed the standup
      </Update>
    </div>
  );
}

export default App;
