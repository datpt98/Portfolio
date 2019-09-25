import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SideBar from './components/SideBar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <SideBar/>
        <div className="main">      
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home} />
          <Route path="/projects" component={Projects}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
