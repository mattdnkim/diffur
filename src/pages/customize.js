import React, {useState} from 'react'
import Layout from '../components/layout'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export default function Customize() {
    const [legs,setLegs] = useState("")
    const [fur,setFur] = useState("")
    const [tail,setTail] = useState("")
    const [color,setColor] = useState("")
    
    const handleLegs=(e)=>{
        console.log(e);
        setLegs(e)
      }

      const handleFur=(e)=>{
        console.log(e);
        setFur(e)
      }

      const handleTail=(e)=>{
          console.log(e);
          setTail(e)
      }

  return (
    <Layout>
  <DropdownButton onSelect={handleLegs} size='lg' id="dropdown-basic-button" title="Legs">
  <Dropdown.Item eventKey="short">Short</Dropdown.Item>
  <Dropdown.Item eventKey="middle">Middle</Dropdown.Item>
  <Dropdown.Item eventKey="long">Long</Dropdown.Item>
  </DropdownButton>
  <br></br>
  <br></br>
  <DropdownButton onSelect={handleFur} size='lg' id="dropdown-basic-button" title="Fur">
  <Dropdown.Item eventKey="short">Short</Dropdown.Item>
  <Dropdown.Item eventKey="middle">Middle</Dropdown.Item>
  <Dropdown.Item eventKey="long">Long</Dropdown.Item>
  </DropdownButton>
  <br></br>
  <br></br> 
  <DropdownButton onSelect={handleTail} size='lg' id="dropdown-basic-button" title="Tail">
  <Dropdown.Item eventKey="short">Short</Dropdown.Item>
  <Dropdown.Item eventKey="middle">Middle</Dropdown.Item>
  <Dropdown.Item eventKey="long">Long</Dropdown.Item>
  </DropdownButton>
  <br></br>
  <h3>Your dog has {legs} legs, {fur} fur, {tail} tail.</h3>
    </Layout>
  )
}
