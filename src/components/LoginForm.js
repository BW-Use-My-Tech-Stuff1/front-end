import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { Button, Form, FormGroup } from 'reactstrap';
import styled from 'styled-components'

//stlyes
const Styleddiv = styled.div`
   
    width: 30%;
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


export class  LoginForm extends Component {    	

    state = {
		credentials: {
			username: '',
			password: ''
		}
	};
    // const {values, submit, update, inputChange, disabled, errors} = props
   
     onSubmit = evt => {
		evt.preventDefault();
		axiosWithAuth()
			.post('/login', this.state.credentials)
			.then((res) => {
				// console.log(res.data.user.id)      
				localStorage.setItem('token', res.data.token);
			})
			.catch((err) => {
				console.log('ErrorERRORerror', err);
            });
            this.props.history.push('/techlist')
        // submit()
      }

     onInputChange = evt => {        
        this.setState({
            credentials:{
                ...this.state.credentials,
                [evt.target.name]: evt.target.value
            }
            
        // inputChange(name, value)
        // update(name, value)
        })

      }

render(){
    
    return (
        <Styleddiv>
        <Form class="loginStyles" onSubmit={this.onSubmit}>
            <h2>Login</h2>
             {/* <div className='errors'>
               <div>{errors.username}</div>
               <div>{errors.password}</div>
             </div> */}
             <div className='form-inputs'>
                 <FormGroup>
                
                     <input
                         value={this.state.credentials.username}
                         onChange={this.onInputChange}
                         name="username"
                         type="text"
                         placeholder="Username"
                     />
                 </FormGroup>
                 <FormGroup>   
                
                     <input
                         value={this.state.credentials.password}
                         onChange={this.onInputChange}
                         name="password"
                         type="password"
                         placeholder="Password"
                     />
                 
                 </FormGroup>
                 <Button  color="primary"   > Login </Button>
             </div>
        </Form>
        </Styleddiv>
     )
 }
 
    
}
export default LoginForm
