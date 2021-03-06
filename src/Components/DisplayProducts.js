import React, { Component } from 'react'
import Menu from './Menu';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import styled from "styled-components";
import { device } from "./device";
import HelpImage1 from "../Images/help.jpg";
import HelpImage from "../Images/AI.jpg";

const Container = styled.div`
        display: flex;
        flex-direction:row;
        justify-content: center;
        align-items: center;
        @media ${device.tablet} {
          align-content: center;
          justify-content: center;
        }
    `;

export default class DisplayProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: '',
      productShortName: '',
      productLongName: '',
      productOriginalPrice:'',
      productSalePrice: '',
      productStatus:''
    }
    this.handlechnage = this.handlechnage.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
}

  handlesubmit(e) {
    e.preventDefault();
    const { productId, productShortName, productLongName, productOriginalPrice, productSalePrice, productStatus } = this.state;
    fetch('https://api.thecloudthoughts.com/addProduct', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify({
        "productId" : productId,
        "productShortName": productShortName,
        "productLongName": productLongName,
        "originalPrice": productOriginalPrice,
        "salesPrice": productSalePrice,
        "productStatus":productStatus
      })
    })
    .then(res => console.log(res)) 
  }
  
handlechnage(e) {
      if (e.target.name === 'productId') {
          this.setState({ productId: e.target.value })
      } else if (e.target.name === 'productShortName') {
          this.setState({ productShortName: e.target.value })
          
      } else if (e.target.name === 'productLongName') {
          this.setState({ productLongName: e.target.value })
      } else if (e.target.name === 'productOriginalPrice') {
          this.setState({ productOriginalPrice: e.target.value })
      } else if (e.target.name === 'productSalePrice') {
          this.setState({ productSalePrice: e.target.value })
      }else if (e.target.name === 'productStatus') {
        this.setState({ productStatus: e.target.value })
    }
}
  render() {
      
    
    return (
      <Container>
          <form onSubmit={this.handlesubmit} className="form-style-4" action="" method="post">
            <label for="productId">
            <span>Product Id</span><input type="text" name="productId" required="true" onChange={this.handlechnage} />
            </label>
            <label for="productShortName">
            <span>Product Short Name</span><input type="text" name="productShortName" required="true" onChange={this.handlechnage} />
            </label>
            <label for="productLongName">
            <span>Product Long Name</span><input type="text" name="productLongName" required="true" onChange={this.handlechnage} />
            </label>
            <label for="productOriginalPrice">
            <span>Product Original Price</span><input type="text" name="productOriginalPrice" required="true" onChange={this.handlechnage} />
            </label>
            <label for="productSalePrice">
            <span>Product Sale Price</span><input type="text" name="productSalePrice" required="true" onChange={this.handlechnage} />
            </label>
            <label for="productStatus">
            <span>Product Status</span><input type="text" name="productStatus" required="true" onChange={this.handlechnage} />
            </label>
            <label for="field4">
            <span>Message to Us</span><textarea name="field4" onkeyup="adjust_textarea(this)" required="true"></textarea>
            </label>
            <label>
            <span> </span><input type="submit" onClick={this.handlesubmit} value="Send it over !" />
            </label>
        </form>
        </Container>
    )
  }
}
