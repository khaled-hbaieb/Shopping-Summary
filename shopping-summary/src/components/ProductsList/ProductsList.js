import React, { Component } from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import axios from 'axios';
import './index.css'

class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      items: [],
    }
  }
  async componentDidMount() {
    let prod =  await axios.get('https://fakestoreapi.com/products')
    this.setState({
      items: prod.data
    })
    console.log('data',  this.state.items);
  }
    render() {
        return (
          <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold text-center my-5'>Our bestsellers</h2>
      <p className='grey-text text-center w-responsive mx-auto mb-5'>
        
        Here is a full list of our bestsellers 
      </p>
     
          {this.state.items.map((item, id) => {
            return (
              <div className="container">

<MDBCard style={{ width: "16rem", height: "20rem"}}>
        <MDBCardImage className="img-fluid" src={item.image} waves />
        <MDBCardBody>
          <MDBCardTitle>{item.title}</MDBCardTitle>
          <MDBCardText>
            {item.description}
          </MDBCardText>
          <MDBBtn href="#">Add to Cart</MDBBtn>
            <MDBCardText>$ {item.price}</MDBCardText>
        </MDBCardBody>
      </MDBCard>
              </div>
          )
        })}
            
      
            
        </section>
        );
    }
}

export default ProductsList;