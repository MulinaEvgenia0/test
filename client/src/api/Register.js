import React from 'react';
import axios from 'axios';
export const RegisterFormApi = async data => {
    return axios.post('http://localhost:5000/api/users/auth/signup', data)
}
