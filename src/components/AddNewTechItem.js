import React, { useState } from 'react'
import {
    Container,
    Row,
    Col,
    Button,
    Form,
} from "react-bootstrap";
// import * as yup from 'yup'
// import formSchema from '../validation/formSchema'
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom'

// page styles


const Styleddiv = styled.div`
  width: 100%;
    .formCont {
        width: 25%;
        border: 1px solid white;
        background: #F0F8FF;
        box-shadow: 5px 10px #888888;
        border-radius: 1%;
        margin-top: 15vh;
    }
    .theForm {
        width: 100%;
    }
    .label {
        color: black;
    }
`


// Initial form states

const initialFormValues = {
    techName: '',
    description: '',
    price: '',
    condition:''
}

// const initialFormErrors = {
//     name: '',
//     description: '',
//     price: '',
//     condition:''
// }


const AddNewTechItem = (props) => {
    // State
    const [item, setItem] = useState(initialFormValues)
    const history = useHistory()
    const { setTechEquipments, techEquipments } = props
      // const [formErrors, setFormErrors] = useState(initialFormErrors)
    // Item post
    // Form Actions
    // const inputChange = (name, value) => {
    //     yup
    //         .reach(formSchema, name)
    //         .validate(value)
    //         .then(valid => {
    //             setFormErrors({
    //                 ...formErrors,
    //                 [name]: "",
    //             })
    //         })
    //         .catch(err => {
    //             setFormErrors({
    //                 ...formErrors,
    //                 [name]: err.errors[0],
    //             })
    //         })

    //     setFormValues({
    //         ...formValues,
    //         [name]: value
    //     })
    // }
    // Event handlers    


    const onSubmit = evt => {
        evt.preventDefault()
        axiosWithAuth()
        .post('users/1',item)
        .then((res)=>{
            setTechEquipments([...techEquipments,res.data])
        })
        .catch((err)=>console.log(err))
        .finally(()=>{
            history.push('/techlist')
        })
        // evt.preventDefault()
        // axiosWithAuth()
        // .post('/users/1',item)
        // .then((res)=>{console.log(item)})
    }

    const onInputChange = evt => {
        setItem({...item,[evt.target.name]:evt.target.value.trim()})
    }

    return (
        <Styleddiv>
            <Container className='formCont' >
                <Form onSubmit={onSubmit} className='theForm' >
                    <Col>
                        <Row>
                            <Form.Group controlId="formName">
                                <Form.Label className='label'>Name</Form.Label>
                                <Form.Control
                                    value={item.techName}
                                    type="text"
                                    placeholder="Your name goes here!"
                                    onChange={onInputChange}
                                    name='techName'
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="formCondition">
                                <Form.Label className='label'>Condition</Form.Label>
                                <Form.Control
                                    value={item.condition}
                                    type="text"
                                    placeholder="Item Condition"
                                    onChange={onInputChange}
                                    name='condition'
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="formPrice">
                                <Form.Label className='label'>Price</Form.Label>
                                <Form.Control
                                    value={item.price}
                                    type="text"
                                    placeholder="$0.00"
                                    onChange={onInputChange}
                                    name='price'
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="formDescription">
                                <Form.Label className='label'>Item Description</Form.Label>
                                <Form.Control
                                    value={item.description}
                                    type="text"
                                    placeholder="Describe the item you are renting out"
                                    onChange={onInputChange}
                                    name='description'
                                    as='textarea'
                                    rows='6'
                                />
                            </Form.Group>
                        </Row>
                    </Col>
                    <Button variant="secondary" type="submit">Submit</Button>
                </Form>
                {/* <div className='errors'>
                    <div className='error'>{formErrors.name}</div>
                    <div className='error'>{formErrors.price}</div>
                    <div className='error'>{formErrors.description}</div>
                </div> */}
            </Container>
        </Styleddiv>
    )

}

export default AddNewTechItem
