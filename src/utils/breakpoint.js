import { css } from 'styled-components'
import { size } from 'styled-theme'

// styles should be passed in using css`` format from styled-components
const breakpoint = (device, styles, min = false) => {
  if (!min) {
    return css`
      @media (max-width: ${size(device)}) {
        ${styles};
      }
    `
  }
  return css`
    @media (min-width: ${size(device)}) {
      ${styles};
    }
  `
}

export default breakpoint
