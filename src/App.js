import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import useTechnologies from './hooks/useTechnologies.js';

import Navigation from './components/Navigation.js';
import Statistics from './components/Statistics.jsx';
import ProtectedRoute from './components/ProtectedRoute';

import TechnologiesPage from './pages/TechnologiesPage.js';
import AddTechnologyPage from "./pages/AddTechnologyPage.js";
import HomePage from './pages/HomePage.js'
import SettingsPage from "./pages/SettingsPage.js";
import LoginPage from './pages/LoginPage.jsx'

import './App.css';

function App() {
  const { technologies, updateStatus, addTechnology } = useTechnologies();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const user = localStorage.getItem('username') || '';
    setIsLoggedIn(loggedIn);
    setUsername(user);
  }, []);

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Navigation isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/technologies' element={<TechnologiesPage technologies={technologies} updateStatus={updateStatus} />} />
           <Route path='/add-technology' element={<AddTechnologyPage onAddTechnology={addTechnology} />} />
          <Route path='/stats' element={<Statistics technologies={technologies}/>} />
          <Route path='/settings' element={<ProtectedRoute isLoggedIn={isLoggedIn}><SettingsPage/></ProtectedRoute>}/>
          <Route path='/login' element={<LoginPage onLogin={handleLogin}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;