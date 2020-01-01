import React from 'react'
import { storiesOf } from '@storybook/react'
import Text from '.'

storiesOf('Atoms|Text', module)
  .add('default', () => (
    <Text>This is a Text</Text>
  ))
  .add('variant', () => (
    <div>
      <Text variant="h1">h1</Text>
      <br />
      <Text variant="h2">h2</Text>
      <br />
      <Text variant="h3">h3</Text>
      <br />
      <Text variant="body1">body1</Text>
      <br />
      <Text variant="body2">body2</Text>
      <br />
    </div>
  ))
  .add('bold', () => (
    <Text bold>This is a BOLD Text</Text>
  ))
  .add('palette', () => (
    <div>
      <Text palette="error">
        This is a Text With error Palette
      </Text>
      <br />
      <Text palette="primary" paletteIndex={0}>
        This is&nbsp;
      </Text>
      <Text palette="primary" paletteIndex={1}>
        a Text&nbsp;
      </Text>
      <Text palette="primary" paletteIndex={2}>
        With Primary&nbsp;
      </Text>
      <Text palette="primary" paletteIndex={3}>
        Palette&nbsp;
      </Text>
    </div>
  ))
