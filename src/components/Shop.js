import React from "react";



const Shop = (props) => {
    const productCards = props.products.map(product => <Card key={product.name} alterQuantity = {props.alterQuantity} product={product}/>)
	return (
		<div className="shop">
			<div className="products">{productCards}</div>
			<div className="total">Total</div>
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
                <button onClick={() => {props.alterQuantity(props.product.name, '-')}}>-</button>
                <p>{props.product.quantity}</p>
                <button onClick={() => {props.alterQuantity(props.product.name, '+')}}>+</button>
            </div>
		</div>
	);
};
export default Shop;
