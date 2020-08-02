import React, { Component, ChangeEvent } from "react";
import { Product } from "../data/entities";

interface Props {
  product: Product;
  cb: (product: Product, qty: number) => void;
}

interface State {
  qty: number;
}

class ProductItem extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      qty: 1,
    };
  }

  handleQtyChange = (evt: ChangeEvent<HTMLSelectElement>): void => {
    this.setState({ qty: Number(evt.target.value) });
  };

  handleAddToCart = (): void => {
    this.props.cb(this.props.product, this.state.qty);
  };

  render() {
    return (
      <div className="card m-1 p-1 bg-light">
        <h4>
          {this.props.product.name}
          <span className="badge badge-pill badge-primary float-right">
            ${this.props.product.price.toFixed(2)}
          </span>
        </h4>
        <div className="card-text bg-white p-1">
          {this.props.product.description}
          <button
            className="btn btn-success btn-sm float-right"
            onClick={this.handleAddToCart}
          >
            Add To Cart
          </button>
          <select
            className="form-control-inline float-right m-1"
            onChange={this.handleQtyChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    );
  }
}

export default ProductItem;
