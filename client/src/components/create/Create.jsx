import { useCreateProduct } from "@/api/product";
import { useNavigate } from "react-router";

export default function Create() {
  const navigate = useNavigate();
  const createProduct  = useCreateProduct();

  const submitAction = async (formData) => {
    const productData = Object.fromEntries(formData);
    const finalProductData = {
      ...productData,
      _id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      customers: [],
      comments: [],
      type: productData.type || "default",
      price: Number(productData.price),
      imageUrl: productData.imageUrl || "https://via.placeholder.com/150",
    };
    await createProduct(finalProductData);

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
              Име на продукта
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
              Описание на продукта
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
              Цена на продукта
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
              Адрес на изображение
            </label>
            <input
              type="string"
              name="imageUrl"
              id="imageUrl"
              className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="type"
            >
              Тип на продукта
            </label>
            <input
              type="text"
              name="type"
              id="type"
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200"
          >
            Създай продукт
          </button>
        </form>
      </div>
    </div>
  );
}
