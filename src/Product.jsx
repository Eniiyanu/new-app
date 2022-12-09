import React, { Component } from "react";
import { render } from "react-dom";

export class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    return (
      <div className="col-lg-4">
        <div className="card m-5">
          <div className="card-body">
            <div className="text-muted">
              #{this.state.product.id}
              <span className="pull-right hand-icon"  onClick={() => {this.props.onDelete(this.state.product)}}>
                <i className="fa fa-times "></i>
              </span>
            </div>

            <h5 className="pt-5 border-top">
              {this.state.product.productName}
            </h5>

            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer text-right">
            <div className="quantity">
              <span className="badge black">{this.state.product.quantity}</span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 20);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>

            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
