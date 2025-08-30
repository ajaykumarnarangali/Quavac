import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = () => {
    const { currentUser, loading } = useUser(); 

    if (loading) return <div>Loading...</div>; 

    return currentUser ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
