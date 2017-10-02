import React from 'react';
import ReactDOM from 'react-dom';
import {Logo} from '../subcomponents/logo.jsx';
import {Menu} from '../subcomponents/menu.jsx';
import {Shop} from './shop.jsx';


export class HeaderNav extends React.Component {
  render() {
    return (
      <nav className='header-nav'>
        <div className='menu'>
          <Logo />
          <Menu />
        </div>
        <Shop />
      </nav>
    )
  }
}
