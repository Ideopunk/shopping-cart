import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";
import Shop from "./components/Shop";


const App = () => {
  const products = [
    {
      name: "10",
      url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/10_front.jpg",
      cost: 11,
      quantity: 0,
    },
    {
      name: "20",
      url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/20_front.jpg",
      cost: 22,
      quantity: 0,
    },
    {
      name: "50",
      url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/50_front.jpg",
      cost: 55,
      quantity: 0,
    },
  ];

  const [quantity, setQuantity] = useState(products)

  return (
		<Router>
			<div className="App">
				<nav className="navbar">
					<Link className="nav-link" to="/">Home</Link>
					<Link className="nav-link" to="/about">About</Link>
					<Link className="nav-link" to="/shop">Shop</Link>
				</nav>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/shop" component={() => <Shop products={products}/>} />
					</Switch>
			</div>
		</Router>
	);
};

const Home = () => {
	return <div>home</div>;
};

const About = () => {
	return (
		<div className="content">
			<h2>About</h2>
			<p>
				Thanks for visiting! This site was created by{" "}
				<a target="_blank" rel='noreferrer' href="https://github.com/Ideopunk/">Conor Barnes</a> as a way to practice routing
				with React.
			</p>
		</div>
	);
};



export default App;
