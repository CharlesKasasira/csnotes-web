import { Navigate, Outlet } from 'react-router-dom'
import { Loader, Menu, Navbar } from '../components'
import { auth } from '../helpers/firebaseConfig'
import { useAuthState } from 'react-firebase-hooks/auth'

const PrivateRoute = () => {

    const [ person, loading, error ] = useAuthState(auth)

    return person ? (
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
    ) : 
    loading ?
    <Loader />
    : <Navigate to='/' />
}

export default PrivateRoute