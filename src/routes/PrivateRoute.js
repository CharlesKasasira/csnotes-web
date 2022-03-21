import { Navigate, Outlet } from 'react-router-dom'
import { Loader, Menu, Navbar } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth, db } from '../helpers/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const PrivateRoute = () => {

    const [ person, loading, error ] = useAuthState(auth)

    const [ meta, setMeta ] = useState([])

  useEffect(async () => {
    const userCollection = collection(db, 'usermeta')
    const data = await getDocs(userCollection)
    const dataArray = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))

    setMeta(dataArray.filter(user => user.uid === auth.currentUser.uid)[0])

  }, [])

    return person ? (
        <div className="top-container">
            <div className='side-bar'>
                <Menu />
            </div>
            <div className='content'>
                <Navbar meta={meta} />
                <Outlet context={{ meta }} />
            </div>
        </div>
    ) : 
    loading ?
    <Loader />
    : <Navigate to='/' />
}

export default PrivateRoute