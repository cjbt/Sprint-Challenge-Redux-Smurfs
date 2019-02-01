import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfLists = props => {
  console.log(props);
  return (
    <div>
      {props.smurfs.map(smurf => (
        <Smurf smurf={smurf} key={smurf.id} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps)(SmurfLists);
