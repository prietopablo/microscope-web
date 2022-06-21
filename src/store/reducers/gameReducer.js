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
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FOCUS":
      return {
        ...state,
        focus: [...state.focus, action.payload],
      };

    case "DELETE_FOCUS":
      return {
        ...state,
        focus: state.focus.filter((focus) => focus.id !== action.payload),
      };
    default:
      return state;
  }
}

export default gameReducer;
