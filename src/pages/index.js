import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Front End Developer</h1>
    <p>I am a web coordinator currently focusing on the field of frontend web development and JavaScript programming, React, and Redux. My current goal is to obtain either remote web development opportunities and/or part-time/contract employment as a frontend web application developer.</p>
    <p>For over 2 decades I have designed and built portal sites to address design problems. I manage sites in the education industry and have in the nutritional supplement industry as well. I strive to create usable and polished products through passionate and deliberate design.</p>
    <p>I live in Kankakee Illinois. I enjoy music, oil painting, and single malt whiskey.</p>
    <p>Contact me or reach out via LinkedIn or send an email.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
