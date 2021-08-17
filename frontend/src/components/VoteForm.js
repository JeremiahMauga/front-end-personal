import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class VoteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game_title: this.props.gameTitle,
      voter: this.props.voter,
      votes: this.props.votes,
    }
  }

  voteAdder = () => {
    let newCount = this.state.votes + 1
    this.setState({
      votes: newCount
    })
  }
  
  submitHandlerID = (e) => {
    // e.preventDefault()
    axios.put(`http://localhost:8000/core/inventory/${this.props.inventoryID}`, this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { votes } = this.state
    return (
      <form onSubmit={this.submitHandlerID}>
        <div>
          <button type="submit" onClick={this.voteAdder}>Vote</button>
        </div>
      </form>
    )
  }
}

export default VoteForm