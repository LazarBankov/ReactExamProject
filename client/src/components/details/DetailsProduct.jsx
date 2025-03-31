import { useProductDetails } from "@/api/product";

import { useParams } from "react-router";

export default function DetailsProduct() {
    
const { productId } = useParams();
const { product } = useProductDetails(productId);
const { name, description, price, imageUrl } = product || {};

    return (
        <div className="p-6 bg-[#f5c7f1] border-0 min-h-screen">
            <div className="container mx-auto px-6">
                <div className="bg-[#f5c7f1] p-4 rounded-lg mb-6 flex flex-wrap gap-4 justify-center border-0">
                    {product ? (
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-sm">
                            <img src={imageUrl} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
                            <h2 className="text-xl font-bold mt-4">{name}</h2>
                            <p className="text-gray-700 mt-2">{description}</p>
                            <p className="text-gray-900 font-semibold mt-2">${price}</p>
                        </div>
                    ) : (
                        <p className="text-center text-gray-700">Loading product details...</p>
                    )}
                </div>
            </div>
        </div>
    );

}