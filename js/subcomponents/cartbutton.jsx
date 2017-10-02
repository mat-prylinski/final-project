import React from 'react';
import ReactDOM from 'react-dom';

export class CartButton extends React.Component{
    render(){
        return (
            <div className='shop-button'>
                <button>Add Listing </button><span>+</span>
            </div>   
        )
    }
}