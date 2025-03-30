import useLocalStorageItem from "@/hooks/useLocalStorageItem";
import { UserContext } from "@/contexts/Context";

export default function UserProvider({
    children,
}) {
    const [authData, setAuthData] = useLocalStorageItem('auth', {});
    
    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    const userLogoutHandler = () => {
        setAuthData({});
    };

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler, userLogoutHandler }}>
            {children}
        </UserContext.Provider>
    );
}
