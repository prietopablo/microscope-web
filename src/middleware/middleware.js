import {
  actionSaveUser,
  LOGOUT,
  SAVE_USER,
  SEND_LOGIN,
} from "../actions/loginActions";
import { SEND_SIGNUP, signupSuccess } from "../actions/signupActions";
import {
  removeAuthorization,
  requestLogin,
  requestSignup,
  saveAuthorization,
} from "../requests";

export const debugMiddleware = (store) => (next) => (action) => {
  console.log("debbug middleware");
  console.log(action, store, next);
  console.log(`L'action ${action.type} est appelée`);
  next(action);
};

// export const loginMiddleware = (store) => (next) => async (action) => {

//   if (action.type === SEND_LOGIN) {
//     console.log('le loginMiddleware a capturé l\'action SEND_LOGIN');
//     const state = store.getState();
//     const { username, password } = state;

//     try {
//       console.log('on déclenche la requete');
//       const data = await requestLogin(username, password);

//       console.log('on dispatch l\'action LOGIN_SUCCESS');
//       store.dispatch(actionLoginSuccess(data.username));
//     }
//     catch (err) {
//       console.error(err);
//     }

//     return; // on return pour ne pas faire le next, et ne pas transferer l'action SUBMIT_LOGIN aux reducer
//   }

//   next(action);
// };

export const loginMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case SEND_LOGIN: {
      console.log("loginMiddleware: j'ai intercepté SEND_LOGIN");

      const state = store.getState();
      const { username, password } = state.user;
      console.log("LE MIDLEWARE DE LOGIN", username, password);

      try {
        console.log("je lance ma requete login");
        const data = await requestLogin(username, password);
        console.log("la requete est terminé et j'ai récupéré:", data);

        console.log(
          "je dispatch SAVE_USER avec les infos de l'utilisateur connecté"
        );
        localStorage.setItem("token", data.token);
        store.dispatch(actionSaveUser(data.user.username, data.token));
      } catch (err) {
        console.error(err);
      }

      return;
    }

    case SAVE_USER: {
      saveAuthorization(action.payload.token);
      next(action);
      break;
    }

    case LOGOUT: {
      // delete token
      removeAuthorization();
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export const signupMiddleware = (store) => (next) => async (action) => {
  if (action.type === SEND_SIGNUP) {
    console.log("le loginMiddleware a capturé l'action SEND_SIGNUP");
    const state = store.getState();
    const { emailSignup, passwordSignup, username } = state.user;

    try {
      console.log("on déclenche la requete");
      await requestSignup(emailSignup, passwordSignup, username);
      store.dispatch(signupSuccess());
    } catch (err) {
      console.error(err);
    }

    return; // on return pour ne pas faire le next, et ne pas transferer l'action SUBMIT_LOGIN aux reducer
  }

  next(action);
};

// export const authMiddleware = (store) => (next) => (action) => {
//     console.log(store, next, action);
//     switch(action.type) {
//         case SEND_LOGIN: {
//             //récupération depuis le state les valeurs de l'input puis appel api
//             const state = store.getState();
//             const { email, password } = state;
//             console.log(email, password)
//             axios
//               .post('http://localhost:3001/login', {
//               email: email,
//               password: password,
//               })
//               .then((res) => {
//                 console.log('les infos ici ->', res.data);
//               })
//               .catch(error => {
//                 console.error(error);
//               });
//               break;
//         }
//         default:
//             next(action);
//     }
// };

// export const signupMiddleware = (store) => (next) => (action) => {
//   console.log(store, next, action);
//   switch(action.type) {
//     case SEND_SIGNUP: {
//       //récupération depuis le state les valeurs de l'input puis appel api
//       const state = store.getState();
//       const { emailSignup, passwordSignup, username } = state;
//       console.log(emailSignup, passwordSignup, username)
//       axios
//         .post('http://localhost:3001/signup', {
//           email: emailSignup,
//           password: passwordSignup,
//           username: username,
//         })
//         .then((res) => {
//           console.log('les infos ici ->', res.data);
//         })
//         .catch(error => {
//           console.error(error);
//         });
//         break;
//     }
//     default:
//       next(action);
//   }
// };

//console.log(`L'action ${action.type} est appelée`);
