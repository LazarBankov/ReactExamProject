import { Navigate, useNavigate, useParams } from "react-router";
import useAuthHook from "@/hooks/useAuthHook";
import { useProductDetails, useEditProduct } from "@/api/product";

export default function EditProduct() {

  const navigate = useNavigate();
  const { productId } = useParams();
  const { isAdmin } = useAuthHook();
  const { product } = useProductDetails(productId);
  const editProduct = useEditProduct(productId);

  const { name, description, price, type, imageUrl } = product || {};

  const formAction = async (formData) => {
    const productData = Object.fromEntries(formData);
    await editProduct(productId, productData);

    navigate(`/catalog/${productId}`);
  }
  if (!isAdmin) {
    return <Navigate to="/catalog" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5c7f1] border-0">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Редактирай</h2>
        <form id="edit" action={formAction} className="space-y-4" >
          <div className="flex flex-col">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="name"
            >
              Име на продукта
            </label>
            <input
              defaultValue={name}
              type="text"
              name="name"
              id="name"
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="description"
            >
              Описание на продукта
            </label>
            <textarea
              defaultValue={description}
              rows="4"
              name="description"
              id="description"
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="price"
            >
              Цена
            </label>
            <input
              defaultValue={price}
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
              htmlFor="type"
            >
              Тип на продукта
            </label>
            <input
            defaultValue={type}
              type="text"
              name="type"
              id="type"
              className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="text-sm font-medium text-gray-700 mb-2"
              htmlFor="imageUrl"
            >
              Адрес на изображение
            </label>
            <input
              defaultValue={imageUrl}
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
            Запази промените
          </button>
        </form>
      </div>
    </div>
  );
}