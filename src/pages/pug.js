import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Card } from 'react-bootstrap'
import "./desc-card.css"

export default function poodle() {
  return (
      <Layout><StaticImage
      src="https://www.famousbirthdays.com/headshots/moka-the-adorable-pug-9.jpg"
      width={700}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Diffur Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <Card className='desc-card' body>Pug has short hair, we recommend De-shed service!</Card>
    </Layout>
    
  )
}
