import React from "react";

const Shop = (props) => {
	const productCards = props.products.map((product) => (
		<Card key={product.name} alterQuantity={props.alterQuantity} product={product} />
	));
	return (
		<div className="shop">
			<div className="products">{productCards}</div>
			<Cart products={props.products} />
		</div>
	);
};

const Card = (props) => {
	return (
		<div className="card">
			<p>{props.product.name}</p>
			<img className="product" src={props.product.url} alt="money" />
			<p>Sale: ${props.product.cost}</p>
			<div className="quantity">
				<button
					onClick={() => {
						props.alterQuantity(props.product.name, "-");
					}}
				>
					-
				</button>
				<p>{props.product.quantity}</p>
				<button
					onClick={() => {
						props.alterQuantity(props.product.name, "+");
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
    
	const filler = props.products.map((product) => {
        if (product.quantity > 0) {
            return (
                <div key={product.name}>
                  <p>{product.name} </p>
                  <div>{`${product.quantity} * $${product.cost}.00`}</div>
                  <div value={product.cost * product.quantity}>{product.quantity * product.cost}.00</div>
                </div>
            )
        } else {
            return null;
        }
		
    });

	return (
		<div className="cart">
			<div>{filler}</div>
			Total<button>Confirm purchase</button>
		</div>
	);
};

export default Shop;
