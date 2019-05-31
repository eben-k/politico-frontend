import React from 'react';
import PropTypes from 'prop-types';

import '../../../assets/css/Landing.css';

const Party = props => (
  <div className="container">
    <div className="card col-3">
      <img
        alt={`${props.name} Poster`}
        src={require(`../../../assets/images/parties/${props.logourl}`)}
      />
      <div className="card-detail-">
        <h3>{props.name.toUpperCase()}</h3>
        <h4>{`Headquarters: ${props.hqaddress}`}</h4>
        <h4>{`Email: ${props.email}`}</h4>
      </div>
    </div>
  </div>
);
Party.propTypes = {
  logourl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hqaddress: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Party;
