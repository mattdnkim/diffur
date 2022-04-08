import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Layout from '../components/layout'
import { Card } from 'react-bootstrap'
import "./desc-card.css"

export default function poodle() {
  return (
      <Layout><StaticImage
      src="https://www.purinaproclub.com/sites/g/files/auxxlc346/files/styles/social_share_large/public/Resources_Dog%20Articles_Health_Line%2052_Thumb.jpg?itok=XXLnAshV"
      width={700}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Diffur Logo"
      style={{ marginBottom: `1.45rem` }}
    />
    <Card className='desc-card' body>Bulldog has short hair so we recommend De-shed service!</Card>
    </Layout>
    
  )
}
