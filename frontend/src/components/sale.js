import React from 'react';
import QueryForm from './QueryForm';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

    const Sales = ({ sales }) => {
      return (
        <div class="games">
          <br/>
          <br/>
          <center><h1>Check out these Games on Sale!</h1></center>
          <br/>
          <br/>
          {sales.map((sale) => (
            <center>
              <Card style={{width:"20%", height:"20%"}} body inverse color ="secondary">
                <center><CardImg style={{width:"60%", height:"40%"}}src={sale.thumb} alt="Card image cap"/></center>
                  <CardBody>
                    <CardTitle tag="h2">{sale.title}</CardTitle>
                    <CardSubtitle tag="h6">Normal Price: ${sale.normalPrice}</CardSubtitle>
                    <CardSubtitle tag="h6">Sale Price: ${sale.salePrice}</CardSubtitle>
                    <CardText>{sale.savings}% Off!</CardText>
                    <CardText>Steam Rating: {sale.steamRatingText}</CardText>
                    <QueryForm 
                    game_title={sale.title}
                    />
                  </CardBody>
              </Card>
              <br/>
            </center>
          ))}
        </div>
      )
    };

    export default Sales;