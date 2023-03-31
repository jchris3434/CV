import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import About from '../components/About';
import Experiences from '../components/Experiences';

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <Header />
        <About />
        <Experiences/>
      </section>      
      {/* <PageFooter /> */}
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage