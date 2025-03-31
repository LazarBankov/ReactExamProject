import { useAllProducts } from "@/api/product";
import Product from "./catalog-product/Product";

export default function Catalog() {
  const { products = [] }  = useAllProducts();

  return (
    <div className="p-6 bg-[#f5c7f1] border-0 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="bg-[#f5c7f1] p-4 rounded-lg mb-6 flex flex-wrap gap-4 justify-center border-0">
        {products.length > 0 ? (
            products.map((product) => <Product key={product._id} product={product} />)
          ) : (
            <p className="text-center text-gray-700">No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
