const initialState = {
  bigPicture: "",
  state: "",
  start: "",
  startTone: false,
  end: "",
  endTone: false,
  userId: null,
  currentUser: null,
};

function gameReducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

export default gameReducer;
