import { Navigate, Outlet } from 'react-router';
import { PATH } from './paths';

export function ProtectedRoute() {
    const isAuth = false;
    return isAuth ? <Outlet /> : <Navigate to={PATH.AUTH} />;
}