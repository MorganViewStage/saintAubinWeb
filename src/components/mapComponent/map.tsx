import React, { useState } from 'react';
import SlidingPanel from 'react-sliding-side-panel';


export default function Map() {
const [openPanel, setOpenPanel] = useState(false);
    return(
	<div>
        <button onClick={() => setOpenPanel(true)}>Open</button>
      </div>
)

}


