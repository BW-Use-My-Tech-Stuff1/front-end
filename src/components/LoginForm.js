import React, { Component } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'



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
        <form onSubmit={this.onSubmit}>
            <h2>Login</h2>
             {/* <div className='errors'>
               <div>{errors.username}</div>
               <div>{errors.password}</div>
             </div> */}
             <div className='form-inputs'>
                 <label>
                     Username:&nbsp;
                     <input
                         value={this.state.credentials.username}
                         onChange={this.onInputChange}
                         name="username"
                         type="text"
                     />
                 </label>
                 <br/>
                 <label>
                     Password:&nbsp;
                     <input
                         value={this.state.credentials.password}
                         onChange={this.onInputChange}
                         name="password"
                         type="password"
                     />
                 </label>
                 <br/>
                 <button> Login </button>
             </div>
        </form>
     )
 }
 
    
}
export default LoginForm
