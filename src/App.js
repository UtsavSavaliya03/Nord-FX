import './App.css';
import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Main from './Components/Main/Main.jsx'

function App() {
  return (
    <div className="App">
      <Sidebar>
        <Main />
      </Sidebar>
    </div>
  );
}

export default App;
