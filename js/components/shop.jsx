import React from 'react';
import ReactDOM from 'react-dom';
import {Cart} from '../subcomponents/cart.jsx';
import {CartButton} from '../subcomponents/cartbutton.jsx';
import {LogIn} from '../subcomponents/login.jsx';

export class Shop extends React.Component{
    render(){
        return (
            <div className='shop'>
                <Cart />
                <CartButton />
                <LogIn />
            </div>
        )
    }
}