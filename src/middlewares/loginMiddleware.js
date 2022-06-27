import {
  actionSaveUser,
  LOGOUT,
  SAVE_USER,
  SEND_LOGIN,
} from "../actions/loginActions";

import {
  removeAuthorization,
  requestLogin,
  saveAuthorization,
} from "../requests";

const loginMiddleware = (store) => (next) => async (action) => {
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
        store.dispatch(actionSaveUser(data.username, data.token, data.userId));
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

export default loginMiddleware;
