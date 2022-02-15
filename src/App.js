import './App.scss';
import { HashRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <HashRouter >
      <div className="App" >
        <MainPage />
      </div>
    </HashRouter>
  );
}

export default App;