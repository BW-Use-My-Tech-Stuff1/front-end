import React, { Component } from "react";
import styled from 'styled-components'

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

const initialFormState = {
  id: '',
  name: '',
  price: '',
  description: '',
}

const EditTechRentalItem = () => {
  state = {
    tech: {
      id: '',
      name: '',
      price: '',
      description: '',
    }
  }
  onChange = (e) => {
    this.setState({
      tech: {
        ...this.state.tech,
        [e.target.name]: e.target.value
      }
    })
  }

  const resetForm = () => this.setState(initialFormState)

  onSubmit = (e) => {
    e.preventDefault()
    const putQuote = ({ id, name, price, description }) => {
      axios.put(``, { name, price, description })
        .then(res => {
          this.setState(this.state.map(item => {
            return item.id === id ? res.data : item
          }))
        })
        .catch(err => {
          debugger
        })
        .finally(resetForm)
    }
  }


  render() {
    return (
      <Styleddiv>
        <Container className='formCont' >
          <Form onSubmit={onSubmit} className='theForm' >
            <Col>
              <Row>
                <Form.Group controlId="formName">
                  <Form.Label className='label'>Name</Form.Label>
                  <Form.Control
                    value={this.state.name}
                    type="text"
                    onChange={onChange}
                    name='name'
                  />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group controlId="formPrice">
                  <Form.Label className='label'>Price</Form.Label>
                  <Form.Control
                    value={this.state.price}
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
                    value={this.state.description}
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
}

export default EditTechRentalItem;
