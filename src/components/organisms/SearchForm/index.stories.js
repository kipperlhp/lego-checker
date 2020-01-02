import React from 'react'
import { storiesOf } from '@storybook/react'
import SearchForm from '.'

storiesOf('Organisms|SearchForm', module)
  .add('default', () => (
    <SearchForm
      onSubmit={(values) => console.log('values', values)}
    />
  ))
