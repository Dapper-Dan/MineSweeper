import React from 'react';



export default class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        this.props.updateGame(this.props.tileobj, event.altKey)
    }

    render() {
        const tile = this.props.tileobj;
        let klass, text, count;

        if (tile.explored) {
            if (tile.bombed) {
              klass = 'bombed';
              text = '💣';
            } else {
              klass = 'explored';
              count = this.props.tileobj.adjacentBombCount();
              text = (count > 0 ? `${count} ` : "");
            }
          } else if (tile.flagged) {
            klass = 'flagged';
            text = '\u2691';
          } else {
            klass = 'unexplored';
          }
          klass = `tile ${klass}`;
        
        return ( 
            <div className={klass} onClick={this.handleClick}> {text} </div>
        )
    } 
}   