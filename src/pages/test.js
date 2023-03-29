import * as React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Navbar />
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage