import * as React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header';
import PageFooter from '../components/PageFooter';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Project from '../components/Project';
import Contact from '../components/Contact';

const IndexPage = () => {
  return (
    <Layout>
      <section style={{position: "relative"}}>
        <Header/>
        <About />
        <Experiences />
        <Project />
        <Contact id="contact"/>
      </section>      
      <PageFooter />
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage