import { Link } from "react-router";
export default function Product({ product }) {
    
    return (
        <div className="shadow-lg rounded-2xl overflow-hidden hover:bg-white transition duration-200">
        <img
            src={product.imageUrl}
            alt="Article"
            className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition duration-200"
        />
        <h3 className="text-1xl font-semibold text-center mb-8">
            {product.name}
        </h3>
        <div className="flex justify-center gap-8 flex-wrap p-4">
            <Link to={`/catalog/${product._id}`}>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                Details
            </button>
            </Link>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
            Add to Cart
            </button>
        </div>
        </div>
    );
}