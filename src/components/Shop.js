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
		props.alterQuantity(e.target.name, e.target.value);
	};

	return (
		<div className="card">
			<p>{props.product.name}</p>
			<img className="product" src={props.product.url} alt="money" />
			<p>Sale: ${props.product.cost}</p>
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
					type="number"
					min="0"
					max="10"
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
	console.log(props.products);

    const moneySum = (props) => {
        const arrayOfTotals = props.products.map(product => {
            return product.cost * product.quantity
        })
        return arrayOfTotals.reduce((a, b) => a + b)
    }

    const totalMoney = moneySum(props)
    console.log(totalMoney)

	const totalEntries = props.products.map((product) => {
		if (product.quantity > 0) {
			return (
				<div className="cart-entry" key={product.name}>
					<p>{product.name} </p>
					<div>{`${product.quantity} * $${product.cost}.00`}</div>
					<div value={product.cost * product.quantity}>
						{product.quantity * product.cost}.00
					</div>
				</div>
			);
		} else {
			return null;
		}
	});

	return (
		<div className="cart">
			<div className="inner-cart">
				<div>{totalEntries}</div>
				<div className="total">
					<h3>Total: ${totalMoney}.00</h3>
					<button>Checkout</button>
				</div>
			</div>
		</div>
	);
};

export default Shop;
