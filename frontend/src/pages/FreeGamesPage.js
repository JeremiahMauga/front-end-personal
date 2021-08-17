import '../App.css';
import React, { Component } from 'react';
import Games from '../components/games';

class FreeGamesPage extends Component {
    render() {  
      return (
            <Games games={this.state.games} />
        )
    }

    state = {
        games: []
    };

    componentDidMount() {
            fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
              "method": "GET",
              params: {platform: 'pc'},
              "headers": {
                "x-rapidapi-key": "e8e3841f01msh8be0de7c4b7876dp1b6b66jsnd9aefe03f7ae",
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com"
              }
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ games: data })
            })
            .catch(console.log)
    };
  }


export default  FreeGamesPage;