import './App.css';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import Home from './pages/home/Home.jsx';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './hooks/useAuthContext.js';

export default function App() {
    const { authUser } = useAuthContext();
    return (
        <div className="h-screen flex items-center justify-center">
            <Routes>
                <Route
                    path="/"
                    element={
                        authUser ? <Home /> : <Navigate to="/login"></Navigate>
                    }
                />
                <Route
                    path="/login"
                    element={
                        authUser ? <Navigate to="/"></Navigate> : <Login />
                    }
                />
                <Route
                    path="/signup"
                    element={
                        authUser ? <Navigate to="/"></Navigate> : <Signup />
                    }
                />
            </Routes>
            <Toaster />
        </div>
    );
}
