import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

const Smurf = props => {
  const { name, age, height, id } = props.smurf;
  const deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(id);
  };
  return (
    <div>
      <h3>{name}</h3>
      <p>age: {age}</p>
      <p>height: {height}</p>
      <button>Update</button>
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

export default connect(
  null,
  { deleteSmurf }
)(Smurf);
