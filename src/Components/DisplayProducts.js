import React, { Component } from 'react'
import Menu from './Menu';
import { withAuthenticator, AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

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
    console.log('IN');  
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
        <div>
        <h1> Add a Product </h1>

        <form onSubmit={this.handlesubmit} class="form-container">
          <input type="text" className="login-style" name="productId" placeholder="Enter Productor Id" onChange={this.handlechnage} />
          <input type="text" className="login-style" name="productShortName" placeholder="Enter Product Short Name" onChange={this.handlechnage} />
          <input type="text" className="login-style" name="productLongName" placeholder="Enter Product Long Name" onChange={this.handlechnage} />
          <input type="text" className="login-style" name="productOriginalPrice" placeholder="Enter Original Price" onChange={this.handlechnage} />
          <input type="text" className="login-style" name="productSalePrice" placeholder="Enter Sale Price" onChange={this.handlechnage} />
          <input type="text" className="login-style" name="productStatus" placeholder="Enter Product Status" onChange={this.handlechnage} />

          <button class="btn"> Submit  </button>
        </form>
        

        </div>
    )
  }
}
