import React from 'react';
import SlidingPanelCarousel from './slidingPanelCarouselComponent/slidingPanelCarousel';
import SlidingPanelExtend from './slidingPanelExtendComponent/slidingPanelExtend';
import SlidingPanelLeave from './slidingPanelLeaveComponent/slidingPanelLeave';
import SlidingPanelInfo from './slidingPanelInfoComponent/slidingPanelInfo';
import Drawer from "react-bottom-drawer";


export default function SlidingPanel() {
  const [isVisible, setIsVisible] = React.useState(true);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
    const openDrawer = React.useCallback(() => setIsVisible(true), []);

     return (
        <div>
		<button className="open-btn" onClick={openDrawer}>
          SHOW ME THE DIALOG!
        </button>
      <Drawer

        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
		
      >
        <SlidingPanelCarousel />
		<SlidingPanelExtend />
		<SlidingPanelLeave />
		<SlidingPanelInfo />
      </Drawer>
		
        </div>
     )
}