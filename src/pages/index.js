import React from 'react'
import { Link } from 'gatsby'

import { slide as Menu } from 'react-burger-menu'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Split from '../components/split'
import computer from '../images/computer.png'
import camera from '../images/camera.png'
import Burger from '../components/burger'

const programming = {
  className: "split left",
  label: "Programming",
  icon: computer,
};

const photography = {
  className: "split right",
  label: "Photography",
  icon: camera,
};

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Split topic={programming}/>
    <Split topic={photography}/>
  </Layout>
)

export default IndexPage
