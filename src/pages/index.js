import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <Header />
      </section>      
      <PageFooter />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage