import React from 'react';
import axios from 'axios';
export const LoginFormApi = data => {
    return axios.post('http://localhost:5000/api/users/auth/signin', data)
}
