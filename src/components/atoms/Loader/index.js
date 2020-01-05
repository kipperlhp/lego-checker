import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImg from 'gatsby-image/withIEPolyfill'

const StyledImg = styled(GatsbyImg)`
  animation-name: self-rotation;
  -webkit-animation-name: self-rotation; /* Safari 4.0 - 8.0 */
  animation-duration: 2s;
  -webkit-animation-duration: 2s; /* Safari 4.0 - 8.0 */
  animation-iteration-count: infinite;
  @keyframes self-rotation {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
  /* Safari 4.0 - 8.0 */
  @-webkit-keyframes self-rotation {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }
`

const Loader = () => {
  const data = useStaticQuery(graphql`
    query {
      loaderImage: file(relativePath: { eq: "lego-logo.png" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      },
    }
  `)
  return (
    <StyledImg
      fixed={data.loaderImage.childImageSharp.fixed}
    />
  )
}

export default Loader
