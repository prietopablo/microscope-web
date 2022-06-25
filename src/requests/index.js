/* eslint-disable no-useless-catch */
import axios from "axios";

// Create axios instance to not repeat url on each requests
export const axiosInstance = axios.create({
  baseURL: "https://microscope-web.herokuapp.com/api",
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});

// axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

export function saveAuthorization(token) {
  // Save token in instance
  axiosInstance.defaults.headers.common.Authorization = `bearer ${token}`;
}

export function removeAuthorization() {
  // Delete token from instance
  localStorage.clear();
  axiosInstance.defaults.headers.common.Authorization = "";
}

export async function requestLogin(username, password) {
  console.log("les info du login la", username, password);
  try {
    const response = await axiosInstance.post("/login", {
      username,
      password,
    });
    console.log(response);
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function requestSignup(emailSignup, passwordSignup, username) {
  try {
    const response = await axiosInstance.post("/register", {
      username,
      email: emailSignup,
      password: passwordSignup,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function requestCreateGame(
  userId,
  bigPicture,
  start,
  startTone,
  end,
  endTone,
  palettes
) {
  try {
    const response = await axiosInstance.post("/game", {
      game: {
        big_picture: bigPicture,
        state: "En cours",
        bookend_start: start,
        bookend_start_tone: startTone,
        bookend_end: end,
        bookend_end_tone: endTone,
        creator_id: userId,
        current_user_id: userId,
      },
      palette: palettes,
    });
    return response.data;
  } catch (err) {
    throw err;
  }
}

export async function requestGameId(userId) {
  try {
    const response = await axiosInstance.post("/createNewGame", {
      creator_id: String(userId),
    });
    console.log(response.data);
    return response;
  } catch (err) {
    throw err;
  }
}
