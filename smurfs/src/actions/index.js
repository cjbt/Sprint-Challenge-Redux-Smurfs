/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

// export const GET_SMURFS_LOAD = 'GET_SMURFS_LOAD';
export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_ERROR = 'GET_SMURFS_ERROR';

// export const ADD_SMURFS_LOAD = 'ADD_SMURFS_LOAD';
export const ADD_SMURFS = 'ADD_SMURFS';
export const ADD_SMURFS_ERROR = 'ADD_SMURFS_ERROR';

export const HANDLE_CHANGE = 'HANDLE_CHANGE';

export const DELETE_SMURF = 'DELETE_SMURF';
export const DELETE_SMURF_ERROR = 'DELETE_SMURF_ERROR';

export const POPULATE_SMURFS = 'POPULATE_SMURFS';

export const UPDATE_SMURF_ERROR = 'UPDATE_SMURF_ERROR';
export const UPDATE_SMURF = 'UPDATE_SMURF';

const url = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
  // dispatch({
  //   type: GET_SMURFS_LOAD,
  //   payload: true
  // });
  return axios
    .get(url)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_SMURFS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_SMURFS_ERROR,
        payload: err
      })
    );
};

export const addSmurf = (name, age, height) => dispatch => {
  // dispatch({
  //   type: ADD_SMURFS_LOAD,
  //   payload: true
  // });
  return axios
    .post(url, { name, age, height })
    .then(res =>
      dispatch({
        type: ADD_SMURFS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: ADD_SMURFS_ERROR,
        payload: err
      })
    );
};

export const handleChange = (name, value) => ({
  type: HANDLE_CHANGE,
  payload: {
    name,
    value
  }
});

export const deleteSmurf = id => dispatch => {
  return axios
    .delete(`${url}/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SMURF,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: DELETE_SMURF_ERROR,
        payload: err
      })
    );
};

export const populateSmurfs = id => ({
  type: POPULATE_SMURFS,
  payload: id
});

export const updateSmurf = (id, name, age, height) => dispatch => {
  return axios
    .put(`${url}/${id}`, { name, age, height })
    .then(res =>
      dispatch({
        type: UPDATE_SMURF,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: UPDATE_SMURF_ERROR,
        payload: err
      })
    );
};
