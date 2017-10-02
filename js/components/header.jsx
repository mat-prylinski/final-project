import React from 'react';
import ReactDOM from 'react-dom';
import {HeaderNav} from './headernav.jsx';
import {Landing} from './landing.jsx';


export class Header extends React.Component{
    render(){
        return (
            <header>
                <HeaderNav />
                <Landing />
            </header>
        )
    }
}