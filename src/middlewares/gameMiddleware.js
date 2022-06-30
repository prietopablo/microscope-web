import { CREATE_GAME } from "../actions/gameActions";
import { requestCreateGame } from "../requests";

const gameMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case CREATE_GAME: {
      console.log("gameMiddleware: j'ai intercepté CREATE_GAME");

      const state = store.getState();
      const { userId } = state.user;
      const {
        bigPicture,
        start,
        startTone,
        end,
        endTone,
        gameId,
        players,
        palettes,
      } = state.game;
      // console.log("STATE GAME ", state.game);
      const playersToString = players.map((player) => {
        if (player.username) return player.username;
        return player;
      });

      const palettesToSend = palettes.map((palette) => {
        if (palette.text) return palette;
        return;
      });
      const filterPalettes = palettesToSend.filter(
        (palette) => palette !== undefined
      );

      console.log("filterPalettes", filterPalettes);

      try {
        const data = await requestCreateGame(
          userId,
          bigPicture,
          start,
          startTone,
          end,
          endTone,
          gameId,
          playersToString,
          palettesToSend
        );
        console.log(
          "la requete de création de partie est terminé et j'ai récupéré:",
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
