const theme = {
  palette: {
    primary: ['#0F0F0F', '#2D2E2E', '#716969', '#BCABAE', '#FBFBFB'],
    secondary: [],
    black: ['#000000'],
    white: ['#FFFFFF'],
    grayscale: ['#212121', '#616161', '#9E9E9E', '#BDBDBD', '#E0E0E0', '#FFFFFF'],
  },
  fonts: {
    primary: 'Segoe UI, Helvetica Neue, Helvetica, Roboto, sans-serif',
  },
  sizes: {
    mobile: '414px',
    tablet: '768px',
    desktop: '1024px',
    maxWidth: '1024px',
  },
}

theme.breakpoints = [
  theme.sizes.mobile,
  theme.sizes.tablet,
]

export default theme
