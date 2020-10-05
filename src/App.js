import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import "./styles/App.scss";
import Shop from "./components/Shop";

const App = () => {
	const initialProducts = [
		{
			name: "Five",
			url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/5_front.jpg",
			cost: 6,
			quantity: 0,
		},
		{
			name: "Ten",
			url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/10_front.jpg",
			cost: 11,
			quantity: 0,
		},
		{
			name: "Twenty",
			url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/20_front.jpg",
			cost: 22,
			quantity: 0,
		},
		{
			name: "Fifty",
			url: "https://www.bankofcanada.ca/wp-content/uploads/2015/09/50_front.jpg",
			cost: 55,
			quantity: 0,
		},
	];

	const [products, setProducts] = useState(initialProducts);

	const alterQuantity = (name, amount) => {
		setProducts(
			products.map((product) => {
				if (product.name === name) {
					product.quantity = amount;
				}
				return product;
			})
		);
	};

	const incrementQuantity = (name, direction) => {
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

	const totalQuantity = products.reduce((a, b) => ({ quantity: a.quantity + b.quantity }));

	return (
		<Router>
			<div className="App">
				<nav className="navbar">
					<NavLink className="nav-link home-link" to="/" exact={true} activeClassName="active-link">
						Money Depot
					</NavLink>
					<NavLink className="nav-link" to="/shop" activeClassName="active-link">
						Shop, {Number(totalQuantity.quantity)}
					</NavLink>
				</nav>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/shop"
						render={(props) => (
							<Shop
								{...props}
								products={products}
								incrementQuantity={incrementQuantity}
								alterQuantity={alterQuantity}
							/>
						)}
					/>
				</Switch>
			</div>
		</Router>
	);
};

const Home = () => {
	return (
		<div className="content">
			<div className="text-squeeze">
			<p>
				Thanks for visiting! This site was created by{" "}
				<a target="_blank" rel="noopener noreferrer" href="https://github.com/Ideopunk/">
					Conor Barnes
				</a>{" "}
				to practice React and routing. Please proceed to the <Link to="/shop">shop</Link> to buy your money.
			</p>
			</div>
		</div>
	);
};

export default App;
