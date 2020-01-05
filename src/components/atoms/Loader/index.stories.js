import React from 'react'
import { storiesOf } from '@storybook/react'
import Loader from '.'

storiesOf('Atoms|Loader', module)
  .add('default', () => (
    <Loader />
  ))
