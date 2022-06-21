const initialState = {
  bigPicture: "",
  state: "",
  start: "",
  startTone: false,
  end: "",
  endTone: false,
  userId: null,
  currentUser: null,

  focus: [],
  periods: [],
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FOCUS":
      return {
        ...state,
        focus: [...state.focus, action.payload],
      };

    case "ADD_PERIODS":
      return {
        ...state,
        periods: [...state.periods, action.payload],
      };

    default:
      return state;
  }
}

export default gameReducer;
