import React, { Component } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

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
			<form onSubmit={this.signup}>
				<h2>Sign Up</h2>

				{/* <div className='errors'>
					<div>{errors.name}</div>
					<div>{errors.username}</div>
					<div>{errors.email}</div>
					<div>{errors.password}</div>
					<div>{errors.tos}</div>
				</div> */}

				<div className='form-inputs'>
					<label>
						Name:&nbsp;
						<input value={this.state.firstname} onChange={this.handleChange} name='firstname' type='text' placeholder='your first Name' />
					</label>
					<br />
					<label>
						Last Name:&nbsp;
						<input value={this.state.lastname} onChange={this.handleChange} name='lastname' type='text' placeholder='Last Name' />
					</label>
					<br />
					<label>
						Username:&nbsp;
						<input value={this.state.username} onChange={this.handleChange} name='username' type='text' placeholder='choose a username' />
					</label>
					<br />
					<label>
						Password:&nbsp;
						<input
							value={this.state.password}
							onChange={this.handleChange}
							name='password'
							type='password'
							placeholder='choose a password'
						/>
					</label>
					<br />
					<label>
						Do you agree to our Terms of Service?:&nbsp;
						<input value={this.state.tos} onChange={this.props.onCheckboxChange} name='tos' type='checkbox' />
					</label>
					<br />
					<button disabled={this.props.disabled}> Get Started! </button>
				</div>
			</form>
		);
	}
}

export default SignUpForm;
