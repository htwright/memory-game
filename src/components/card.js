import React from 'react';

export default function Card (props){

    return (
        <div className={props.classes}>
        <p>This Is The Front</p>
        <span className='card-number'>{props.number}</span>
        </div>
    );
}