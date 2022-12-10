import React, { Component } from "react";
import { render } from "react-dom";
import Product from "./Product";
export class ShoppingCart extends Component {
  state = {
    products: [],
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}>
                <button className="btn btn-primary text-right buy">
                  Buy Now
                </button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
  //render completed
  componentDidMount = async () => {
    var response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    var prods = await response.json();
    console.log(prods);
    this.setState({ products: prods });

    // promise.then((response) => {
    //   console.log(response);

    //   var promise2 = response.json();
    //   promise2.then((prods) => {
    //     console.log(prods);

    //     this.setState({products:prods});
    //   });
    // });
  };
  handleIncrement = (product, maxValue) => {
    //console.log("handle increment" ,product)
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(index);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    //console.log("handle decrement",product)
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    //console.log(index);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      this.setState({ products: allProducts });
    }
  };
  // Handles Delete
  // 1. find the index of the product to delete by looking up its index in the array
  //    - use the findIndex() function to find the index of the product in the array
  //    - if the product does not exist in the array, findIndex() will return -1
  // 2. if the product exists in the array, remove it by slicing the array
  //    - use the splice() function to remove the product from the array
  //    - splice() takes the index of the product to remove and the number of products to remove

  //    - splice() takes the index of the product to remove and the number of products to remove
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (index >= 0) {
      allProducts.splice(index, 1);
      this.setState({ products: allProducts });
    }
  };
}

export default ShoppingCart;
