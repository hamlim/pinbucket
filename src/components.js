import React from 'react'
import styled from 'react-emotion'
import theme from './theme.js'

export const Title = styled('h1')(theme.titleStyles)

export const Container = styled('div')({
  maxWidth: '35em',
  width: '95vw',
  margin: '0 auto',
})

export const Card = styled('div')(theme.cardStyles)

export const Button = styled('button')(theme.buttonStyles)

export const Input = styled('input')(theme.inputStyles)

export const Subtitle = styled('h3')(theme.subtitleStyles)
