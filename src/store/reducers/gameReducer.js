import {
  PALETTE,
  PLAYER,
  UPDATE_GAME_INFO,
  UPDATE_NEW_GAME_FORM,
  UPDATE_PALETTE_NEW_GAME_FORM,
  UPDATE_PLAYERS_NEW_GAME_FORM,
} from "../../actions/gameActions";

const initialState = {
  bigPicture: "",
  gameState: "",
  start: "",
  startTone: 0,
  end: "",
  endTone: 0,

  players: ["", ""],

  focus: [],
  periods: [],
  events: [],
  scenes: [],
  periodId: [],
  position: [],

  palettes: [
    { text: "", status: 0 },
    { text: "", status: 0 },
    { text: "", status: 0 },
  ],

  gameId: null,
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FOCUS":
      return {
        ...state,
        focus: [...state.focus, action.payload],
      };

    case "ADD_PERIODS":
      // console.log(action.payload);
      return {
        ...state,
        periods: [...state.periods, action.payload],
      };

    case "ADD_EVENTS":
      // console.log("event", action.payload);

      const newPeriods = state.periods.map((period) => {
        if (period.id === action.payload.periodId) {
          return { ...period, events: [...period.events, action.payload] };
        }
        return period;
      });

      return {
        ...state,
        periods: [...newPeriods],
      };

    case "ADD_SCENES":
      const newEventsPeriods = state.periods.map((period) => {
        if (period.id === action.payload.periodId) {
          const newEvents = period.events.map((event) => {
            if (event.id === action.payload.eventId) {
              return {
                ...event,
                scenes: [...event.scenes, action.payload],
              };
            }
            return event;
          });
          console.log(newEvents);
          return {
            ...period,
            events: [...newEvents],
          };
        }
        return period;
      });

      return {
        ...state,
        periods: [...newEventsPeriods],
      };

    case "GAME_ID":
      return {
        ...state,
        gameId: action.payload.id,
      };

    case UPDATE_NEW_GAME_FORM:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };

    case UPDATE_PALETTE_NEW_GAME_FORM:
      console.log("actionpayload", action.payload);
      const newPalette = [...state.palettes];
      newPalette[action.payload.index].status = action.payload.status;
      newPalette[action.payload.index].text = action.payload.text;
      return {
        ...state,
        palettes: newPalette,
      };
    case UPDATE_PLAYERS_NEW_GAME_FORM:
      const newPlayer = [...state.players];
      newPlayer[action.payload.index] = action.payload.playerName;
      return {
        ...state,
        players: newPlayer,
      };
    case PLAYER:
      return {
        ...state,
        players: [...state.players, ""],
      };
    case PALETTE:
      return {
        ...state,
        palettes: [...state.palettes, { text: "", status: 0 }],
      };
    case UPDATE_GAME_INFO:
      console.log(
        ">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",
        action.payload.data.game.big_picture
      );
      return {
        ...state,
        bigPicture: action.payload.data.game.big_picture,
        start: action.payload.data.game.bookend_start,
        startTone: action.payload.data.game.bookend_start_tone,
        end: action.payload.data.game.bookend_end,
        endTone: action.payload.data.game.bookend_end_tone,
        palettes: action.payload.data.palette,
        players: action.payload.data.players,
      };

    default:
      return state;
    // console.log(" newEventsPeriods", newEventsPeriods);
    // let foundEventsPeriod = state.periods.find(
    //   (period) => period.id === action.payload.periodId
    // );

    // const filteredEventsPeriod = state.periods.filter(
    //   (period) => period.id !== action.payload.periodId
    // );
    // let foundEvent = foundEventsPeriod.events.find(
    //   (event) => event.id === action.payload.eventId
    // );
    // console.log(foundEvent);
    // foundEvent = {
    //   ...foundEvent,
    //   scenes: [...foundEvent.scenes, action.payload],
    // };

    // const filteredEvents = foundEventsPeriod.events.filter(
    //   (event) => event.id !== action.payload.eventId
    // );

    // foundEventsPeriod = {
    //   ...foundEventsPeriod,
    //   events: [...filteredEvents, foundEvent],
    // };
  }
}

export default gameReducer;
