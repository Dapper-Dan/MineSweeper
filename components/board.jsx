import React from 'react';
import Tile from './tile';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let rows = this.props.workingBoard.grid;
        
        return <div id="board"> { rows.map((row, i) => {
            return <div className="row" key={`row ${i}`}> { row.map((tile, idx) => {
                return <Tile tileobj={tile} updateGame={this.props.updateGame} key={`tile ${idx}`} />
            }) } </div>

        }) } </div>
        
    }
}

