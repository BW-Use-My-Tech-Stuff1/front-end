import * as yup from 'yup'

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email address')
    .required('Must include email address'),
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .required('Name is Required'),
  password: yup
    .string()
    .min(6, "Passwords must be at least 6 characters")
    .required('You must select a password'),  
  username: yup
    .string()
    .min(5, 'Please choose a username at least 5 characters in length')
    .required('you must enter a username')
})

export default formSchema
