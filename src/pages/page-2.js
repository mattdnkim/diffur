import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button } from "react-bootstrap";
import "../pages/page-2.css"


const SecondPage = () => (
  <Layout>
    <Seo title="Page two"/>
    <Button size="lg" href="/choose_breed/">Choose the breed</Button>
    <br/> 
    
    <div className="or">OR</div><br/>
    <Button size="lg">Let us know How does your dog look like</Button> <br/><br/>
    
  <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
