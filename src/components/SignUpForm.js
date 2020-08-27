import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { Button, Form, FormGroup } from 'reactstrap';
import styled from 'styled-components'

//stlyes
const Styleddiv = styled.div`
    
    width: 50%;
    margin: 0 auto;
    

   .form-inputs {
       display: flex;
       flex-direction: column;
       justify-content: center;
       align-items: center;
	   color: white;
	   font-weight:bold;
       text-shadow:1px 1px black;
       min-height: 60vh;
   }
   input, input[placeholder] {
    text-align: center;
}
   h2 {
       text-align: center;
       color: white;
       text-shadow: 2px 1px black;
   }
`

class SignUpForm extends Component {
	state = {	
			username: '',
            password: '',
            firstname:'',
            lastname:''
	};

	signup = (e) => {
		e.preventDefault();
        axiosWithAuth()
        .post('/signup',this.state)
        .then(res=>console.log(res))
		this.props.history.push('/techlist');
	};
	onCheckboxChange = (evt) => {
		const { name, checked } = evt.target;
		this.checkboxChange(name, checked);
	};

	handleChange = (e) => {
		this.setState({
            ...this.state.user,
			[e.target.name]: e.target.value
		});
	};
	render() {
		return (
			<Styleddiv>
                
			<Form onSubmit={this.signup}>
				<h2>Sign Up</h2>

				{/* <div className='errors'>
					<div>{errors.name}</div>
					<div>{errors.username}</div>
					<div>{errors.email}</div>
					<div>{errors.password}</div>
					<div>{errors.tos}</div>
				</div> */}

				<div className='form-inputs'>
					<FormGroup>
					<label>
						First Name:&nbsp;</label>
						<input value={this.state.firstname} onChange={this.handleChange} name='firstname' type='text' placeholder='First Name' />
						</FormGroup>
						<FormGroup>
					<label>
						Last Name:&nbsp;</label>
						<input value={this.state.lastname} onChange={this.handleChange} name='lastname' type='text' placeholder='Last Name' />
						</FormGroup>
						<FormGroup>
					<label>
						Username:&nbsp;</label>
						<input value={this.state.username} onChange={this.handleChange} name='username' type='text' placeholder='choose a username' />
						</FormGroup>
						<FormGroup>
					<label>
						Password:&nbsp;</label>
						<input
							value={this.state.password}
							onChange={this.handleChange}
							name='password'
							type='password'
							placeholder='choose a password'
						/>
						</FormGroup>
						<FormGroup>
					<label>
						Do you agree to our Terms of Service?:&nbsp;</label>
						<input value={this.state.tos} onChange={this.props.onCheckboxChange} name='tos' type='checkbox' />
						</FormGroup>
					
					<Button color="primary"  disabled={this.props.disabled}> Get Started! </Button>
				</div>
			</Form>
			</Styleddiv>
		);
	}
}

export default SignUpForm;
