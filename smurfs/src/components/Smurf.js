import React from 'react';

const Smurf = props => {
  return (
    <div>
      <h3>{props.smurf.name}</h3>
      <p>age: {props.smurf.age}</p>
      <p>height: {props.smurf.height}</p>
    </div>
  );
};

export default Smurf;
