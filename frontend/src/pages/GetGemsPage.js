import '../App.css';
import React, { Component, useState, useEffect } from 'react';
import Gems from '../components/gems';

class GemsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Batman',
      gems: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Game title was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {  
      return (
            <div class="search">
              <center>
                <br/>
                <br/>
                <h1>Search for Steam Games</h1>
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Game: &nbsp;
                    <input value={this.state.value} onChange={this.handleChange} />
                  </label>
                </form>
              </center>
              <Gems gems={this.state.gems}/>
            </div>
        )
    }

    componentDidMount() {
            fetch(`https://www.cheapshark.com/api/1.0/games?title=${this.state.value}`, {
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ gems: data })
            })
            .catch(console.log)
    };
    
    componentDidUpdate() {
      fetch(`https://www.cheapshark.com/api/1.0/games?title=${this.state.value}`, {
      })
      .then(res => res.json())
      .then((data) => {
          this.setState({ gems: data })
      })
      .catch(console.log)
    }
  }



export default GemsPage;