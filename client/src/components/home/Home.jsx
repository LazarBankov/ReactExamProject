
import { useLatestProducts } from "@/api/product"
import Product from "../catalog/catalog-product/Product"

export default function Home() {

const { latestProducts = [] } = useLatestProducts()

    return (
        <div className="p-6 bg-[#f173e7] border-0">
        <h1 className="text-3xl font-bold mb-6 text-center">Digital Shop</h1>
        <div className="flex justify-center gap-18 flex-wrap ">
        {latestProducts.length > 0 ? (
            latestProducts.map((product) => <Product key={product._id} product={product} />)
          ) : (
            <p className="text-center text-gray-700">No products available.</p>
          )}
        </div>
      </div>
    )
}