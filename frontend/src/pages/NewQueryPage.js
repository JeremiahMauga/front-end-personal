import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import FavoritesAPI from '../api/FavoritesAPI.js'
import { Redirect } from 'react-router'

class NewQueryPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: null
    };
  }


  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          game_title: 'React POST Request Example',
          voter: 'Barry',
          votes: 0,
        })
    };
    fetch('http://localhost:8000/core/inventory/', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));
  }

  render() {
    const { postId } = this.state;

    return (
      <div>
        {/* <Form onSubmit={this.handleSubmit.bind(this)}>
          <Form.Group controlId="game_title">
            <Form.Label>Game Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Form.Group controlId="voter">
            <Form.Label>Creator's Name</Form.Label>
            <Form.Control/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
        <div>Post Id: {postId}</div>
      </div>
    )
  }
};

export default NewQueryPage