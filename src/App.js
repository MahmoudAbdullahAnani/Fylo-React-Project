import './App.css';
import { Routes, Route } from "react-router-dom";
import Features from './pages/Features/Features';
import Home from './pages/Home/Home';
import Team from './pages/Team/Team';
import SignIn from './pages/Sign in/SignIn';
import { useEffect, useState } from 'react';
import Lodeing from './layout/Loding/Loding';
import CopyRight from './layout/Footer/CopyRight';
import NavbarComponent from './layout/Nav Bar/Navbar';

function App() {
  const [loder, setLoder] = useState(false)
  useEffect(()=>{
    setLoder(true)
    setTimeout(()=>{
      setLoder(false)
    },1000)
  },[])
  return (
    <>
      {loder ? (
        <Lodeing />
      ) : (
          <>
            <NavbarComponent/>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route
              path="/features"
              element={
                <>
                  <Features />
                  <CopyRight />
                </>
              }
            />
            <Route
              path="/tems"
              element={
                <>
                  <Team />
                  <CopyRight />
                </>
              }
            />
            <Route
              path="/sign-in"
              element={
                <>
                  <SignIn />
                  <CopyRight />
                </>
              }
            />
            </Routes>
            <CopyRight/>
        </>
      )}
    </>
  );
}

export default App;
