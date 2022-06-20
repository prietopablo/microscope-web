export const SEND_GAME_SETUP = "SEND_GAME_SETUP";
export const actionSendGameSetup = () => ({
  type: SEND_GAME_SETUP,
});

export const UPDATE_NEW_GAME_FORM = "UPDATE_NEW_GAME_FORM";
export const updateLoginForm = (field, value) => ({
  type: UPDATE_NEW_GAME_FORM,
  payload: {
    field: field,
    value: value,
  },
});
