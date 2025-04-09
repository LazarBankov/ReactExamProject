import { useCreateProduct } from "@/api/product";
import { useNavigate } from "react-router";

export default function Create() {
  const navigate = useNavigate();
  const createProduct  = useCreateProduct();

  const submitAction = async (formData) => {
    const productData = Object.fromEntries(formData);

    await createProduct(productData);

    navigate("/catalog");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5c7f1] border-0">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
        <form className="space-y-4" action={submitAction}>
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
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
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
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
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
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
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
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
