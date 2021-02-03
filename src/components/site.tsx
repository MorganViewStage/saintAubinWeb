import React from 'react';
import LogoPanel from './logoPanelComponent/logoPanel';
import SlidingPanelContent from './slidingPanelComponent/slidingPanelContent';

export default class Site extends React.Component {
   render(){
      return(
        <div className="Site">
		 <LogoPanel />
		 <SlidingPanelContent />
		</div>
      )
    }
}

