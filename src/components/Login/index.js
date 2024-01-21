// Write your code here
import './index.css'

const Login = props => {
  const {onClickLogin} = props

  return (
    <button type="button" onClick={onClickLogin} className="login-button">
      Login
    </button>
  )
}

export default Login
