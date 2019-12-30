const theme = {
  palette: {
    primary: ['#000000', '#595959', '#7D7D7D', '#A8A8A8', '#D1D1D1'],
    secondary: ['#FFCF00'],
    white: ['#FFFFFF'],
    grayscale: ['#212121', '#616161', '#9E9E9E', '#BDBDBD', '#E0E0E0', '#FFFFFF'],
    error: ['#E3000B'],
  },
  fonts: {
    primary: 'Comic Sans, Segoe UI, Helvetica Neue, Helvetica, Roboto, sans-serif',
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
