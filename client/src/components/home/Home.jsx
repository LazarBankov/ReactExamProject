
import { useLatestProducts } from "@/api/product"
import Product from "../catalog/catalog-product/Product"

export default function Home() {

const { latestProducts = [] } = useLatestProducts()

    return (
        <div className="p-6 bg-[#f5c7f1] border-0">
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