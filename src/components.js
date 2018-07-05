import React from 'react'
import styled from 'react-emotion'
import {
  titleStyles,
  cardStyles,
  buttonStyles,
  inputStyles,
  subtitleStyles,
} from './theme.js'

export const Title = styled('h1')(titleStyles)

export const Container = styled('div')({
  maxWidth: '35em',
  width: '95vw',
  margin: '0 auto',
})

export const Card = styled('div')(cardStyles)

export const Button = styled('button')(buttonStyles)

export const Input = styled('input')(inputStyles)

export const Subtitle = styled('h3')(subtitleStyles)
