import React from 'react'
import { storiesOf } from '@storybook/react'
import AutoSuggestInput from '.'

const fetchSuggestions = (value) => {
  return [
    { label: `Option ${value} A`, value: 1 },
    { label: `Option ${value} B`, value: 2 },
    { label: `Option ${value} C`, value: 3 },
    { label: `Option ${value} D`, value: 4 },
  ]
}

const asyncFetchSuggestions = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { label: `Option ${value} A`, value: 1 },
        { label: `Option ${value} B`, value: 2 },
        { label: `Option ${value} C`, value: 3 },
        { label: `Option ${value} D`, value: 4 },
      ])
    }, 2000)
  })
}

storiesOf('Molecules|AutoSuggestInput', module)
  .add('default', () => (
    <AutoSuggestInput
      value="Some value"
      onChange={(value) => console.log('value', value)}
      fetchSuggestions={fetchSuggestions}
    />
  ))
  .add('async fetch', () => (
    <AutoSuggestInput
      value="Some value"
      onChange={(value) => console.log('value', value)}
      fetchSuggestions={asyncFetchSuggestions}
    />
  ))
  .add('readOnly', () => (
    <AutoSuggestInput
      value="Some value"
      onChange={(value) => console.log('value', value)}
      fetchSuggestions={fetchSuggestions}
      readOnly
    />
  ))
  .add('invalid', () => (
    <AutoSuggestInput
      value="Some value"
      onChange={(value) => console.log('value', value)}
      fetchSuggestions={fetchSuggestions}
      invalid
    />
  ))
