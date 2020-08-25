import React, {useState, useEffect} from 'react'
import SignUpForm from './SignUpForm'
import formSchema from './formSchema'
import * as yup from 'yup'
import axios from 'axios'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

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
        <div>
                <header>
                    <h1>Use My Tech</h1>
                    <nav>
                        <Link to="/login">Login</Link>
                        <Link to='/signup'>Sign Up</Link>
                    </nav>
                </header>

                <div className="dashboard-contanier">
                  <div className="left-flexbox">  <p>
                    Responsive web design partner network assets value proposition infographic equity bootstrapping crowdsource iPhone agile development. Business-to-consumer marketing buzz disruptive product management social media termsheet angel investor network effects strategy sales. Influencer interaction design social media. Gen-z buzz first mover advantage disruptive supply chain release gamification business-to-business success. Startup funding assets creative holy grail. Buyer user experience monetization branding hackathon focus sales business-to-consumer. Disruptive iPhone user experience graphical user interface series A financing low hanging fruit. Pitch crowdfunding long tail agile development mass market user experience iPad holy grail. Client agile development supply chain user experience ownership equity ramen beta channels graphical user interface. Business-to-consumer infrastructure angel investor buzz graphical user interface assets non-disclosure agreement founders early adopters customer hackathon value proposition interaction design mass market.
                    </p>
                    <button>Start Saving Now!</button>
                    </div>
                </div>

          <SignUpForm
             values={signUpFormValues}
             update={update}
             inputChange={inputChange}
             checkboxChange={checkboxChange}
             submit={submit}
             /* disabled={disabled} */
             errors={signUpFormErrors}     
            />
           <LoginForm
             values={loginFormValues}
             update={loginUpdate}
             inputChange={loginInputChange}
             submit={loginSubmit}
             /* disabled={disabled} */
             errors={loginFormErrors}     
            />
        </div>
    )
}

export default Dashboard
