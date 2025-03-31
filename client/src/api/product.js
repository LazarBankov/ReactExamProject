import  request  from "../utils/request";
import { useState, useEffect } from 'react';


const url = 'http://localhost:3030/jsonstore/komplekti';

export const useAllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        request.get(url)
            .then((data) => setProducts(Object.values(data)));

}, []);
return {products};
}