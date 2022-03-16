import { Link } from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../helpers/firebaseConfig'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useForm } from '../hooks/useForm'

function SignUp() {

    const [ error, setError ] = useState('')

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
                .then((res) => console.log(res.user))
                .catch(err => console.log(err.message))
        }
    }
  return (
    <form onSubmit={handleSignUp} name='signUp'>
        <h5>Sign Up</h5>
        <div>
            <label>First Name</label>
            <input
                placeholder='Enter First Name'
                type='text'
                id='firstName'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div>
            <label>Last Name</label>
            <input
                placeholder='Enter Last Name'
                type='text'
                id='lastName'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div>
            <label>Email</label>
            <input
                placeholder='Enter E-mail'
                type='email'
                id='email'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div>
            <label>Create Password</label>
            <input
                placeholder='Enter password'
                type='password'
                id='password'
                onChange={handleFieldChange}
                required
            />
        </div>
        <div>
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
        />

        <Link to='/'>Already have an account, <span>Login</span></Link>
    </form>
  )
}

export default SignUp