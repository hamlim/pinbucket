export default {
  colors: {
    salmon: '#f8333d',
    emarald: '#47bc97',
    background: 'rgba(236, 227, 226, 0.46)',
    text: '#282726',
  },
  radius: '15px',
  boxShadow: '0 0 10px 5px rgb(71,188,151, .5)',
  spacing: {
    zero: 0,
    small: '.5em',
    med: '2em',
  },
  font: {
    size: {
      small: '.8rem',
      med: '1.2rem',
      large: '2rem',
    },
  },
  inputStyles(props) {
    return {
      display: 'block',
      width: '100%',
      padding: [props.theme.spacing.small, props.theme.spacing.small].join(' '),
      marginBottom: props.theme.spacing.med,
    }
  },
  subtitleStyles(props) {
    return {
      ...props.style,
      fontSize: props.theme.font.size.med,
      marginBottom: props.theme.spacing.med,
    }
  },
  titleStyles(props) {
    return {
      color: props.theme.colors.salmon,
      margin: props.theme.spacing.med,
      textAlign: 'center',
      fontSize: props.theme.font.size.large,
    }
  },
  cardStyles(props) {
    return {
      color: props.theme.colors.text,
      boxShadow: props.theme.boxShadow,
      padding: props.theme.spacing.med,
      margin: props.theme.spacing.med,
      borderRadius: props.theme.radius,
    }
  },
  buttonStyles(props) {
    return {
      padding: [props.theme.spacing.small, props.theme.spacing.med].join(' '),
      fontSize: props.theme.font.size.med,
      border: `solid 2px ${props.theme.colors.salmon}`,
      color: props.theme.colors.salmon,
      borderRadius: props.theme.radius,
      textAlign: 'center',
      cursor: 'pointer',
      width: '100%',
      background: 'white',
    }
  },
}
