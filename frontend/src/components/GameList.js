import React, { Component } from 'react'
import VoteForm from './VoteForm';
import DeleteForm from './DeleteForm';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';


const Favorites = ({ favorites }) => {
  
  return (
    <div class="games">
      <br/>
      <br/>
      <center>
        <h1>Games to play Tonight!</h1>
      </center>
      <br/>
      <br/>
      {favorites.map((favorite) => (
        <center>
          <Card style={{width:"20%", height:"20%"}} body inverse color ="secondary">
              <CardBody>
                <CardTitle tag="h2">{favorite.game_title}</CardTitle>
                <CardSubtitle tag="h3">Votes: {favorite.votes}</CardSubtitle>
                <CardText>User: {favorite.voter}</CardText>
                {/* <CardText>ID: {favorite.id}</CardText> */}
                <div>
                  <VoteForm 
                  inventoryID={favorite.id}
                  gameTitle={favorite.game_title}
                  voter={favorite.voter}
                  votes={favorite.votes}
                  />
                  <DeleteForm 
                  inventoryID={favorite.id}
                  gameTitle={favorite.game_title}
                  voter={favorite.voter}
                  votes={favorite.votes}
                  />
                </div>
              </CardBody>
          </Card>
          <br/>
        </center>
      ))}
    </div>
  )
};


export default Favorites