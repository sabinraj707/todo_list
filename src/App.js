import React from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Signup/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
