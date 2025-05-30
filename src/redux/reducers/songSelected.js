import { SELECT_SONG } from "../action";

const initialState = {
  content: null,
};

const songSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_SONG:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};

export default songSelectedReducer;
