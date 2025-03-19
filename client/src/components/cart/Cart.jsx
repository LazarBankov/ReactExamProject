import React from 'react';
import './Cart.css';

export default function Cart() {
    const products = [
        {
            name: 'Product 1',
            price: 10.00,
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 2',
            price: 20.00,
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 3',
            price: 30.00,
            image: 'https://via.placeholder.com/150'
        }
    ];
    const total = products.reduce((acc, product) => acc + product.price, 0);
    return (
        <div className="cart-container">
            <div className="products-container">
                {products.map((product, index) => (
                    <div key={index} className="product-item">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-details">
                            <h3>{product.name}</h3>
                            <p>${product.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="summary-container">
                <h2>Summary</h2>
                <p>Total: ${total.toFixed(2)}</p>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
};