import React from 'react'
import PropTypes from 'prop-types'
import Input from '../../atoms/Input'
import Text from '../../atoms/Text'
import AutoSuggestInput from '../AutoSuggestInput'

const renderInput = (input, meta, props) => {
  const invalid = meta.invalid && meta.touched // !!meta.error
  const { value, onChange, type } = input
  switch (type) {
    case 'autosuggest':
      return (
        <AutoSuggestInput
          invalid={invalid}
          onChange={onChange}
          value={value}
          {...props}
        />
      )
    case 'number':
      return (
        <Input
          type="number"
          invalid={invalid}
          onChange={(e) => onChange((e.target.value !== '') ? Number(e.target.value) : null)}
          value={value}
          {...props}
        />
      )
    default:
      return (
        <Input
          type={type}
          invalid={invalid}
          onChange={onChange}
          value={value}
          {...props}
        />
      )
  }
}

const FieldComponent = ({ input, meta, label, ...props }) => {
  return (
    <div>
      {label ? (
        <Text bold>{label}</Text>
      ) : null}
      {renderInput(input, meta, props)}
      {meta.invalid && meta.touched
        ? <Text palette="error">{meta.error}</Text>
        : null}
    </div>
  )
}

FieldComponent.propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func,
  }),
  meta: PropTypes.shape({
    invalid: PropTypes.bool,
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
}

FieldComponent.defaultProps = {
  label: null,
  input: {
    type: 'text',
    value: undefined,
    onChange: () => {},
  },
  meta: { invalid: false, touched: false },
}

export default FieldComponent
