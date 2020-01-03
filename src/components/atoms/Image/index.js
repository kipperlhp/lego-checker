import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image/withIEPolyfill'
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

const imgStyles = css`
  ${ifProp('circle', css`
    border-radius: 50%;
  `)}
`

const StyledGatsbyImg = styled(GatsbyImg)`
  ${imgStyles}
`

const StyledImg = styled.img`
  max-width: 100%;
  ${imgStyles}
`

const Image = ({ src, title, alt, fixed, circle, ...props }) => {
  if (typeof src === 'string') {
    return (
      <StyledImg
        src={src}
        title={title}
        alt={alt}
        circle={circle}
        {...props}
      />
    )
  }
  return (
    <StyledGatsbyImg
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
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
