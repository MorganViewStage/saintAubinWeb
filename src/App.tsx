import React from 'react';
import logo from './logo.svg';
import './App.css';
import Site from './components/site'

export default class App extends React.Component   <any, any>{
   render(){
      return(

        <div className="App">
		 <Site />
		</div>
      )
    }
}

