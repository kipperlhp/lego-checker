import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import Viewport from './atoms/Viewport'
import Text from './atoms/Text'

const StyledViewport = styled(Viewport)`
  padding: 0.7rem 1.0875rem;
`

const StyledHeader = styled.header`
  background: ${palette('primary', 0)};
`

const Header = ({ title }) => {
  return (
    <StyledHeader>
      <StyledViewport flexDirection="column">
        <Text variant="h3" palette="white" bold>
          {title}
        </Text>
      </StyledViewport>
    </StyledHeader>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: '',
}

export default Header
