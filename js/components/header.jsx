import React from "react";
import ReactDOM from 'react-dom';
import Image from '../../images/brand.gif';

export class Header extends React.Component {
  render() {
    return (
      <nav className="header">
        <a href="/">
          <img src={Image} />
        </a>

        <ul>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>


      </nav>
    )
  }
}
