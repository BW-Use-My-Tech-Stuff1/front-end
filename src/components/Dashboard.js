import React, {useState, useEffect} from 'react'
import SignUpForm from './SignUpForm'
import formSchema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'
import LoginForm from './LoginForm'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../dashboard.css'

const initialSignUpFormValues = {
    name: '',
    username: '',
    email: '',
    password:'',
    tos: false,
  }
  
  const initialSignUpFormErrors = {
    name: '',
    username: '',
    email: '',
    password:'',
    tos:'',
  }
  const initialLoginFormErrors = {
    username: '',
    password:'',
  }

  const initialLoginFormValues = {
    username: '',
    password: '',

  }
  
  const initialDisabled = true
  const initialUsers =[]

const Dashboard = () => {

    const [signUpFormValues, setSignUpFormValues] = useState(initialSignUpFormValues)
    const [signUpFormErrors, setFormErrors] = useState(initialSignUpFormErrors) 
    const [disabled, setDisabled] = useState(initialDisabled)
    const [users, setUsers] = useState(initialUsers)
    const [loginFormValues, setLoginFormValues] = useState(initialLoginFormValues)
    const [loginFormErrors, setLoginFormErrors] = useState(initialLoginFormErrors)
    
  const update = (inputName, inputData)=>{
  setSignUpFormValues({...signUpFormValues, [inputName]: inputData})}
  
  const loginUpdate = (loginInput, loginData)=>{
  setLoginFormValues({...loginFormValues, [loginInput]: loginData})}

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      // run validate using the value
      .validate(value)
      // if the validation is successful, clear the error message
      .then(valid => {
        setFormErrors({
          ...signUpFormErrors,
          [name]: "",
        })
      })
      /* if validation is unsuccessful, set the error message to the message 
        returned from yup */
      .catch(err => {
        setFormErrors({
          ...signUpFormErrors,
          [name]: err.errors[0],
        })
      })

    setSignUpFormValues({
      ...signUpFormValues,
      [name]: value 
    })
  }

  const loginInputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: "",
        })
      })
      .catch(err => {
        setLoginFormErrors({
          ...loginFormErrors,
          [name]: err.errors[0],
        })
      })

    setLoginFormValues({
      ...loginFormValues,
      [name]: value 
    })
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([...users, res.data])
        console.log(res.data)
        console.log(users)
      })
      .catch(err => {
        console.log("error")
      })
      .finally(() => {
        setSignUpFormValues( { 
         name: '',
         username: '',   
         email: '',
         password:'',
         tos: false,})
      })
  }

    const submit = () => {
    const newUser = {
      name: signUpFormValues.name.trim(),
      username: signUpFormValues.username.trim(),
      email: signUpFormValues.email.trim(),
      password: signUpFormValues.password,
      tos: signUpFormValues.tos,
    }
    setSignUpFormValues( 
       {name: '',
        username: '',
        email: '',
        password:'',
        tos: false,})
    postNewUser(newUser)
  }

    const loginSubmit = ()=> {

    }

  const checkboxChange = (name, isChecked) => {
    setSignUpFormValues({
        ...signUpFormValues, [name]: isChecked
    })
  }

  useEffect(() => {
    formSchema.isValid(signUpFormValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [signUpFormValues])

  useEffect(() => {
    formSchema.isValid(loginFormValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [loginFormValues])


    return (
        <Router>
        <div>
                <header>
                    <h1>Use My Tech</h1>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/signup' className='navbar'>Sign Up</Link>
                        <Link to="/login">Login</Link>
                    </nav>
                </header>

               
        <Route path='/signup'>
          <SignUpForm
             values={signUpFormValues}
             update={update}
             inputChange={inputChange}
             checkboxChange={checkboxChange}
             submit={submit}
             /* disabled={disabled} */
             errors={signUpFormErrors}     
            />
            </Route>
            <Route path='/login'>
           <LoginForm
             values={loginFormValues}
             update={loginUpdate}
             inputChange={loginInputChange}
             submit={loginSubmit}
             /* disabled={disabled} */
             errors={loginFormErrors}     
            />
            </Route>
            <Route exact path='/'>
            <div className="dashboard-container">
                  <div className="left-flexbox"> 
                    <p>
                        Tired of paying ridiculous fees for 
                        camera and other equipment rentals? 
                        Bypass the middleman and rent from a real person!
                    </p>
                    <Link to='/signup' className='fake-btn'>Start Saving Now!</Link>
                   </div>
                   <div> 
                     <img src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="tech" />
                    </div>
                </div>
            </Route>
        </div>
        </Router>
    )
}

export default Dashboard
