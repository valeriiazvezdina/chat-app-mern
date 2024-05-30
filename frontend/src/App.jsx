import './App.css';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Home from './pages/home/Home.jsx';
import { Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <div className="h-screen flex items-center justify-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </div>
    );
}
