import React from 'react';
import * as Minesweeper from '../minesweeper.js'
import Board from './board.jsx'

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        const workingBoard = new Minesweeper.Board(9, 11);
        this.state = {
            board: workingBoard
        };
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged) {
        if(flagged) tile.toggleFlag();
        if(!flagged) tile.explore();
        this.setState({ board: this.state.board });
        this.restartGame = this.restartGame.bind(this);
    }

    restartGame() {
        const workingBoard = new Minesweeper.Board(9, 11);
        this.setState({ board: workingBoard });
      }

    render() {
        let modal;
        if (this.state.board.lost() || this.state.board.won()) {
            let text = this.state.board.won() ? "Winner!" : "You lost!";
            modal = 
            <div className='modal-screen'>
                <div className='modal-content'>
                    <p>{text}</p>
                    <button onClick={this.restartGame}> Play Again! </button>
                </div>
            </div>;
        }

        return (
            <div>
                {modal}
                <Board workingBoard={this.state.board} updateGame={this.updateGame} />
            </div>
        )
    }
}





```javascript

{
  entities: { 
    users: {
      1: {
        id: 1,
        displayName: 'Metallica',
        email: 'IloveSF81@aol.com',
        fullName: 'Lars U',
        profileImageUrl: 'photobucket.com/photos/graveyard.jpeg',
        uploadedSongIds: [11, 7]
      }, 
      2: {
        id: 2,
        displayName: 'stevie_nicks',
        email: 'immagypsy23@yahoo.com',
        fullName: 'Stevie Nicks',
        uploadedSongIds: [10]
      },
      3: {
        id: 3,
        displayName: 'anon02102020',
        email: 'iPOSTmusicThatsNotmine@netscape.net',
        fullName: 'John Doe',
        profileImageUrl: 'photobucket.com/photos/trollsmiling.gif',
        uploadedSongIds: [23]
      },
      4: {
          id: 4,
          displayName: 'Deadmau5',
          email: 'TheRealDeadmau5@gmail.com',
          fullName: 'Joel Zimmerman'
      }  
    },
    tracks: {
      10: {
        id: 10,
        title: 'Edge of Seventeen',
        albumArtUrl: 'photobucket.com/photos/blondegirl.jpeg',
        tags: ['classic', 'mellow'],
        genre: 'Rock',
        description: 'Classic rock song by lead singer of Fleetwood Mac',
        trackUrl: 'darkcloud.com/stevienicks/edge17',
        artistId: 2
      },
      11: {
        id: 11,
        title: 'Enter Sandman',
        albumArtUrl: 'photobucket.com/photos/skullinfog.jpeg',
        tags: ['headbanger', 'metal', 'classic metal'],
        genre: 'Metal',
        description: "A classic metal track from the Bay Area's own, Metallica",
        trackUrl: 'darkcloud.com/metallica/sandman',
        artistId: 1
      },
      7: {
        id: 7,
        title: 'Master of Puppets',
        albumArtUrl: 'photobucket.com/photos/gravestones.jpeg',
        tags: ['metal', 'best guitar riffs'],
        genre: 'Metal',
        description: "A single off the album of the same name, Master of Puppets",
        trackUrl: 'darkcloud.com/metallica/puppetmaster',
        artistId: 1
      },
      23: {
        id: 23,
        title: 'Deadmau5 - The Reward is Cheese',
        tags: ['raaaager'],
        genre: 'EDM',
        trackUrl: 'darkcloud.com/anon02102020/deadmouse5-cheese',
        artistId: 3
      }
    },
    comments: {
      1: {
          id: 1,
          authorId: 3,
          trackId: 11,
          body: "This song slaps!"
      },
      2: {
          id: 2,
          authorId: 4,
          trackId: 23,
          body: "Hmm... this song seems familiar"
      }
    },
    likes: {
      11: {
          id: 11,
          userId: 2,
          trackId: 7
      },
      6: {
          id: 6,
          userId: 3,
          trackId: 11
      }
    },
    following: {
      1: {
          id: 1,
          followerId: 2,
          followeeId: 3
      },
      2: {
          id: 2,
          followerId: 1,
          followeeId: 3
      }
    }
  },
  ui: {
      loading: true/ false
  },
  errors: {
      login: ["Incorrect username/password combination"],
      trackForm: ["Title cant be blank", "Track URL cant be blank ],
      commentForm: ["Body cant be blank"]
  }
}