import React from 'react';
import './logoPanel.css';
import SocialFollow from './socialContainerPanel/socialFollow';
import LogoImgPanel from './logoContainerPanel/logoImgPanel';


export default class LogoPanel extends React.Component{
render(){
  return (
    <div className="LogoPanel">
		<div className="container" >
		<LogoImgPanel/>
		<SocialFollow />
			
	  </div>
    </div>
  );
 }
}

