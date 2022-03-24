import {useState, useEffect} from 'react'
import { MdVisibility } from 'react-icons/md'
import { MdVisibilityOff } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../helpers/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks'

import { Loader } from '../components'

import { useAuthState } from 'react-firebase-hooks/auth'

import '../styles/login.css'

function Login() {
    const [ password, setPassword ] = useState('password')
    const [ isVisible, setIsVisible ] = useState(false)

    const navigate = useNavigate()

    const [person, loading, error] = useAuthState(auth)

    useEffect(() => {
      if(loading) return <Loader />
      if(person) return navigate('/dashboard')
    }, [person, loading])

    

    const [ user, handleFieldChange ] = useForm({
      email: '',
      password: ''
    })

    const handleLogin = (event) => {
      event.preventDefault()

      signInWithEmailAndPassword(auth, user.email, user.password)
        .catch(err => console.log(err.message))
    }



  return (
    <div className=" inline-flex justify-center items-center w-screen h-screen bg-gray-50">
    <form onSubmit={handleLogin} className='w-11/12 p-10 sm:w-8/12 md:w-6/12 lg:w-5/12 bg-white shadow-md lg:shadow-lg flex justify-center items-center flex-col rounded-lg'>
      {/* <div className='bg-black w-12 h-12 mb-5 rounded-full inline-flex justify-center items-center'>
        <h1 className='text-white font-bold text-lg'>J</h1>
      </div> */}
      <h2 className='block text-center font-bold text-2xl'>Login to your account</h2>
      <div className="mt-3">
        <label htmlFor="email" className='block '>Email</label>
        <input type="email" placeholder="Enter email" name="email" id="email"
          onChange={handleFieldChange}
          className='mt-1 rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
          required />
      </div>

      <div className="mt-3">
        <label htmlFor="password" className='block '>Password</label>
        <input type="password" placeholder="Enter password" name="password" id="password"
          onChange={handleFieldChange}
          className='mt-1 rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
          required />
      </div>

      {/* <div className="mt-3">
        <label htmlFor="password">Password</label>
          <input
            type='password'
            autoComplete="off"
            placeholder="Enter password"
            name=""
            id="password"
            onChange={handleFieldChange}
            required
            className='mt-1 rounded-md border px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-800'
          />
          <span>
            {isVisible ? (
              <MdVisibility
                className="visibilityIcon"
                onClick={() => {
                  setPassword("password");
                  setIsVisible(false);
                }}
              />
            ) : (
              <MdVisibilityOff
                className="visibilityIcon"
                onClick={() => {
                  setPassword("text");
                  setIsVisible(true);
                }}
              />
            )}
          </span>
      </div> */}

      <div id="submit_login">
        <input
          type="submit"
          // className="btn btn-dark cta"
          value="Login"
          className='w-full inline-flex items-center justify-center bg-gray-800 text-white text-base font-medium px-4 py-2 shadow-sm rounded-md hover:bg-gray-700 uppercase'
        />
      </div>
      <div className='link-pages'>
        <Link to="/forgot-password">
            <p>Forgot Password?</p>
        </Link>
        
        <p>
          <span>
          <Link to="/sign-up">
          Don't have an account, 
            SignUp
          </Link>
          </span>
        </p>

      </div>
        
        
    </form>
  </div>
  )
}

export default Login