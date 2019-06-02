import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import partiesList from '../../parties.json';
import Party from '../components/presentationals/Parties/Party';
// Component
import Layout from '../components/presentationals/Layout';

import '../assets/css/Parties.css';
class Parties extends Component {
  render() {
    return (
      <Layout>
        <div className="main-page">
          <Link
            to="/createparty"
            className="btn-right"
            style={{
              textDecoration: 'none',
            }}
          >
            Send New Party Request
          </Link>
          <div>
            {partiesList.parties.map(party => (
              <Party key={party.id} {...party} />
            ))}
          </div>
        </div>
      </Layout>
    );
  }
}

export default Parties;
