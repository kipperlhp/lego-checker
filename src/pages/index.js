import React from 'react'
import { Flex, Box } from '@rebass/grid'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Viewport from '../components/atoms/Viewport'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <Viewport flexDirection="column">
          <SEO title="Home" />
          <Box>

          </Box>
        </Viewport>
      </Layout>
    )
  }
}

export default IndexPage
