import useAuthHook from "@/hooks/useAuthHook";
import { Navigate, Outlet } from "react-router";

export default function AuthGuard() {
    const { isAuthenticated } = useAuthHook();

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return <Outlet />;
}
