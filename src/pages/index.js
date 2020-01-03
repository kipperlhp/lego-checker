import React from 'react'
import styled from 'styled-components'
import { Box } from '@rebass/grid'
import { FORM_ERROR } from 'final-form'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Viewport from '../components/atoms/Viewport'
import ProductInfo from '../components/molecules/ProductInfo'
import SearchForm from '../components/organisms/SearchForm'
import config from '../../config'

const Loader = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
`

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      currentSet: null,
      loading: false,
    }
  }

  setCurrentSet(set) {
    this.setState({ currentSet: set })
  }

  setLoading(isLoading) {
    this.setState({ loading: isLoading })
  }

  fetchProductByNumber(setNum) {
    const { apiUrl, apiKey } = config
    this.setLoading(true)
    return fetch(`${apiUrl}/sets/${setNum}-1/?key=${apiKey}`)
      .then((response) => {
        if (!response.ok) {
          return response.json()
            .then(({ detail }) => {
              throw Error(detail)
            })
        }
        return response.json()
      })
      .then((result) => {
        // eslint-disable-next-line camelcase
        const { set_num, name, set_img_url, set_url, num_parts, year } = result
        const set = {
          id: set_num,
          name,
          imgSrc: set_img_url,
          url: set_url,
          numOfParts: num_parts,
          year,
        }
        this.setCurrentSet(set)
        this.setLoading(false)
      })
      .catch((err) => {
        this.setCurrentSet(null)
        this.setLoading(false)
        return { [FORM_ERROR]: err.message }
      })
  }

  render() {
    const { currentSet, loading } = this.state
    return (
      <Layout>
        <Viewport flexDirection="column">
          <SEO title="LEGO Checker" />
          <Box>
            <SearchForm
              onSubmit={({ search }) => this.fetchProductByNumber(search)}
            />
            <ProductInfo
              product={currentSet}
              mt="2rem"
            />
            {loading ? (
              <Loader />
            ) : null}
          </Box>
        </Viewport>
      </Layout>
    )
  }
}

export default IndexPage
