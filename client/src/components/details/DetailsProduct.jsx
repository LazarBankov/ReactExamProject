import { useProductDetails, useAddToCart } from "@/api/product";
import Comments from "./comments/Comments";
import useAuthHook from "@/hooks/useAuthHook";

import { useParams } from "react-router";

export default function DetailsProduct() {
  const { productId } = useParams();
  const { product } = useProductDetails(productId);
  const { name, description, price, imageUrl, comments } = product || {};
  const { isAuthenticated, userId } = useAuthHook();
  const addToCart = useAddToCart();
  const addToCartHandler = async () => {
    if (isAuthenticated) {
      await addToCart(productId, userId, product);
    } else {
      alert("Please log in to add items to your cart.");
    }
  };
  return (
    <div className="p-6 bg-[#f5c7f1] border-0 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="bg-[#f5c7f1] p-4 rounded-lg mb-6 flex flex-wrap gap-4 justify-center border-0">
          {product ? (
            <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-sm">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-4">{name}</h2>
              <p className="text-gray-700 mt-2">{description}</p>
              <p className="text-gray-900 font-semibold mt-2">${price}</p>
              {isAuthenticated && (
                <div className="flex justify-center gap-4 p-4">
                  <button
                    onClick={addToCartHandler}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                  >
                    Add to Cart
                  </button>
                </div>
              )}
              <h3 className="text-lg font-semibold mt-4">Comments</h3>
              {comments.length > 0 ? (
                <div className="w-full mt-4 mb-4 border-t border-gray-300 py-2 space-y-4">
                  {comments.map((comment) => (
                    <Comments key={comment._id} comments={comment} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-700">
                  No comments available.
                </p>
              )}
              {isAuthenticated && (
                <form className="w-full mt-4">
                  <textarea
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="4"
                    placeholder="Write your comment here..."
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200 mt-2"
                  >
                    Submit Comment
                  </button>
                </form>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-700">
              Loading product details...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
