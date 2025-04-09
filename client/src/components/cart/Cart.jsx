import { useAllProducts, useUpdateProduct } from "@/api/product";
import useAuthHook from "@/hooks/useAuthHook";
import { useNavigate } from "react-router";
import "./Cart.css";

export default function Cart() {
  const { userId } = useAuthHook();
  const { products } = useAllProducts();
  const navigate = useNavigate();
  const updateProduct = useUpdateProduct();

  const userCart = products?.filter(
    (product) => Array.isArray(product.customers) && product.customers.includes(userId)
  ) || [];

  const total = userCart.reduce((sum, product) => sum + Number(product.price), 0);

  const removeFromCart = async (productId) => {
    const product = products.find(p => p._id === productId);
    if (!product) return;
  
    const updatedCustomers = (Array.isArray(product.customers) ? product.customers : []).filter(
      (id) => id !== userId
    );
  
    const updatedProduct = {
      ...product,
      customers: updatedCustomers,
    };
  
    await updateProduct(productId, updatedProduct);

    navigate("/catalog");
  };
  

  return (
    <div className="cart-container">
      <div className="products-container">
        {userCart.length > 0 ? (
          userCart.map((product) => (
            <div key={product._id} className="product-item">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>${Number(product.price).toFixed(2)}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(product._id)}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No items in your cart.</p>
        )}
      </div>

      <div className="summary-container">
        <h2>Summary</h2>
        <p>Total: ${total.toFixed(2)}</p>
        <button className="checkout-button" disabled={userCart.length === 0}>
          Checkout
        </button>
      </div>
    </div>
  );
}
