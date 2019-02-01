import React from 'react';
import { connect } from 'react-redux';
import { handleChange, addSmurf, updateSmurf } from '../actions';

const SmurfForm = props => {
  const { name, age, height, isUpdating, beingUpdated } = props;

  const handleChange = e => {
    props.handleChange(e.target.name, e.target.value);
  };

  const addSmurf = e => {
    e.preventDefault();
    props.addSmurf(name, age, height);
  };

  const updateSmurf = e => {
    e.preventDefault();
    props.updateSmurf(beingUpdated, name, age, height);
  };

  console.log(props.beingUpdated);
  return (
    <form onSubmit={isUpdating ? updateSmurf : addSmurf}>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <input type='text' name='age' value={age} onChange={handleChange} />
      <input type='text' name='height' value={height} onChange={handleChange} />
      <button type='submit'>{isUpdating ? 'Updating' : 'Add Smurfs'}</button>
    </form>
  );
};
const mapStateToProps = state => ({
  name: state.name,
  age: state.age,
  height: state.height,
  beingUpdated: state.beingUpdated,
  isUpdating: state.isUpdating
});

const mapActionsToProps = {
  handleChange,
  addSmurf,
  updateSmurf
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SmurfForm);
