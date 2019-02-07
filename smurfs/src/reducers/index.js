/*
  Be sure to import in all of the action types from `../actions`
*/

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
import {
  ADD_SMURFS,
  GET_SMURFS,
  HANDLE_CHANGE,
  DELETE_SMURF,
  UPDATE_SMURF,
  POPULATE_SMURFS
} from '../actions';
const initialState = {
  smurfs: [],
  name: '',
  age: '',
  height: '',
  beingUpdated: null,
  isUpdating: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SMURFS:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURFS:
      return {
        ...state,
        smurfs: action.payload,
        name: '',
        age: '',
        height: ''
      };
    case HANDLE_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case POPULATE_SMURFS:
      let selected = state.smurfs.find(smurf => smurf.id === action.payload);
      return {
        ...state,
        name: selected.name,
        age: selected.age,
        height: selected.height,
        beingUpdated: selected.id,
        isUpdating: true
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: action.payload,
        name: '',
        age: '',
        height: '',
        beingUpdated: null,
        isUpdating: false
      };
    default:
      return state;
  }
}
