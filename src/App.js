import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./styles/App.scss";
import Shop from "./components/Shop";

const App = () => {
	const initialProducts = [
    {
      name: "5",
      url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/5_front.jpg",
      cost: 6,
      quantity: 0,
    },
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

	const [products, setProducts] = useState(initialProducts);

	const alterQuantity = (name, direction) => {
		console.log(name, direction);
		console.log(products);
		setProducts(
			products.map((product) => {
				console.log(product);
				if (product.name === name) {
					if (direction === "+") {
						if (product.quantity < 10) {
							product.quantity++;
						}
					} else {
						if (product.quantity > 0) {
							product.quantity--;
						}
					}
				}
				return product;
			})
		);
	};

  const totalQuantity = products.reduce((a, b) => ({quantity: a.quantity + b.quantity}))
  console.log(totalQuantity.quantity)

	return (
		<Router>
			<div className="App">
				<nav className="navbar">
					<NavLink className="nav-link" to="/" exact={true} activeClassName="active-link">
						Home
					</NavLink>
					<NavLink className="nav-link" to="/about" activeClassName="active-link">
						About
					</NavLink>
					<NavLink className="nav-link" to="/shop" activeClassName="active-link">
						Shop, {totalQuantity.quantity}
					</NavLink>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route
						exact
						path="/shop"
						render={(props) => (
							<Shop {...props} products={products} alterQuantity={alterQuantity} />
						)}
					/>
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
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/Ideopunk/">
					Conor Barnes
				</a>{" "}
				as a way to practice routing with React.
			</p>
		</div>
	);
};

export default App;
