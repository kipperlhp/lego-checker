import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Box } from '@rebass/grid'
import Text from '../../atoms/Text'
import Image from '../../atoms/Image'

const InfoItem = ({ name, value }) => (
  <Flex flexDirection="row" mb="1rem">
    <Box flex="1">
      <Text bold>{name}</Text>
    </Box>
    <Box flex={[1, 1, 2]}>
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
  const graphqlData = useStaticQuery(graphql`
    query {
      defaultImage: file(relativePath: { eq: "bricks.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 450) {
            ...GatsbyImageSharpFluid
          }
        }
      },
    }
  `)
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      {...props}
    >
      <Box flex={1} width={1}>
        <Image
          src={imgSrc || graphqlData.defaultImage.childImageSharp.fluid}
          alt={name}
          title={name}
        />
      </Box>
      <Box
        flex={1}
        width={1}
        ml={[0, 0, '1rem']}
        mt={['1rem', '1rem', 0]}
      >
        <InfoItem name="Set No." value={id} />
        <InfoItem name="Name" value={name} />
        <InfoItem name="Year" value={year} />
        <InfoItem name="No. of Parts" value={numOfParts} />
        <InfoItem
          name="Detail"
          value={url ? (
            <StyledA href={url} target="_blank" rel="noopener noreferrer">
              Click here
            </StyledA>
          ) : undefined}
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
