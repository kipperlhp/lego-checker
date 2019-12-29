import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import { Flex } from '@rebass/grid'

const StyledFlex = styled(Flex)`
  margin: 0 auto;
  max-width: ${size('maxWidth')};
  padding: 1.45rem 1.0875rem;
`

const Viewport = ({ ...props }) => (
  <StyledFlex
    {...props}
  />
)

export default Viewport
