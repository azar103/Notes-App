import {ADD_NOTE, DELETE_NOTE, GET_NOTES} from '../actions/actionTypes';
import uuid from 'react-native-uuid';
import moment from 'moment';
const initState = {
  notes: [],
};

const notesReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case GET_NOTES:
      return {
        ...state.notes,
        notes: state.notes,
      };
    case ADD_NOTE:
      return {
        ...state.notes,
        notes: [...state.notes, payload],
      };
    case DELETE_NOTE:
      return {
        ...state.notes,
        notes: state.notes.filter(item => item.id !== payload.id),
      };
    default:
      return state;
  }
};

export default notesReducer;
