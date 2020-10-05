import React from "react";

const Shop = (props) => {
	const productCards = props.products.map((product) => (
		<Card
			key={product.name}
			incrementQuantity={props.incrementQuantity}
			alterQuantity={props.alterQuantity}
			product={product}
		/>
	));
	return (
		<div className="shop">
			<div className="products">{productCards}</div>
			<Cart products={props.products} />
		</div>
	);
};

const Card = (props) => {
	const handleChange = (e) => {
		props.alterQuantity(e.target.name, Number(e.target.value));
	};

	return (
		<div className="card">
			<p className="card-title">{props.product.name}</p>
			<img className="card-image" src={props.product.url} alt="money" />
			<p className="card-cost">Sale! ${props.product.cost}!</p>
			<div className="quantity">
				<button
					onClick={() => {
						props.incrementQuantity(props.product.name, "-");
					}}
				>
					-
				</button>
				<input
					name={props.product.name}
					type="text"
					min="0"
                    max="9"
                    className="input-quantity"
					value={props.product.quantity}
					onChange={handleChange}
					step="1"
				/>
				<button
					onClick={() => {
						props.incrementQuantity(props.product.name, "+");
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

const Cart = (props) => {

	const moneySum = (props) => {
		const arrayOfTotals = props.products.map((product) => {
			return product.cost * product.quantity;
		});
		return arrayOfTotals.reduce((a, b) => a + b);
	};

	const totalMoney = moneySum(props);

	const totalEntries = props.products.map((product) => {
		if (product.quantity > 0) {
			return (
				<div className="cart-entry" key={product.name}>
					<p className="cart-title">{product.name} </p>
					<div className="cart-numbers">
						<div>{`${product.quantity} * $${product.cost}.00`}</div>
						<div value={product.cost * product.quantity}>
							${product.quantity * product.cost}.00
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	});

	const innerCart = (
		<div className="inner-cart">
			<div className="entries-list">{totalEntries}</div>
			<div className="total-div">
				<div className="cart-entry">
					<p className="cart-title">Total:</p>
					<div className="cart-numbers">${totalMoney}.00</div>
				</div>
				<button className="checkout">Fake Checkout</button>
			</div>
		</div>
    );
    
	return <div className="cart">{totalMoney > 0? innerCart : null}</div>;
};

export default Shop;
