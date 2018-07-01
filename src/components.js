import React from 'react'

import theme from './theme.js'

export const Title = props => <h1 style={theme.titleStyles()} {...props} />

export const Container = props => (
  <div
    style={{ maxWidth: '35em', width: '95vw', margin: '0 auto' }}
    {...props}
  />
)

export const Card = props => <div style={theme.cardStyles()} {...props} />

export const Button = props => (
  <button style={theme.buttonStyles()} {...props} />
)

export const Input = props => <input style={theme.inputStyles()} {...props} />

export const Subtitle = props => (
  <h3 style={theme.subtitleStyles(props)} {...props} />
)
