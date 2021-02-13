import React,{ useState }, { Component } from 'react';
import SlidingPanelCarousel from './slidingPanelCarouselComponent/slidingPanelCarousel';
import SlidingPanelExtend from './slidingPanelExtendComponent/slidingPanelExtend';
import SlidingPanelLeave from './slidingPanelLeaveComponent/slidingPanelLeave';
import SlidingPanelInfo from './slidingPanelInfoComponent/slidingPanelInfo';
import SlidingPanel from 'react-sliding-side-panel';

export default function SlidingPanel() {
  
const [openPanel, setOpenPanel] = useState(false);


     return (
        <div>
		<SlidingPanel
        type={'left'}
        isOpen={openPanel}
        size={30}
		>
        <div>
          <div>My Panel Content</div>
          <button onClick={() => setOpenPanel(false)}>close</button>
        </div>
      </SlidingPanel>
        <SlidingPanelCarousel />
		<SlidingPanelExtend />
		<SlidingPanelLeave />
		<SlidingPanelInfo />

		
        </div>
     )
}