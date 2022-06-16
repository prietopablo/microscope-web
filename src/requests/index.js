/* eslint-disable no-useless-catch */
import axios from 'axios';

// Create axios instance to not repeat url on each requests
const axiosInstance = axios.create({
  baseURL: 'https://microscope-web.herokuapp.com/api',
});

export function saveAuthorization(token) {
  // Save token in instance
  axiosInstance.defaults.headers.common.Authorization = `bearer ${token}`;
}

export function removeAuthorization() {
  // Delete token from instance
  axiosInstance.defaults.headers.common.Authorization = '';
}

export async function requestLogin(email, password) {
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });
    return response.data;
  }
  catch (err) {
    throw err;
  }
}

export async function requestSignup(emailSignup, passwordSignup, username) {
    try {
      const response = await axiosInstance.post('/signup', {
        emailSignup,
        passwordSignup,
        username
      });
      return response.data;
    }
    catch (err) {
      throw err;
    }
  }