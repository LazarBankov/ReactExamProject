import useAuthHook from "@/hooks/useAuthHook";
import { Navigate, Outlet } from "react-router";

export default function AdminGuard() {
    const { isAdmin } = useAuthHook();

    if (!isAdmin) {
        return <Navigate to="/" />
    }

    return <Outlet />;
}
