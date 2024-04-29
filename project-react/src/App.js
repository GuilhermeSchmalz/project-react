import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  BrowserRouter as Router, Routes, Route,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Root from './Routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  
]);


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path = '/' element = { <Home /> } />
        <Route exact path = 'about' element = {<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
