import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    // BEM  naming convention
    <div className="App">
        <h1>Whatsapp Clone</h1>
        <div className="app__body">
          <Sidebar/>
        </div>
    </div>
  );
}

export default App;
