import React, { Component } from "react";
import Header from "./Header";
import ProductItem from "./ProductItem";
import CategoryList from "./CategoryList";
import { Product, Order } from "../data/entities";

interface Props {
  categories: string[];
  order: Order;
  products: Product[];
  addToOrder: (product: Product, qty: number) => void;
}

interface State {
  selectedCategory: string;
}

class ProductList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedCategory: "All",
    };
  }
  
  get products(): Product[] {
    return this.props.products.filter(
      (p) =>
        this.state.selectedCategory === "All" ||
        p.category === this.state.selectedCategory
    );
  }
  selectCategory = (cat: string) => {
    this.setState({ selectedCategory: cat });
  };

  render() {
    return (
      <div>
        <Header order={this.props.order} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 p-2">
              <CategoryList
                categories={this.props.categories}
                selected={this.state.selectedCategory}
                selectCategory={this.selectCategory}
              />
            </div>
            <div className="col-9 p-2">
              {this.products.map((p, idx) => (
                <ProductItem
                  key={idx}
                  product={p}
                  cb={this.props.addToOrder}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default ProductList
