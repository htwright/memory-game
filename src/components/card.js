import React from 'react';

export default class  Card extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    generateGrid(){
        this.props.item.map((it, index)=>{
            return (
                <div className="`whatever ${index}`">
                    <span  className="abc">{it}</span>
                </div>
            );
        });
    }

    render(){
        // this.generateGrid();
        console.log(this.props);
        return (
            this.generateGrid()
        // <div className={props.classes} onClick={(e => props.onClick(e))}>
        //     <p>This Is The Front</p>
        //     <span className='card-number'>{props.number()}</span>
        // </div>
        );
    }
}