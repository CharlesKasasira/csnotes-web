import { Login, SignUp, NotFound, ForgotPassword, Dashboard, Profile, PastPapers } from "../pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState, useEffect } from 'react'
import { AuthProvider } from '../auth/AuthContext'
import { auth } from "../helpers/firebaseConfig";
import { onAuthStateChanged } from 'firebase/auth'

import PrivateRoute from "./PrivateRoute";

function App() {

  const [ currentUser, setCurrentUser ] = useState(null)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      <AuthProvider value={currentUser}>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/sign-up" exact element={<SignUp />} />
          <Route path="/forgot-password" exact element={<ForgotPassword />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/profile" exact element={<Profile />} />
              <Route path="/past-papers" exact element={<PastPapers />} />
            </Route>
          
            
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
