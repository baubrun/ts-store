import React, { Component } from "react";
import { Product, Order } from "./data/entities";
import ProductList from "./components/ProductList";

let testData: Product[] = [1, 2, 3, 4, 5].map((num) => ({
  id: num,
  name: `Prod${num}`,
  category: `Cat${num % 2}`,
  description: `Product ${num}`,
  price: 100,
}));

interface Props {
  // no props required
}
interface State {
  order: Order;
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      order: new Order(),
    };
  }

  addToOrder = (product: Product, quantity: number) => {
    this.setState((state) => {
      state.order.addProduct(product, quantity);
      return state;
    });
  };

  get categories(): string[] {
    return [...new Set(testData.map((p) => p.category))];
  }

  render() {
    return (
      <div className="App">
        <ProductList
          products={testData}
          categories={this.categories}
          order={this.state.order}
          addToOrder={this.addToOrder}
        />
      </div>
    );
  }
}

export default App;
