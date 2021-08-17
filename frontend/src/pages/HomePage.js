import React, { Component } from 'react';
import GameList from '../components/GameList';
import QueryForm from '../components/QueryForm';
import '../App.css';


class HomePage extends Component {
  render() {  
    return (
          <div>
            <GameList favorites={this.state.favorites} />
          </div>
      )
  }

  state = {
      favorites: []
  };

  componentDidMount() {
          fetch("http://localhost:8000/core/inventory/", {
            "method": "GET",
          })
          .then(res => res.json())
          .then((data) => {
              this.setState({ favorites: data })
          })
          .catch(console.log)
  };
  
}

export default HomePage;