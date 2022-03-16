import { Navigate, Outlet } from 'react-router-dom'
import { useAuthValue } from '../auth/AuthContext'
import { useAuth } from 'firebase/auth'
import { Menu, Navbar } from '../components'

const PrivateRoute = () => {
    const auth = useAuthValue();
    console.log(auth)

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? (
        <div className="container">
            <div className="row">

                <div className="col-3">
                    <Menu />
                </div>
                <div className="col-9">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
    ) : <Navigate to="/" />;
}

export default PrivateRoute