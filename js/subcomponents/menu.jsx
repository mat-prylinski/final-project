import React from "react";
import ReactDOM from 'react-dom';

export class Menu extends React.Component {
    render() {
        return (
        <ul>
          <li>Home</li>
          <li>Listings</li>
          <li>Popular</li>
          <li>Pricing</li>
          <li>How To</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>
        )
    }
}