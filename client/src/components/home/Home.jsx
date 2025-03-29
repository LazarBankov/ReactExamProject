

const products = [
    {
      id: 1,
      name: "Elegant Wedding Set",
      price: "$199",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Rustic Wedding Decor",
      price: "$149",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Modern Home Decoration",
      price: "$89",
      image: "https://via.placeholder.com/200",
    },
  ];

export default function Home() {


    return (
        <div className="p-6 bg-[#f173e7] border-0">
        <h1 className="text-3xl font-bold mb-6 text-center">Digital Shop</h1>
        <div className="flex justify-center gap-18 flex-wrap ">
          {products.map((product) => (
            <div key={product.id} className="shadow-lg rounded-2xl overflow-hidden hover:bg-white transition duration-200">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col items-center justify-center">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
              <div className="flex justify-center gap-18 flex-wrap p-4">
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                  Add to Cart
                </button>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                  Details
                </button>
                </div>
            </div>
          ))}
        </div>
      </div>
    )
}