import React, { Component } from 'react'

import { postLocation } from './service.js'

import {
  Title,
  Container,
  Card,
  Button,
  Input,
  Subtitle,
} from './components.js'

import theme from './theme.js'

class App extends Component {
  state = {
    position: null,
    positionError: null,
    isRequestingPosition: false,
    progress: 0,
    err: null,
    success: null,
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

  postPostion = e => {
    e.preventDefault()
    console.log('Heree??')
    const message = e.nativeEvent.target.message.value
    const variables = {
      latitude: this.state.position.coords.latitude,
      longitude: this.state.position.coords.longitude,
      message,
    }
    postLocation(variables)
      .then(loc => {
        if (
          loc &&
          loc.data &&
          loc.data.postLocation &&
          loc.data.postLocation.id
        ) {
          this.setState({
            success: true,
            position: null,
            positionError: null,
            err: null,
            isRequestingPosition: false,
            progress: 0,
          })
        } else {
          this.setState({ success: false, err: loc })
        }
      })
      .catch(err => {
        this.setState({ success: false, err })
      })
  }
  render() {
    return (
      <Container>
        <Title>Pinbucket 📍</Title>
        {this.state.success && (
          <Subtitle style={{ textAlign: 'center' }}>
            ✅ Successfully Submitted Location
          </Subtitle>
        )}
        {this.state.err && (
          <pre style={{ color: 'red' }}>
            {JSON.stringify(this.state.err, null, 2)}
          </pre>
        )}
        <Card>
          {this.state.position === null && this.state.position === null ? (
            <Button onClick={this.attemptToRequestLocation}>
              Get Location
            </Button>
          ) : this.state.isRequestingPosition ? (
            <progress min="0" max="100" value={this.state.progress} />
          ) : this.state.position ? (
            <form onSubmit={this.postPostion}>
              <Subtitle>Post Location:</Subtitle>
              <label>
                Share an optional message:
                <Input
                  name="message"
                  type="text"
                  placeholder="Some cool message"
                />
              </label>
              <Button type="submit">Share Position</Button>
            </form>
          ) : this.state.positionError ? (
            this.state.positionError
          ) : null}
        </Card>
        <style>
          {`
            html {
              box-sizing: border-box;
              color: ${theme.colors.text};
              background: ${theme.colors.background};
              font-family: 'Avenir Pro', sans-serif;
              font-size: 20px;
            }
            *, *::before, *::after {
              box-sizing: inherit;
              padding: 0;
              margin: 0;
            }
            body {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              min-height: 100vh;
              min-width: 100vw;
            }
          `}
        </style>
      </Container>
    )
  }
}

export default App
