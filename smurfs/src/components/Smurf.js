import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf, populateSmurfs } from '../actions';

const Smurf = props => {
  const { name, age, height, id } = props.smurf;
  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(id);
  };
  const populateSmurfs = e => {
    e.preventDefault();
    props.populateSmurfs(id);
  };
  return (
    <div>
      <h3>{name}</h3>
      <p>age: {age}</p>
      <p>height: {height}</p>
      <button onClick={populateSmurfs}>Update</button>
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf, populateSmurfs }
)(Smurf);
