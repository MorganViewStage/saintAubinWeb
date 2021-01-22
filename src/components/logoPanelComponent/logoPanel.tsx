import React from 'react';
import './logoPanel.css';
import SocialFollow from './socialContainerPanel/socialFollow';
import LogoImgPanel from './logoContainerPanel/logoImgPanel';
import  { Breakpoint, BreakpointProvider } from 'react-socks';


export default class LogoPanel extends React.Component{
render(){
  return (
    <div className="LogoPanel">
		<div className="container" >
<<<<<<< HEAD
		<LogoImgPanel/>
		<SocialFollow />
=======
			<LogoImgPanel/>
			<BreakpointProvider>
			<SocialFollow />
			</BreakpointProvider>
			
>>>>>>> logoPanelComponent
			
	  </div>
    </div>
  );
 }
}

