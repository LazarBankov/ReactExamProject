import { useEffect } from "react";
import requestTemplate from "../utils/request"
import { useRef } from "react";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
     const abortRef = useRef(new AbortController());

     const login = async (email, password) =>
        
        requestTemplate.post(
            `${baseUrl}/login`,
            { email, password },
            { signal: abortRef.current.signal }
        );
        
        useEffect(() => {
            const abortController = abortRef.current;
            
            return () => abortController.abort();
        }, []);
        
        return {
        login,
    }
};