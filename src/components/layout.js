import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="outer-container">
          <Header siteTitle={data.site.siteMetadata.title}/>
          <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="software" className="menu-item" href="/about">Software</a>
            <a id="photography" className="menu-item" href="/contact">Photography</a>
            <a id="about" className="menu-item" href="/contact">About</a>
          </Menu>
          <div id="page-wrap">
            {children}
          </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
