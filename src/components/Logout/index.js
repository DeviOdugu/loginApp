// Write your code here
import './index.css'

const Logout = props => {
  const {onClickLogout} = props

  return (
    <button type="button" onClick={onClickLogout} className="logout-button">
      Logout
    </button>
  )
}

export default Logout
