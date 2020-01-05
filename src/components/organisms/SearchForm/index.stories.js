import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchForm from '.'

const fetchSuggestions = (value) => {
  return ([
    { label: `Option ${value} A`, value: 1 },
    { label: `Option ${value} B`, value: 2 },
    { label: `Option ${value} C`, value: 3 },
    { label: `Option ${value} D`, value: 4 },
  ])
}

storiesOf('Organisms|SearchForm', module)
  .add('default', () => (
    <SearchForm
      onSubmit={(values) => console.log('values', values)}
      onFetchSuggestions={fetchSuggestions}
    />
  ))
