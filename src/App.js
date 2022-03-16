import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import OrderPage from './pages/OrderPage/OrderPage';
import UserLocation from './pages/OrderPage/UserLocation/UserLocation';
import Model from './pages/OrderPage/Model/Model';
import More from './pages/OrderPage/More/More';
import Total from './pages/OrderPage/Total/Total';
import ConfirmedOrder from './pages/OrderPage/ConfirmedOrder/ConfirmedOrder';

function App() {
    return (
        <BrowserRouter basename="/carsharing">
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="order/" element={<OrderPage />}>
                        <Route path="location" element={<UserLocation />} />
                        <Route path="model" element={<Model />} />
                        <Route path="more" element={<More />} />
                        <Route path="total" element={<Total />} />
                        <Route path="*" element={<UserLocation />} />
                    </Route>
                    <Route path="/confirmed-order" element={<ConfirmedOrder />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
