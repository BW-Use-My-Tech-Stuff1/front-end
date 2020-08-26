import React from 'react'


const LoginForm = (props) => {

    const {values, submit, update, inputChange, disabled, errors} = props
   
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

    const onInputChange = evt => {
        const {name, value} = evt.target
        inputChange(name, value)
        update(name, value)
      }


    return (
       <form onSubmit={onSubmit}>
           <h2>Login</h2>

            <div className='errors'>
              <div>{errors.username}</div>
              <div>{errors.password}</div>
            </div>

            <div className='form-inputs'>
                <label>
                    Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name="username"
                        type="text"
                    />
                </label>
                <br/>
                <label>
                    Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name="password"
                        type="password"
                    />
                </label>
                <br/>
                <button disabled={disabled}> Login </button>
            </div>
       </form>
    )
}

export default LoginForm
