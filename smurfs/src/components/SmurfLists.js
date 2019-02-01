import React from 'react';
import { connect } from 'react-redux';
import Smurf from './Smurf';

const SmurfLists = props => {
  console.log(props);
  return (
    <div>
      {props.smurfs.map((smurf, i) => (
        <Smurf smurf={smurf} key={i} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(mapStateToProps)(SmurfLists);
