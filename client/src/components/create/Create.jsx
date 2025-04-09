import { useCreateProduct } from "@/api/product";
import { useNavigate } from "react-router";

export default function Create() {
  const navigate = useNavigate();
  const { create: createProduct } = useCreateProduct();

  const submitAction = async (formData) => {
    const productData = Object.fromEntries(formData);

    await createProduct(productData);

    navigate("/catalog");
  };

  return (
    <div className="p-6 bg-[#f5c7f1] border-0 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
        <form action={submitAction}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="name"
            >
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="price"
            >
              Price
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="imageUrl"
            >
              Image URL
            </label>
            <input
              type="url"
              name="imageUrl"
              id="imageUrl"
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
