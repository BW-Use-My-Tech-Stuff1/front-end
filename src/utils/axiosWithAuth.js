import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://usemytechstuff-app.herokuapp.com/api',
        headers: {
            token: token,
        },
    });
};

        // inputChange(name, value)
        // update(name, value)
            // const {values, submit, update, inputChange, disabled, errors} = props
               // submit()