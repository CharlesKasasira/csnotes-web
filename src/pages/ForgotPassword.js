import { Link } from 'react-router-dom'
import '../styles/login.css'

function ForgotPassword() {
  return (
    <div className="auth-wrapper">
      <div className='group-j'>
        <h1>J</h1>
      </div>
      <form>
        <p>Forgot Password?</p>
        <p id="enter">Enter your e-mail address to reset your password</p>
        <div className="login-inputs">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            name=""
            id="email"
            required
          />
        </div>

        <input
          type="submit"
          id="forgotSubmit"
          className="btn btn-dark cta"
          value="Submit"
        />

        <div className='link-pages'>
          <Link to="/">
            <p id="forgotRemember">Remember password? Login</p>
          </Link>
        </div>

        
      </form>
    </div>
  )
}

export default ForgotPassword