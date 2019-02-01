import React from 'react';
import { connect } from 'react-redux';
import { handleChange, addSmurf } from '../actions';

const SmurfForm = props => {
  const { name, age, height } = props;

  const handleChange = e => {
    props.handleChange(e.target.name, e.target.value);
  };

  const addSmurf = e => {
    e.preventDefault();
    props.addSmurf(name, age, height);
  };
  return (
    <form onSubmit={addSmurf}>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <input type='text' name='age' value={age} onChange={handleChange} />
      <input type='text' name='height' value={height} onChange={handleChange} />
      <button type='submit'>Add Smurfs</button>
    </form>
  );
};
const mapStateToProps = state => ({
  name: state.name,
  age: state.age,
  height: state.height
});

const mapActionsToProps = {
  handleChange,
  addSmurf
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SmurfForm);
