import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './styles/App.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
        </nav>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About} />
            <Route exact path="/shop" component={Shop} />
          </Switch>
        </div>
      </div>  
    </Router>
  );
}

const Home = () => {
  return (<div>home</div>)
}

const About = () => {
  return (<div>About</div>)
}

const Shop = () => {
  return (<div>Shop</div>)
}

export default App;
