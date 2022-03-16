import { Navigate, Outlet } from 'react-router-dom'
import { useAuthValue } from '../auth/AuthContext'
import { useAuth } from 'firebase/auth'

const PrivateRoute = () => {
    const auth = useAuthValue();
    console.log(auth)

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute