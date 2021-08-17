import React from 'react'
import QueryForm from './QueryForm';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


    const Gems = ({ gems }) => {
      return (
        <div class="games">
          <br/>
          <br/>
          {gems.map((gem) => (
            <center>
              <Card style={{width:"20%", height:"20%"}} body inverse color ="secondary">
                <center><CardImg style={{width:"60%", height:"40%"}}src={gem.thumb} alt="Card image cap"/></center>
                  <CardBody>
                    <CardTitle tag="h2">{gem.external}</CardTitle>
                    <CardSubtitle tag="h6">Cheapest Price: ${gem.cheapest}</CardSubtitle>
                    <br/>
                    <QueryForm 
                    game_title={gem.external}
                    />
                  </CardBody>
              </Card>
              <br/>
            </center>
          ))}
        </div>
      )
    };

    export default Gems;