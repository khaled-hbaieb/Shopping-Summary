import React, { Component} from 'react';
import { Container } from 'react-bootstrap'
import Subtotal from './components/Subtotal/Subtotal'
import Savings from './components/Savings/Savings'
import Taxes from './components/Taxes/Taxes'
import Total from './components/Total/Total'
import './App.css';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      total: 100,
      savings: -3.55,
      taxes: 0,
      totalFinale: 0,
    }
  }

  render(){
    return (
    <div className="container">
      <Container className="purchase-card" >
        <Subtotal price={this.state.total.toFixed(2)} />
        <Savings price={this.state.savings}/>
        <Taxes taxes={this.state.taxes.toFixed(2)} /><hr />
        <Total total={this.state.totalFinale} />
      </Container>
    </div>

    )
  }
  
}

export default App;
