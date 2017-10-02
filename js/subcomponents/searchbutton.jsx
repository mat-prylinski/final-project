import React from 'react';
import ReactDOM from 'react-dom';

export class SearchButton extends React.Component{
    render(){
        return (
            <div className='search-button'>
                <button>Search places </button><span>></span>
            </div>   
        )
    }
}