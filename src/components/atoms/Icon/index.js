/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { prop } from 'styled-tools'
import { palette } from 'styled-theme'

const StyledWrapper = styled.div`
  width: ${prop('width')};
  height: ${prop('height')};
  color: ${({ color }) => palette(color, 0)};
  svg {
    fill: currentColor;
  }
`

const Icon = ({ icon, color, width, height, ...props }) => {
  const Svg = require(`./icons/${icon}.svg`)
  return (
    <StyledWrapper
      color={color}
      width={width}
      height={height || width}
      {...props}
    >
      <Svg />
    </StyledWrapper>
  )
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

Icon.defaultProps = {
  color: 'primary',
  width: '1rem',
}

export default Icon
