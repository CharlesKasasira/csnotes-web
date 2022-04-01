import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth, db } from '../helpers/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'


import { addDoc, collection } from 'firebase/firestore'

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks'
import { handleLogin } from '../helpers/utillities'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Formik, Form } from 'formik'
import { validationSchema } from '../helpers/utillities'
import { FirstName, LastName, Loader, PasswordTextField, EmailTextField, ConfirmPassword } from '../components'


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

    const validatePassword = (values) => {
        let isValid = true 
        if(values.password !== '' && values.confirmPassword !== ''){
            if(values.confirmPassword !== values.password){
                isValid = false
                setError("Password doesn't match")
            }
        }
        return isValid
    }

    const handleSignUp = (values) => {
        setError('')
        if(validatePassword(values)){
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then( async (cred) => {
                    await addDoc(metaCollection, {
                        uid: cred.values.uid,
                        firstName: values.firstName,
                        lastName: values.lastName
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

    console.log(user)
  return (
      <div className=" inline-flex justify-center items-center w-screen h-screen bg-gray-50">
          <Formik initialValues={user} validationSchema={validationSchema} onSubmit={(values) => handleSignUp(values)}>
            {({values, errors, touched, handleChange, handleBlur}) => {
                return (
                <Form className='w-8/12 p-10 sm:w-8/12 md:w-5/12 lg:w-4/12 bg-white shadow-md lg:shadow-lg flex justify-center items-center flex-col rounded-lg'>
                <h2 className='block text-center font-bold text-2xl'>Register</h2>
                <FirstName errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                <LastName errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                <EmailTextField errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                <PasswordTextField errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                <ConfirmPassword error={error} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
                
                <input
                type="submit"
                value="Register"
                className='w-full mb-2 inline-flex items-center justify-center bg-gray-800 text-white text-base font-medium px-4 py-2 shadow-sm rounded-md hover:bg-gray-700 uppercase'
                />
                <div className=' flex justify-between gap-2 text-sm text-gray-800 w-full'>
                <Link to="/" className='hover:text-gray-700'>Already have an account, <span>Login</span></Link>
                </div>
            </Form>
                )
            }}
        </Formik>
      </div>
  )
}

export default SignUp