import axios from 'axios';

export const axiosWithAuth =() => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://usemytechstuff-app.herokuapp.com/api',
        headers: {
            Authorization: token,
        },
    });
};

