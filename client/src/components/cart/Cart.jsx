import './Cart.css';

export default function Cart() {
    
    return (
        <div className="cart-container">
            <div className="products-container">
                
                    <div key={"#"} className="product-item">
                        <img src={"#"} alt={"#"} className="product-image" />
                        <div className="product-details">
                            <h3>bla</h3>
                            <p>$123</p>
                        </div>
                    </div>

            </div>
            <div className="summary-container">
                <h2>Summary</h2>
                <p>Total: $123</p>
                <button className="checkout-button">Checkout</button>
            </div>
        </div>
    );
};