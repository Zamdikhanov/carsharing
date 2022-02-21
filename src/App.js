import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter basename="process.env.PUBLIC_URL" >
      <div className="App" >
        <MainPage />
      </div>
    </BrowserRouter>
  );
}

export default App;