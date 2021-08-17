import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export class QueryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      game_title: this.props.game_title,
      voter: '',
      votes: 0,
    }
  }

  handleVoteChange = (e) => {
    this.setState({
      votes: e.target.value
    })
  }

  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = (e) => {
    // e.preventDefault()
    console.log(this.state)
    axios.post("http://localhost:8000/core/inventory/", this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { game_title, voter } = this.state
    return (
      <div>
        <center>
        <form onSubmit={this.submitHandler}>
          <div>
          </div>
          <h4>Create new Query</h4>
          <div>
            <label> User: &nbsp;
            <input 
              type='text' 
              name="voter" 
              value={voter} 
              onChange={this.changeHandler}
              />
              </label>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
        </center>
      </div>
    )
  }
}

export default QueryForm