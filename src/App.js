import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import OrderPage from './pages/OrderPage/OrderPage'

function App() {
    return (
        <BrowserRouter basename="/carsharing">
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="order" element={<OrderPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
