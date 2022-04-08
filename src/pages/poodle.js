import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Card } from 'react-bootstrap'
import "./desc-card.css"

export default function poodle() {
  return (
      <Layout><StaticImage
      src="../images/poodle.jpeg"
      width={700}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Diffur Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <Card className='desc-card' body>Poodle has curly coat, long legs, long waist and short tail.<br/>
    We recommend Teddy bear style with PomPom tail!</Card>
    </Layout>
    
  )
}
