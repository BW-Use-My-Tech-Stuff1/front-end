import React, { Component, useState } from 'react'
import axios from 'axios'
import {
    Container,
    Row,
    Col,
    Button,
    Form,
} from "react-bootstrap";
import * as yup from 'yup'
import formSchema from '../validation/formSchema'

// Initial form states

const initialFormValues = {
    name: '',
    description: '',
    price: '',
}

const initialFormErrors = {
    name: '',
    description: '',
    price: '',
}

// State

const [items, setItems] = useState([])
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)

// Item post

const postNewFriend = newItem => {
    axios.post('google.com', newItem)
        .then(res => {
            setItems([...items, res.data])
        })
        .catch(err => {
            debugger
        })
        .finally(() => {
            setFormValues(initialFormValues)
        })
}

// Form Actions

const inputChange = (name, value) => {

    yup
        .reach(formSchema, name)
        .validate(value)
        .then(valid => {
            setFormErrors({
                ...formErrors,
                [name]: "",
            })
        })
        .catch(err => {
            setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
            })
        })

    setFormValues({
        ...formValues,
        [name]: value
    })
}

const submit = () => {
    const newFriend = {
        name: formValues.name.trim(),
        description: formValues.description.trim(),
        price: formValues.price.trim(),
    }
    postNewFriend(newFriend)
}

// Event handlers





class AddTechItem extends Component {
    onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    
    onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }
    render() {
        return (
            <div>
                <Container>
                    <Form onSubmit={this.onSubmit} >
                        <Col>
                            <Row>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        value={formValues.name}
                                        type="text"
                                        placeholder="Your name goes here!"
                                        onChange={this.onInputChange}
                                        name='name'
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        value={formValues.price}
                                        type="text"
                                        placeholder="$0.00"
                                        onChange={this.onInputChange}
                                        name='price'
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Item Description</Form.Label>
                                    <Form.Control
                                        value={formValues.description}
                                        type="text"
                                        placeholder="Describe the item you are renting out"
                                        onChange={this.onInputChange}
                                        name='description'
                                    />
                                </Form.Group>
                            </Row>
                        </Col>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Form>
                    <div className='errors'>
                        <div>{formErrors.name}</div>
                        <div>{formErrors.price}</div>
                        <div>{formErrors.description}</div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default AddTechItem
