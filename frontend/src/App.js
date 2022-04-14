// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import { Products } from "./components/Products";

import { Register } from "./components/Register"

import { Login } from "./components/Login"

import { Navbar } from "./components/Navbar"
import { Home } from './components/Home';

import { PrivateRoute } from './components/PrivateRoute'
// import { AuthContext } from './contexts/AuthContext';
// import { useContext } from "react"

function App() {

  // const { isAuth } = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>

        <Route path="/get-restaurants" element={<PrivateRoute><Products /></ PrivateRoute>} />

      </Routes>
    </div>
  );
}

export default App;
