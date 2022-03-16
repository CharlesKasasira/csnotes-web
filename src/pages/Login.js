import {useState} from 'react'
import { MdVisibility } from 'react-icons/md'
import { MdVisibilityOff } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Login() {
    const [ password, setPassword ] = useState('password')
    const [ isVisible, setIsVisible ] = useState(true)
  return (
    <div className="auth-wrapper">
    <form action="">
      <p>Enter Email and Password to sign in</p>
      <div className="login-inputs">
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter email" name="email" id="email"
          required />
      </div>

      <div className="login-inputs">
        <label htmlFor="password_input">Password</label>
        <div id="password">
          <input
            type={password}
            autoComplete="off"
            placeholder="Enter password"
            name=""
            id="password_input"
            required
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
        </div>
      </div>
      <div>
        <input type="checkbox" name="signedIn" id="checkbox" />
        <label htmlFor="signedIn">Keep me signed in</label>
      </div>
      <div id="submit_login">
        <input
          type="submit"
          className="btn btn-primary cta"
          value="Login"
        />
        <Link to="/forgot-password">
            <p>Forgot Password?</p>
        </Link>
        <Link to="/sign-up">
            <p>Don't have an account, <span>SignUp</span></p>
        </Link>
      </div>
    </form>
  </div>
  )
}

export default Login