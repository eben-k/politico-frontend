import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import PropTypes from 'prop-types'

import { createPartyRequest } from '../../../store/modules/parties';
// import Loader from '../components/presentationals/Loader/Loader';
import Layout from '../../presentationals/Layout';
// import { authenticationToken } from '../utils/helpers';

// class CreateParty extends Component {
//   componentDidMount() {
//     const { history } = this.props;
//     !authenticationToken() && history.push('/');
//   }

//   submitCreatePartyDetails = event => {
//     event.preventDefault();
//     const formData = generateFormData(event.target);
//     return this.props.createPartyRequestHandler(formData, this.props.history);
//   };
export const CreateParty = ({ createPartyRequest: handlePartyRequest }) => {
  const [partyDetails, setPartyDetails] = useState({
    name: '',
    hqAddress: '',
    logoUrl: '',
    email: '',
    phone: '',
  });
  function updateLocalState(event) {
    setPartyDetails({
      ...partyDetails,
      [event.target.name]: event.target.value,
    });
  }
  async function onSubmit(event) {
    event.preventDefault();
    const newPartyResponse = await handlePartyRequest(partyDetails);
    return newPartyResponse;
  }

  return (
    <Layout>
      {/* {this.props.auth.isLoading && (
        <Loader loader="show" text="Hi, am processing your input" />
      )} */}
      <h1 className="login-heading">Add Party</h1>
      <div className="form">
        <form onSubmit={onSubmit} className="login" action="">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Party Name"
              required
              onChange={updateLocalState}
            />
          </div>
          <div>
            <input
              type="text"
              name="hqAddress"
              placeholder="Headquarters"
              required
              onChange={updateLocalState}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={updateLocalState}
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={updateLocalState}
            />
          </div>
          <div>
            <input
              type="file"
              id=""
              name="logoUrl"
              placeholder="Upload Image"
              onChange={updateLocalState}
            />
          </div>
          <div>
            <input type="submit" value="ADD" />
          </div>
        </form>
      </div>
    </Layout>
  );
};

CreateParty.propTypes = {
  auth: PropTypes.object,
  url: PropTypes.string,
  // poweredby: PropTypes.shape({
  //   url: PropTypes.string,
  //   name: PropTypes.string,
  // }),
  createPartyRequest: PropTypes.func.isRequired,
  // location: PropTypes.object,
  // history: PropTypes.object,
};
const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  errors: state.auth.errors,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(
  mapStateToProps,
  { createPartyRequest },
)(CreateParty);
