import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { ifProp } from 'styled-tools'

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const StyledImg = styled(Img)`
  ${ifProp('circle', css`
    border-radius: 50%;
  `)}
`

const Image = ({ src, title, alt, fixed, circle, ...props }) => {
  return (
    <StyledImg
      fluid={!fixed ? src : undefined}
      fixed={fixed ? src : undefined}
      title={title}
      alt={alt}
      circle={circle}
      {...props}
    />
  )
}

Image.propTypes = {
  src: PropTypes.object,
  title: PropTypes.string,
  alt: PropTypes.string,
  fixed: PropTypes.bool,
  circle: PropTypes.bool,
}

Image.defaultProps = {
  src: { src: null },
  title: '',
  alt: '',
  fixed: false,
  circle: false,
}

export default Image
