import React from 'react'
import { storiesOf } from '@storybook/react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from '.'

const data = useStaticQuery(graphql`
  query {
    fixedImage: file(relativePath: { eq: "lego-logo.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    fluidImage: file(relativePath: { eq: "lego-logo.png" }) {
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
    <Image src={data.fixedImage.childImageSharp.fixed} fixed alt="test" title="test title" />
  ))
  .add('url', () => (
    <Image src="https://cdn.rebrickable.com/media/sets/10218-1.jpg" width="450" />
  ))
