import { Link } from "react-router";
import useAuthHook from "@/hooks/useAuthHook";
export default function Product({ product }) {
    const { isAuthenticated } = useAuthHook();
    return (
        <div className="shadow-lg rounded-2xl overflow-hidden hover:bg-white transition duration-200 max-w-xs mx-auto">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition duration-200"
            />
            <h3 className="text-xl font-semibold text-center mb-4">
                {product.name}
            </h3>
            <p className="text-center text-gray-600 mb-4">{product.description}</p>
            <div className="flex justify-center gap-4 p-4">
                <Link to={`/catalog/${product._id}`}>
                    <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                        Details
                    </button>
                </Link>
                {isAuthenticated && (
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                    Add to Cart
                </button> )
                }
            </div>
        </div>
    );
}