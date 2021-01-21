import React from "react";
import './logoImgPanel.css';
import imgLogoPanel from './Image/imgLogoPanel.png';

const homePage = () => {
 window.location.reload(false);
}

export default class ImgLogoPanel  extends React.Component  {

	
	render(){
    return(
      
	  <img src={imgLogoPanel} width="10%" alt="http://explorez.saintaubinlasalle.fr/"  onClick={homePage}  />

    )
  }
}


