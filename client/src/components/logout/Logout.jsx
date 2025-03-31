import { Navigate } from "react-router";
import { useLogout } from "@/api/auth";

export default function Logout() {
    const { isLoggedOut } = useLogout();

    return (
        <div>
            {isLoggedOut && <Navigate to="/" />}
        </div>
    );
}