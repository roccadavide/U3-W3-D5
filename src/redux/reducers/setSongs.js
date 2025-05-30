import { SET_SONGS, SET_SONGS_LOADING_ON, SET_SONGS_LOADING_OFF, HAS_ERROR_ON, SET_ERROR_MESSAGE } from "../action";

const initialState = {
  content: {
    rock: [],
    pop: [],
    hiphop: [],
  },
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONGS:
      return {
        ...state,
        content: {
          ...state.content,
          [action.payload.sectionId]: action.payload.data,
        },
      };

    case SET_SONGS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };

    case SET_SONGS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    case HAS_ERROR_ON:
      return {
        ...state,
        hasError: true,
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default songsReducer;
