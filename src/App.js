import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'

function App() {
    return (
        <BrowserRouter basename='/carsharing'>
            <div className='App'>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
