// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {content: 'subscribe'}

  clickButton = () => {
    const {content} = this.state
    if (content === 'subscribe') {
      this.setState(() => ({content: 'subscribed'}))
    } else {
      this.setState(() => ({content: 'subscribe'}))
    }
  }

  render() {
    const {content} = this.state
    return (
      <div className="container">
        <h1 className="heading-style">Welcome</h1>
        <p className="paragraph-style">Thank you! Happy Learning</p>
        <button
          className="button-style"
          type="button"
          onClick={this.clickButton}
        >
          {content}
        </button>
      </div>
    )
  }
}
export default Welcome
