import React from 'react';
import ReactDOM from 'react-dom';

export class Cart extends React.Component{
    render(){
        return (
            <div className='cart'>
                <div className='square'>
                    <div className='circle'></div>
                </div>
                <div className='cart-count'>0</div>
            </div>
        )
    }
}