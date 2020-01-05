import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette, font } from 'styled-theme'
import debounce from 'lodash/debounce'
import Autosuggest from 'react-autosuggest'
import Input from '../../atoms/Input'

/*
  A controlled input component for input with auto-suggestions
*/

const StyledWrapper = styled.div`
  .react-autosuggest__container {
    position: relative;
  }
  .react-autosuggest__suggestions-container--open{
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    margin-top: 0.25rem;
    border-radius: 0.5rem;
    border: 0.125rem solid ${palette('primary', 0)};
    font-size: 1rem;
    font-family: ${font('primary')};
  }
  .react-autosuggest__suggestions-list {
    background: ${palette('white', 0)};
    list-style-type: none; /* remove li bullet */
    margin: 0;
    padding: 0;
    max-height: 16rem;
    border-radius: 0.5rem;
    overflow-y: auto;
    > :not(:last-child) {
      border-bottom: 0.0625rem solid ${palette('primary', 2)};
    }
  }
  .react-autosuggest__suggestion--highlighted {
    background: ${palette('primary', 4)};
  }
`

const StyledSuggestion = styled.div`
  padding: 0.4rem 1rem;
  margin: 0;
`

const renderSuggestion = (suggestion, { query, isHighlighted }) => {
  return (
    <StyledSuggestion>
      {suggestion.label}
    </StyledSuggestion>
  )
}

const getSuggestionValue = (suggestion) => {
  return `${suggestion.value}`
}

class AutoSuggestInput extends React.Component {
  constructor() {
    super()
    this.state = {
      suggestions: [],
    }
    this.debouncedFetchSuggestions = debounce(this.fetchSuggestions.bind(this), 500)
  }

  setSuggestions(suggestions) {
    this.setState({ suggestions })
  }

  fetchSuggestions({ value }) {
    const { fetchSuggestions } = this.props
    return Promise.resolve(fetchSuggestions(value))
      .then((results) => {
        this.setSuggestions(results)
      })
  }

  render() {
    const { suggestions } = this.state
    const { value, onChange, placeholder, invalid, readOnly, ...props } = this.props
    return (
      <StyledWrapper>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={!readOnly ? this.debouncedFetchSuggestions : null}
          onSuggestionsClearRequested={() => this.setSuggestions([])}
          onSuggestionSelected={(e, { suggestionValue }) => onChange(suggestionValue)}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          renderInputComponent={Input}
          inputProps={{
            value,
            onChange: (e, { newValue }) => onChange(newValue),
            placeholder,
            invalid,
            readOnly,
          }}
          {...props}
        />
      </StyledWrapper>
    )
  }
}

AutoSuggestInput.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  fetchSuggestions: PropTypes.func,
  placeholder: PropTypes.string,
  invalid: PropTypes.bool,
  readOnly: PropTypes.bool,
}

AutoSuggestInput.defaultProps = {
  value: '',
  onChange: () => {},
  fetchSuggestions: () => {},
  placeholder: null,
  invalid: false,
  readOnly: false,
}

export default AutoSuggestInput
