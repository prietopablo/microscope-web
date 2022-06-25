import { CREATE_GAME } from "../actions/gameActions";
import { requestCreateGame } from "../requests";

const gameMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_GAME: {
      console.log("gameMiddleware: j'ai intercepté CREATE_GAME");

      const state = store.getState();
      const { userId } = state.user;
      const { bigPicture, start, startTone, end, endTone, palettes } =
        state.game;

      try {
        const data = await requestCreateGame(
          userId,
          bigPicture,
          start,
          startTone,
          end,
          endTone,
          palettes
        );
        console.log(
          "la requete  de création de partie est terminé et j'ai récupéré:",
          data
        );
      } catch (err) {
        console.error(err);
      }

      return;
    }
    default:
      next(action);
  }
};

export default gameMiddleware;
