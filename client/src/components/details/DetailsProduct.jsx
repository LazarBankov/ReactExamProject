import {
  useProductDetails,
  useAddToCart,
  useDeleteProduct,
} from "@/api/product";
import Comments from "./comments/Comments";
import useAuthHook from "@/hooks/useAuthHook";
import { Link, useNavigate } from "react-router";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

export default function DetailsProduct() {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { product } = useProductDetails(productId);
  const { deleteProduct } = useDeleteProduct(productId);
  const {
    name,
    description,
    price,
    imageUrl,
    comments = [],
    customers = [],
  } = product || {};

  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(product?.comments || []);

  const { isAuthenticated, userId, isAdmin, username } = useAuthHook();

  const addToCart = useAddToCart();

  const isCustomer = customers && customers.includes(userId);

  const addToCartHandler = async () => {
    if (isAuthenticated) {
      await addToCart(productId, userId, product);
      navigate(`/catalog`);
    } else {
      alert("Please log in to add items to your cart.");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) {
      alert("Comment cannot be empty.");
      return;
    }
    const commentData = {
      productId,
      username,
      userId,
      comment: newComment,
    };
    const updatedProduct = {
      ...product,
      comments: [...allComments, commentData],
    };

    await fetch(`https://reactexamproject.onrender.com/jsonstore/komplekti/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });
  
    setAllComments([...allComments, commentData]);
    setNewComment("");
    
  }
  const deleteClickHandler = async () => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete the product ${name}? This action cannot be undone.`
    );
    if (!confirmDelete) {
      return;
    }

    deleteProduct(productId);

    alert(`Product ${name} deleted successfully.`);
    navigate("/catalog");
  };

  useEffect(() => {
    if (product?.comments) {
      setAllComments(product.comments);
    }
  }, [product]);

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
              <p className="text-gray-900 font-semibold mt-2">{price}лв.</p>
              {isAuthenticated && !isCustomer && !isAdmin && (
                <div className="flex justify-center gap-4 p-4">
                  <button
                    onClick={addToCartHandler}
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
                  >
                    Добави в количката
                  </button>
                </div>
              )}
              {isAdmin && (
                <div className="flex justify-center gap-4 p-4">
                  <button
                    onClick={deleteClickHandler}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Изтрий продукта
                  </button>
                  <Link
                    to={`/edit/${productId}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Редактирай продукта
                  </Link>
                </div>
              )}
              <h3 className="text-lg font-semibold mt-4">Коментари</h3>
              {comments.length > 0 ? (
                <div className="w-full mt-4 mb-4 border-t border-gray-300 py-2 space-y-4">
                  {allComments.map((comment) => (
                    <Comments key={comment._id} comments={comment} />
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-700">
                    Няма налични коментари                </p>
              )}
              {isCustomer && !isAdmin && (
                <form className="w-full mt-4" onSubmit={handleCommentSubmit}>
                  <textarea
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="4"
                    placeholder="Write your comment here..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200 mt-2"
                  >
                    Добави коментар
                  </button>
                </form>
              )}
            </div>
          ) : (
            <p className="text-center text-gray-700">
              Зареждане на продукта... Моля, изчакайте.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
