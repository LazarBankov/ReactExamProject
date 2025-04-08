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
    request.get(`${url}/${productId - 1}`).then((data) => setProduct(data));
  }, [productId]);
  return { product };
};

export const useAddToCart = () => {
    const { request } = useAuthHook();
    return async (productId, userId) => {
        try {
            const product = await request.get(`${url}/${productId - 1}`);
            console.log("Product details:", product);
            
            const updatedCustomers = product.customers ? [...product.customers] : [];
            
            if (!updatedCustomers.includes(userId)) { 
                updatedCustomers.push(userId);
            }
            const response = await request.put(`${url}/${productId - 1}`, { 
                ...product, 
                customers: updatedCustomers, 
            });

            return response;
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };
};
