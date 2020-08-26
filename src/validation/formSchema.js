import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Name must be at least 3 characters long')
      .required('Must include Name'),
    price: yup
      .number()
      .required('Price is Required'),
    description: yup
      .string()
      .required('You must provide a description')
})
  
  export default formSchema