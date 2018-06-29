import React, { Component } from 'react'

class App extends Component {
  state = {
    position: null,
    positionError: null,
    isRequestingPosition: false,
    progress: 0,
  }
  attemptToRequestLocation = () => {
    if ('geolocation' in navigator) {
      this.intval = setInterval(() => {
        this.setState(s => ({
          isRequestingPosition: true,
          progress: s.progress + 10,
        }))
      }, 500)
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log(position)
          clearInterval(this.intval)
          this.setState({ position, isRequestingPosition: false })
        },
        error => {
          console.warn(error)
          clearInterval(this.intval)
          this.setState({ positionError: error, isRequestingPosition: false })
        },
        {
          timeout: 5000,
        },
      )
    } else {
      this.setState({
        positionError: 'Cannot get position in this browser.',
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.position === null && this.state.position === null ? (
          <button onClick={this.attemptToRequestLocation}>Get Location</button>
        ) : this.state.isRequestingPosition ? (
          <progress min="0" max="100" value={this.state.progress} />
        ) : this.state.position ? (
          <button onClick={this.postPosition}>Share Position</button>
        ) : this.state.positionError ? (
          this.state.positionError
        ) : null}
      </div>
    )
  }
}

export default App
