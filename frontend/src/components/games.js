import React from 'react'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form
} from 'reactstrap';
import QueryForm from './QueryForm';

    const Games = ({ games }) => {
      return (
        <div class="games">
          <br/>
          <br/>
          <center><h1>Check out these Free Games!</h1></center>
          <br/>
          <br/>
          {games.map((game) => (
            <center>
              <Card style={{width:"40%", height:"60%"}} body inverse color ="secondary">
                <CardImg src={game.thumbnail} alt="Card image cap"/>
                  <CardBody>
                    <CardTitle tag="h2">{game.title}</CardTitle>
                    <CardSubtitle tag="h6">Genre: {game.genre}</CardSubtitle>
                    <CardText>{game.short_description}</CardText>
                    <QueryForm 
                    game_title={game.title}
                    />
                  </CardBody>
              </Card>
              <br/>
            </center>
          ))}
        </div>
      )
    };

    export default Games;