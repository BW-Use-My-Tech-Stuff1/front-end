import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import {
    Container,
    Row,
    Col,
    Button,
    Form,
} from "react-bootstrap";
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { useHistory, useParams } from 'react-router-dom'

// page styles

const Styleddiv = styled.div`
    border: 1px solid black;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(172,255,0,1) 52%, rgba(79,121,9,1) 68%);
    
    .formCont {
        width: 25%;
        border: 1px solid green;
        background: black;
    }
    .theForm {
        width: 100%;
    }
    .label {
        color: white;
    }
`
const initialState = {
    techName: '',
    description: '',
    condition: '',
    price: ''
  };
  

const EditTechRentalItem = (props) => {
    const [tech, setTech] = useState(initialState)
    const { id } = useParams()
    const history = useHistory()
    const { setTechEquipments, techEquipments } = props


  useEffect(()=>{
    axiosWithAuth()
    .get(`/tech/${id}`)
    .then((res)=>{
      setTech(res.data)
    })
  },[id])

  const onChange = (e) => {
    setTech({
  ...tech,
        [e.target.name]: e.target.value
    });
}

const changeTech = (e) => {
    e.preventDefault();
    axiosWithAuth()
        .put(`/tech/${id}`, tech)
        .then((res) => {
            setTech(tech)
            setTechEquipments([...techEquipments])		
        })
    history.push('/techlist');
};

  
    return (
      <Styleddiv>
        <Container className='formCont' >
          <Form onSubmit={changeTech} className='theForm' >
            <Col>
              <Row>
                <Form.Group controlId="formName">
                  <Form.Label className='label'>Name</Form.Label>
                  <Form.Control
                    value={tech.techName}
                    type="text"
                    onChange={onChange}
                    name='techName'
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formName">
                  <Form.Label className='label'>Item condition</Form.Label>
                  <Form.Control
                    value={tech.condition}
                    type="text"
                    onChange={onChange}
                    name='condition'
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formPrice">
                  <Form.Label className='label'>Price</Form.Label>
                  <Form.Control
                    value={tech.price}
                    type="text"
                    onChange={onChange}
                    name='price'
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formDescription">
                  <Form.Label className='label'>Item Description</Form.Label>
                  <Form.Control
                    value={tech.description}
                    type="text"
                    onChange={onChange}
                    name='description'
                    as='textarea'
                    rows='6'
                  />
                </Form.Group>
              </Row>
            </Col>
            <Button variant="secondary" type="submit">Submit</Button>
          </Form>
        </Container>
      </Styleddiv>
    )

}

export default EditTechRentalItem;
