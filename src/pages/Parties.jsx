import React, { Component } from 'react';

import partiesList from '../../parties.json';
import Party from '../components/presentationals/Parties/Party';
// Component
import Layout from '../components/presentationals/Layout';

class Parties extends Component {
  render() {
    return (
      <Layout>
        <div>
          {partiesList.parties.map(party => (
            <Party key={party.id} {...party} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default Parties;
