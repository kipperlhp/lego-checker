import React from 'react'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import PropTypes from 'prop-types'

const inputStyles = css`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  outline: 0;
  border: 0.125rem solid ${ifProp('invalid', palette('error', 0), palette('primary', 0))};
  caret-color: ${ifProp('invalid', palette('error', 0), palette('primary', 0))};
  font-size: 1rem;
  font-family: ${font('primary')};
  color: ${palette('primary', 0)};
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${palette('primary', 2)};
    opacity: 1; /* Firefox */
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${palette('primary', 2)};
  }
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${palette('primary', 2)};
  }
`

const StyledInput = styled.input`
  ${inputStyles}
`

const StyledTextarea = styled.textarea`
  ${inputStyles}
`

const Input = ({ type, invalid, readOnly, ...props }) => {
  if (type === 'textarea') {
    return (
      <StyledTextarea
        type={type}
        readOnly={readOnly}
        invalid={invalid}
        rows={5}
        {...props}
      />
    )
  }
  return (
    <StyledInput
      type={type}
      readOnly={readOnly}
      invalid={invalid}
      {...props}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  invalid: false,
  readOnly: false,
}

export default Input
