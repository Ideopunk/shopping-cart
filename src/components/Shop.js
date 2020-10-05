import React from "react";



const Shop = (props) => {
    const productCards = props.products.map(product => <Card product={product}/>)
	return (
		<div className="content">
			Shop
			{productCards}
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
                <button>-</button>
                <p>{props.product.quantity}</p>
                <button>+</button>
            </div>
		</div>
	);
};
export default Shop;
