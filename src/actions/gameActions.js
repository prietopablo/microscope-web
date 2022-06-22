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
export const updatePaletteNewGameForm = (status, value) => ({
  type: UPDATE_PALETTE_NEW_GAME_FORM,
  payload: {
    status: status,
    text: value,
  },
});
