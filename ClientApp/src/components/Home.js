import React from 'react';

import { Map } from './Map'
import { Navbar } from './navbar/Navbar'
import { InfobarContainer } from './infobar/InfobarContainer'
import { InfobarHeader } from './infobar/InfobarHeader'
import { InfobarBody } from './infobar/InfobarBody'
import { LocationDetails } from './infobar/LocationDetails'

import '../styles/layout.scss'
import { Filters } from './infobar/Filters';

const Home = props => {
  return (
    <>
      <Navbar />
      <div className="mapRow">
        <Map />
        <InfobarContainer>
          <InfobarHeader />
          <InfobarBody>
            <Filters />
            <LocationDetails />
          </InfobarBody>
        </InfobarContainer>
      </div>
    </>
  );
}

export default Home;
