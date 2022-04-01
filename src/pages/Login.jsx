import { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../helpers/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../hooks'
import { handleLogin } from '../helpers/utillities'
import { Loader, PasswordTextField, EmailTextField } from '../components'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Formik, Form } from 'formik'
import { validationSchema } from '../helpers/utillities'

export default function Login() {
    const navigate = useNavigate()
    const [person, loading, error] = useAuthState(auth)

    useEffect(() => {
      if(loading) return <Loader />
      if(person) return navigate('/dashboard')
    }, [person, loading])

    const [ user, handleFieldChange, handleFormSubmit ] = useForm({
      email: '',
      password: '',
    },
    () => {
      handleLogin(user)
    }
    )


  return (
    <div className=" inline-flex justify-center items-center w-screen h-screen bg-gray-50">
    <Formik initialValues={user} validationSchema={validationSchema} onSubmit={(values) => handleLogin(values)}>
      {({values, errors, touched, handleChange, handleBlur}) => {
        return (
          <Form className='w-8/12 p-10 sm:w-8/12 md:w-5/12 lg:w-4/12 bg-white shadow-md lg:shadow-lg flex justify-center items-center flex-col rounded-lg'>
        <h2 className='block text-center font-bold text-2xl'>Login to your account</h2>
        <EmailTextField errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
        <PasswordTextField errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
        
        <input
          type="submit"
          value="Login"
          className='w-full mb-2 inline-flex items-center justify-center bg-gray-800 text-white text-base font-medium px-4 py-2 shadow-sm rounded-md hover:bg-gray-700 uppercase'
        />
        <div className=' flex justify-between gap-2 text-sm text-gray-800 w-full'>
          <Link to="/sign-up" className='hover:text-gray-700'>Don't have an account, <span>SignUp</span></Link>
          <Link to="/forgot-password" className='hover:text-gray-700'><p>Forgot Password?</p></Link> 
        </div>
      </Form>
        )
      }}
    </Formik>
  </div>
  )
}