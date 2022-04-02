import { auth } from "./firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth'
import * as Yup from 'yup'

// Return title case
function titleCase(name) {
    if (name){
        return  name[0].toUpperCase() + name.substring(1)
    }
}

// handle user login
const handleLogin = (user) => {
    try{
        const result = signInWithEmailAndPassword(auth, user.email, user.password)
    } catch(error) {
        console.log(error)
    }
}


const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const validationSchema = Yup.object({
    email: Yup.string().matches(emailRegEx, 'Invalid Email Address').required("Email is required"),
    password: Yup.string().trim().min(8, 'Password must be atleast 8 characters').required("Password is required"),
    lastName: Yup.string().required('Last name is required'),
    firstName: Yup.string().required('First name is required'),
  })

export { titleCase, handleLogin, validationSchema }