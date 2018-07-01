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
  inputStyles() {
    return {
      display: 'block',
      width: '100%',
      padding: [this.spacing.small, this.spacing.small].join(' '),
      marginBottom: this.spacing.med,
    }
  },
  subtitleStyles({ style = {} } = {}) {
    return {
      ...style,
      fontSize: this.font.size.med,
      marginBottom: this.spacing.med,
    }
  },
  titleStyles() {
    return {
      color: this.colors.salmon,
      margin: this.spacing.med,
      textAlign: 'center',
      fontSize: this.font.size.large,
    }
  },
  cardStyles() {
    return {
      color: this.colors.text,
      boxShadow: this.boxShadow,
      padding: this.spacing.med,
      margin: this.spacing.med,
      borderRadius: this.radius,
    }
  },
  buttonStyles() {
    return {
      padding: [this.spacing.small, this.spacing.med].join(' '),
      fontSize: this.font.size.med,
      border: `solid 2px ${this.colors.salmon}`,
      color: this.colors.salmon,
      borderRadius: this.radius,
      textAlign: 'center',
      cursor: 'pointer',
      width: '100%',
      background: 'white',
    }
  },
}
