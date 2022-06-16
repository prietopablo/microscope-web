/* eslint-disable no-useless-catch */
import axios from 'axios';

// Create axios instance to not repeat url on each requests
const axiosInstance = axios.create({
  baseURL: 'https://microscope-web.herokuapp.com/api',
});

// axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

export function saveAuthorization(token) {
  // Save token in instance
  axiosInstance.defaults.headers.common.Authorization = `bearer ${token}`;
}

export function removeAuthorization() {
  // Delete token from instance
  axiosInstance.defaults.headers.common.Authorization = '';
}

export async function requestLogin(username, password) {
  try {
    const response = await axiosInstance.post('/login', {
      username,
      password
    });
    console.log(response)
    return response.data;
  }
  catch (err) {
    throw err;
  }
}

export async function requestSignup(emailSignup, passwordSignup, username) {
    try {
      const response = await axiosInstance.post('/register', {
        email: emailSignup,
        password: passwordSignup,
        username
      });
      return response.data;
    }
    catch (err) {
      throw err;
    }
  }