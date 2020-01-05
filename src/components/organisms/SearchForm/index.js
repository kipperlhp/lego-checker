import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from '@rebass/grid'
import { Form, Field } from 'react-final-form'
import Button from '../../atoms/Button'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import FieldComponent from '../FieldComponent'

const SearchForm = ({ onSubmit, onFetchSuggestions, placeholder }) => {
  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, submitting, submitError, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Flex>
              <Box flex="1">
                <Field
                  name="search"
                  component={FieldComponent}
                  type="autosuggest"
                  fetchSuggestions={onFetchSuggestions}
                  placeholder={placeholder}
                  parse={(v) => v}
                />
              </Box>
              <Flex ml="0.25rem">
                <Button type="submit" disabled={pristine || submitting}>
                  <Icon icon="search" color="white" />
                </Button>
              </Flex>
            </Flex>
            {submitError ? (
              <Flex mt="0.5rem">
                <Text palette="error">{submitError}</Text>
              </Flex>
            ) : null}
          </form>
        )
      }}
    />
  )
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
  onFetchSuggestions: PropTypes.func,
  placeholder: PropTypes.string,
}

SearchForm.defaultProps = {
  onSubmit: () => {},
  onFetchSuggestions: () => {},
  placeholder: 'Search',
}

export default SearchForm
