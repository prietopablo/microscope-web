export const SEND_GAME_SETUP = "SEND_GAME_SETUP";
export const actionSendGameSetup = () => ({
  type: SEND_GAME_SETUP,
});

export const UPDATE_NEW_GAME_FORM = "UPDATE_NEW_GAME_FORM";
export const updateNewGameForm = (field, value) => ({
  type: UPDATE_NEW_GAME_FORM,
  payload: {
    field: field,
    value: value,
  },
});

export const UPDATE_PALETTE_NEW_GAME_FORM = "UPDATE_PALETTE_NEW_GAME_FORM";
export const updatePaletteNewGameForm = (status, text, index) => ({
  type: UPDATE_PALETTE_NEW_GAME_FORM,
  payload: {
    status: status,
    text: text,
    index: index,
  },
});

export const PALETTE = "PALETTE";
export const addPalette = () => ({
  type: PALETTE,
});

export const CREATE_GAME = "CREATE_GAME";
export const createGame = () => ({
  type: CREATE_GAME,
});
