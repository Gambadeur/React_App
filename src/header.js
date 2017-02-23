import React, { Component } from 'react';
import logo from './panda.png';
import './header.css';

class header extends Component {
  render() {
    return (
    <div className="header">
        <div className="top-header">
            <img src={logo} className="logo" alt="logo" />
            <ul className="menu">
                <li className="menuItem colorItem1"><a href="#">RETOUR A LA FRISE</a></li>
                <li className="menuItem colorItem2"><a href="#">FAIRE UN DON</a></li>
            </ul>
        </div>
        <video src="http://40.wwf.fr/medias/videos/mp4/baleine.mp4" autoPlay muted loop/>
      </div>
    );
  }
}

export default header;