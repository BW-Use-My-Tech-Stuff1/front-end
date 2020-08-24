import React, { Component } from 'react'
import axios from 'axios'
import {
    Container,
    Row,
    Col,
    Button,
    Alert,
    Breadcrumb,
    Navbar,
    FormControl,
    Nav,
    NavDropdown,
    Form,
  } from "react-bootstrap";


class AddTechItem extends Component {
    state = {
        tech: {
            name: '',
            descrip: '',
            price: '',
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

    onSubmit = (e) => {
        e.preventDefault()
        // axiosCallgoesHere (post req)
        // set res to addTech(res..)
    }

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Col>
                            <Row>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your name goes here!" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="text" placeholder="$0.00" />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formDescript">
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control type="text" placeholder="Describe the item you are renting out" />
                                </Form.Group>
                            </Row>
                        </Col>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default AddTechItem
