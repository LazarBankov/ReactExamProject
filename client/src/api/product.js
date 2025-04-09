import useAuthHook from "@/hooks/useAuthHook";
import request from "../utils/request";
import { useState, useEffect } from "react";

const url = "http://localhost:3030/jsonstore/komplekti";

export const useAllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    request.get(url).then((data) => setProducts(Object.values(data)));
  }, []);
  return { products };
};

export function useUpdateProduct() {
  const { request } = useAuthHook();
  const updateProduct = async (productId, productData) => {
    try {
      const response = await request.put(`${url}/${productId}`, {
        ...productData,
        _id: productId, // include ID to match existing record
      });
      return response;
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };
  return updateProduct;
}


export const useLatestProducts = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    request
      .get(url)
      .then((data) => setLatestProducts(Object.values(data).slice(-3)));
  }, []);
  return { latestProducts };
};

export const useProductDetails = (productId) => {
  const [product, setProduct] = useState();

  useEffect(() => {
    request.get(`${url}/${productId}`).then((data) => setProduct(data));
  }, [productId]);
  return { product };
};

export const useDeleteProduct = () => {
  const { request } = useAuthHook();
  const deleteProduct = (productId) => {
    request.delete(`${url}/${productId}`);
  }
  return { deleteProduct };
}

export const useEditProduct = () => {
  const { request } = useAuthHook();
  const editProduct = async (productId, productData) => {
    
    try {
      const response = await request.put(`${url}/${productId}`, {...productData, _id: productId});
      return response;
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };
  return editProduct;
}

export const useCreateProduct = () => {
  const { request } = useAuthHook();
  return async (productData) => {
    try {
      const response = await request.post(url, productData);
      return response;
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };
};

export const useAddToCart = () => {
  const { request } = useAuthHook();
  return async (productId, userId) => {
    try {
      const product = await request.get(`${url}/${productId}`);

      const updatedCustomers = product.customers ? [...product.customers] : [];

      if (!updatedCustomers.includes(userId)) {
        updatedCustomers.push(userId);
      }
      const response = await request.put(`${url}/${productId}`, {
        ...product,
        customers: updatedCustomers,
      });
      return response;
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
};
