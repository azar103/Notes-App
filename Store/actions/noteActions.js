import {GET_NOTES, ADD_NOTE} from './actionTypes';

export const addNote = note => async dispatch => {
  try {
    dispatch({
      type: ADD_NOTE,
      payload: note,
    });
  } catch (error) {
    console.dir(error);
  }
};

export const getNotes = () => async dispatch => {
  try {
    dispatch({
      type: GET_NOTES,
    });
  } catch (error) {}
};
