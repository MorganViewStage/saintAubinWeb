import React from 'react';
import LogoPanel from './logoPanelComponent/logoPanel';
import SlidingPanel from './slidingPanelComponent/slidingPanel';
import Map from './mapComponent/map';


export default class Site extends React.Component {

   render(){
      return(
        <div className="Site">
		 <LogoPanel />
		 <SlidingPanel />
		 <Map />
		</div>
      )
    }
}

