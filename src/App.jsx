import { useState, useEffect } from 'react'
import { Login } from './components/user/login/login';
import { Dashboard } from './components/dashboard/dashboard';

import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'

const baseURL = "https://shop-beer-back.onrender.com/api/v1/config/configuration";

function App() {
  const [count, setCount] = useState(0);
  const [config, setConfig] = useState(null);



  useEffect(() => {
    getConfig();
    
    
  }, []);

  async function getConfig() {
    const config = await getConfigSessionStorage();
    if (config === null) {
      axios.get(baseURL).then((response) => {
        setConfig(response.data);
        var resp = response.data;
        setConfigSessionStorage(JSON.stringify(resp.data[0]));
      });
    }
  }

  function setConfigSessionStorage(config) {
    window.sessionStorage.setItem('config', config);
  }

  function getConfigSessionStorage() {
    var config = window.sessionStorage.getItem('config');
    return config;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
