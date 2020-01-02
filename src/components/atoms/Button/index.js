import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const StyledButton = styled.button`
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  cursor: ${ifProp('disabled', 'not-allowed', 'pointer')};
  padding: 0.5rem 0.7rem;
  background: ${ifProp('disabled', palette('primary', 3), palette('primary', 0))};
  border: 0.125rem solid ${ifProp('disabled', palette('primary', 3), palette('primary', 0))};
  transition: ease 0.3s;
  outline: 0;
  :hover {
    background: ${ifProp('disabled', palette('primary', 3), palette('primary', 1))};
  }
`

const Button = ({ onClick, ...props }) => {
  return (
    <StyledButton onClick={onClick} {...props} />
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

export default Button
