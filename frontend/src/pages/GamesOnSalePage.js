import '../App.css';
import React, { Component } from 'react';
import Sales from '../components/sale';

class GamesOnSalePage extends Component {
    render() {  
      return (
            <Sales sales={this.state.sales} />
        )
    }

    state = {
        sales: []
    };

    componentDidMount() {
            fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15", {
            })
            .then(res => res.json())
            .then((data) => {
                this.setState({ sales: data })
            })
            .catch(console.log)
    };
  }


export default  GamesOnSalePage;