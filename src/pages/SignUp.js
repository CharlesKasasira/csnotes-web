import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth, db } from '../helpers/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from '../hooks/useForm'
import '../styles/login.css'

import { addDoc, collection } from 'firebase/firestore'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function SignUp() {

    const [ error, setError ] = useState('')

    const metaCollection = collection(db, 'usermeta')

    const [ user, handleFieldChange ] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const validatePassword = () => {
        let isValid = true 
        if(user.password !== '' && user.confirmPassword !== ''){
            if(user.confirmPassword !== user.password){
                isValid = false
                setError("Password doesn't match")
            }
        }
        return isValid
    }

    const handleSignUp = (event) => {
        event.preventDefault()
        setError('')
        if(validatePassword()){
            createUserWithEmailAndPassword(auth, user.email, user.password)
                .then( async (cred) => {
                    await addDoc(metaCollection, {
                        uid: cred.user.uid,
                        firstName: user.firstName,
                        lastName: user.lastName
                    })
                })
                .then( () => {
                    toast.success('Successfully Registered', {position: "top-center"});
                    document.signForm.reset()
                })
                .catch(error => {
                    const errors = {
                        "auth/email-already-in-use": `Email is already in user.`,
                        "auth/weak-password": "Password should be atleast 8 characters",
                        "auth/network-request-failed": "something is wrong, check your network connection"
                      }
                    toast.error(`${errors[error.code]}`, {position: "top-center"})
                })
        }
    }
  return (
      <div className="auth-wrapper">
          <ToastContainer />
          <div className='group-j'>
            <h1>J</h1>
        </div>
            <form onSubmit={handleSignUp} name='signForm'>
        <h5>Sign Up</h5>
        <div className="login-inputs">
            <label>First Name</label>
            <input
                placeholder='Enter First Name'
                type='text'
                id='firstName'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div className="login-inputs">
            <label>Last Name</label>
            <input
                placeholder='Enter Last Name'
                type='text'
                id='lastName'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div className="login-inputs">
            <label>Email</label>
            <input
                placeholder='Enter E-mail'
                type='email'
                id='email'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div className="login-inputs1">
            <label>Create Password</label>
            <input
                placeholder='Enter password'
                type='password'
                id='password'
                onChange={handleFieldChange}
                required
                style={{
                    border: '1px solid red !important'
                }}
            />
        </div>
        <div className="login-inputs">
            <label>Confirm Password</label>
            <input
                placeholder='Enter password again'
                type='password'
                id='confirmPassword'
                onChange={handleFieldChange}
                required
            />
            <p>{error && error}</p>
        </div>
        <input
            type='submit'
            value='Register'
            className='btn btn-dark cta'
        />

        <div className='link-pages'>
            <p>Already have an account, 
                <span>
                    <Link to='/'>Login</Link>
                </span>
            </p>
        </div>
    </form>
      </div>
  )
}

export default SignUp