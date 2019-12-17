import React from 'react';

import { Map } from './Map'
import { Navbar } from './navbar/Navbar'
import { InfobarContainer } from './infobar/InfobarContainer'
import { InfobarHeader } from './infobar/InfobarHeader'

import '../styles/layout.scss'

const Home = props => {
  return (
    <>
      <Navbar />
      <div className="mapRow">
        <Map />
        <InfobarContainer>
          <InfobarHeader />
        </InfobarContainer>
      </div>
    </>
  );
}

export default Home;
