import React, { Component} from 'react';
import { Container } from 'react-bootstrap'
import Subtotal from './components/Subtotal/Subtotal'
import Savings from './components/Savings/Savings'
import Taxes from './components/Taxes/Taxes'
import Total from './components/Total/Total'
import PurchaseDetails from './components/PurchaseDetails/PurchaseDetails'
import DiscountCode from './components/DiscountCode/DiscountCode'
import { connect } from 'react-redux'
import { handleChange } from './actions/promoCodeActions'
import './App.css';


class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      total: 100,
      savings: -3.55,
      taxes: 0,
      totalFinale: 0,
      disablePromoButton: false,
    }
  }

  componentDidMount() {
    this.setState({
      taxes: (this.state.total + this.state.savings) * 0.075
    },
    function() {
      this.setState({
        totalFinale: this.state.total + this.state.savings + this.state.taxes
      })
    })
  }

  giveDiscountHandler = () => {
    if(this.props.promoCode === 'DISCOUNT') {
      this.setState({
        estimatedTotal: this.state.estimatedTotal * 0.9
      },
      function() { 
        this.setState({ 
          disablePromoButton: true
        })
      }
      )
    }
  }

  render(){
    return (
    <div className="container">
      <Container className="purchase-card" >
        <Subtotal price={this.state.total.toFixed(2)} />
        <Savings price={this.state.savings}/>
        <Taxes taxes={this.state.taxes.toFixed(2)} /><hr />
        <Total total={this.state.totalFinale.toFixed(2)} />
        <PurchaseDetails price={this.state.totalFinale.toFixed(2)}/>
        <hr />
        <DiscountCode  giveDiscount={() => this.giveDiscountHandler()}
        isDisabled={this.state.disablePromoButton}
        />
      </Container>
    </div>

    )
  }
  
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
})

export default connect(mapStateToProps,{handleChange})(App);
