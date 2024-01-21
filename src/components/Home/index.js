// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLogged: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    const messageText = isLogged ? 'Welcome User' : 'Please Login'

    return (
      <div className="bg">
        <Message message={messageText} />
        {isLogged ? (
          <Logout onClickLogout={this.onClickButton} />
        ) : (
          <Login onClickLogin={this.onClickButton} />
        )}
      </div>
    )
  }
}

export default Home
