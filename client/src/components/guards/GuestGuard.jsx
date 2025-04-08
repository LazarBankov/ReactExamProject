import useAuthHook from "@/hooks/useAuthHook";
import { Navigate, Outlet } from "react-router";


export default function GuestGuard() {
    const { isAuthenticated } = useAuthHook();

    if (isAuthenticated) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}
