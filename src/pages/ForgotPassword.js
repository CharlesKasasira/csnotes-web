import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div>
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
          className="btn btn-primary cta"
          value="Submit"
        />

        <Link to="/">
          <p id="forgotRemember">Remember password? Login</p>
        </Link>
      </form>
    </div>
  )
}

export default ForgotPassword