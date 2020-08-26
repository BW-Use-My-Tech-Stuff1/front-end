import React from 'react'

const SignUpForm = (props) => {

    const {values, submit, update, inputChange, /* checkboxChange, */ disabled, errors} = props
   
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
     
 /*    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      } */

    const onInputChange = evt => {
        const {name, value} = evt.target
        inputChange(name, value)
        update(name, value)
      }


    return (
       <form onSubmit={onSubmit}>
           <h2>Sign Up</h2>

            <div className='errors'>
              <div>{errors.fname}</div>
              <div>{errors.lname}</div>
              <div>{errors.username}</div>
              {/* <div>{errors.email}</div> */}
              <div>{errors.password}</div>
              {/* <div>{errors.tos}</div> */}
            </div>

            <div className='form-inputs'>
                <label>
                  First Name:&nbsp;
                    <input
                        value={values.fname}
                        onChange={onInputChange}
                        name="fname"
                        type="text"
                        placeholder="your first name"
                    />
                </label>
                <br/>
                <label>
                  Last Name:&nbsp;
                    <input
                        value={values.lname}
                        onChange={onInputChange}
                        name="lname"
                        type="text"
                        placeholder="your last name"
                    />
                </label>
                <br/>
                <label>
                    Username:&nbsp;
                    <input
                        value={values.username}
                        onChange={onInputChange}
                        name="username"
                        type="text"
                        placeholder="choose a username"
                    />
                </label>
                <br/>
          {/*       <label>
                    Email:&nbsp;
                    <input
                        value={values.email}
                        onChange={onInputChange}
                        name="email"
                        type="email"
                        placeholder="your email"
                    />
                </label>
                <br/> */}
                <label>
                    Password:&nbsp;
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name="password"
                        type="password"
                        placeholder="choose a password"
                    />
                </label>
                <br/>
            {/*     <label>
                    Do you agree to our Terms of Service?:&nbsp;
                    <input
                        value={values.tos}
                        onChange={onCheckboxChange}
                        name="tos"
                        type="checkbox"
                    />
                </label>
                <br/> */}
                <button disabled={disabled}> Get Started! </button>
            </div>
       </form>
    )
}

export default SignUpForm
