import React from 'react'
import { storiesOf } from '@storybook/react'
import ProductInfo from '.'

const sampleProduct = {
  id: '42110-1',
  name: 'Land Rover Defender',
  imgSrc: 'https://cdn.rebrickable.com/media/sets/42110-1.jpg',
  url: 'https://rebrickable.com/sets/42110-1/land-rover-defender/',
  numOfParts: 2573,
  year: 2019,
}

storiesOf('Molecules|ProductInfo', module)
  .add('default', () => (
    <ProductInfo product={sampleProduct} />
  ))
