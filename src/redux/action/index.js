export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";
export const SET_SONGS = "SET_SONGS";
export const SELECT_SONG = "SELECT_SONG";
export const SET_SONGS_LOADING_OFF = "SET_SONGS_LOADING_OFF";
export const SET_SONGS_LOADING_ON = "SET_SONGS_LOADING_ON";
export const HAS_ERROR_ON = "HAS_ERROR_ON";
export const HAS_ERROR_OFF = "HAS_ERROR_OFF";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";

export const addToFavoritesAction = song => ({ type: ADD_TO_FAVORITES, payload: song });
export const removeFromFavoritesAction = index => ({ type: REMOVE_FROM_FAVORITES, payload: index });
export const selectSongAction = track => ({ type: SELECT_SONG, payload: track });

export const fillMusicSection = (endpoint, artistName, sectionId) => {
  return async (dispatch, getState) => {
    const globalState = getState();
    console.log("global State", globalState);
    dispatch({ type: SET_SONGS_LOADING_ON });
    try {
      const resp = await fetch(endpoint + artistName);
      if (resp.ok) {
        const fetchedSongs = await resp.json();
        dispatch({
          type: SET_SONGS,
          payload: {
            sectionId,
            data: fetchedSongs.data,
          },
        });
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
      dispatch({ type: HAS_ERROR_ON });
      dispatch({ type: SET_ERROR_MESSAGE, payload: err.message });
    } finally {
      dispatch({ type: SET_SONGS_LOADING_OFF });
    }
  };
};
