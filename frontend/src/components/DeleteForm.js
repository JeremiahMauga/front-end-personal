import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

export class DeleteForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game_title: this.props.gameTitle,
      voter: this.props.voter,
      votes: this.props.votes,
    }
  }

  submitHandlerID = (e) => {
    // e.preventDefault()
    axios.delete(`http://localhost:8000/core/inventory/${this.props.inventoryID}`)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <form onSubmit={this.submitHandlerID}>
        <div>
          <button type="submit">Delete</button>
        </div>
      </form>
    )
  }
}

export default DeleteForm