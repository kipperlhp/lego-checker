import React from 'react'
import { storiesOf } from '@storybook/react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '.'

const data = useStaticQuery(graphql`
  query {
    fixedImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    fluidImage: file(relativePath: { eq: "gatsby-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    },
  }
`)

storiesOf('Atoms|Image', module)
  .add('default', () => (
    <Image src={data.fluidImage.childImageSharp.fluid} />
  ))
  .add('fixed', () => (
    <Image src={data.fixedImage.childImageSharp.fixed} fixed />
  ))
  .add('circle', () => (
    <Image src={data.fixedImage.childImageSharp.fixed} fixed circle />
  ))
  .add('alt & title', () => (
    <Image src={data.fluidImage.childImageSharp.fluid} alt="test" title="test title" />
  ))
