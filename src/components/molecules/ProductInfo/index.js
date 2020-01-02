import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'
import brickImage from '../../../images/bricks.jpg'

const InfoItem = ({ name, value }) => (
  <Flex flexDirection={['column', 'row']} mb="1rem">
    <Box flex="1">
      <Text bold>{name}</Text>
    </Box>
    <Box flex="2">
      <Text>{value}</Text>
    </Box>
  </Flex>
)

InfoItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.any,
}

InfoItem.defaultProps = {
  value: 'N/A',
}


const StyledA = styled.a`
  :hover {
    font-weight: bold;
  }
`

const ProductInfo = ({ product, ...props }) => {
  const { id, name, imgSrc, url, numOfParts, year } = product || {}
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      {...props}
    >
      <Box flex={1}>
        <Image
          src={imgSrc || brickImage}
          alt={name}
          title={name}
        />
      </Box>
      <Box
        flex={1}
        width={[1, 1, 'auto']}
        ml={[0, 0, '1rem']}
        mt={['1rem', '1rem', 0]}
      >
        <InfoItem name="Set No." value={id} />
        <InfoItem name="Name" value={name} />
        <InfoItem name="Year" value={year} />
        <InfoItem name="No. of Parts" value={numOfParts} />
        <InfoItem
          name="Detail"
          value={(
            <StyledA href={url} target="_blank" rel="noopener noreferrer">
              Click here
            </StyledA>
          )}
        />
      </Box>
    </Flex>
  )
}

ProductInfo.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    imgSrc: PropTypes.string,
    url: PropTypes.string,
    numOfParts: PropTypes.number,
    year: PropTypes.number,
  }),
}

ProductInfo.defaultProps = {
  product: null,
}

export default ProductInfo
