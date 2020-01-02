import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'
import Text from '../Text'

storiesOf('Atoms|Button', module)
  .add('default', () => (
    <Button onClick={() => console.log('hihi')}>
      <Text palette="white">Click Me</Text>
    </Button>
  ))
  .add('disabled', () => (
    <Button disabled>
      <Text palette="white">Click Me</Text>
    </Button>
  ))
