// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {hideFirstName: false, hideLastName: false}

  isClickedFirstName = () => {
    this.setState(prevState => ({hideFirstName: !prevState.hideFirstName}))
  }

  isClickedLastName = () => {
    this.setState(prevState => ({hideLastName: !prevState.hideLastName}))
  }

  render() {
    const {hideFirstName, hideLastName} = this.state

    const firstName = hideFirstName && <p className="para">Joe</p>
    const lastName = hideLastName && <p className="para">Jonas</p>

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Show/Hide</h1>
          <div className="button-container">
            <div className="name-container">
              <button
                type="button"
                className="button"
                onClick={this.isClickedFirstName}
              >
                Show/Hide Firstname
              </button>
              {firstName}
            </div>
            <div className="name-container">
              <button
                type="button"
                className="button"
                onClick={this.isClickedLastName}
              >
                Show/Hide Lastname
              </button>
              {lastName}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
