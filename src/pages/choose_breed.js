import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'

export default function choose_breed() {
  return (
    <Layout>
    <DropdownButton size='lg' id="dropdown-basic-button" title="Breeds">
  <Dropdown.Item href="/poodle">Poodle</Dropdown.Item>
  <Dropdown.Item href="/pug">Pug</Dropdown.Item>
  <Dropdown.Item href="/bulldog">Bulldog</Dropdown.Item>
  
</DropdownButton>
    </Layout>
    
  )
}
