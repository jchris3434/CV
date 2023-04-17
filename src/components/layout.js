import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
} from './layout.module.css'
import { Helmet } from 'react-helmet'


const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v6.4.0/css/all.css"></link>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js"          
        ></script>
      </Helmet>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout