import React, { Component } from "react";
import HttpService from "./data/httpService";
import { addProduct } from "./rdx/actionCreators";
import { ConnectedProductList } from "./rdx/connectors";
import store from "./rdx/store";


interface Props {
  // no props required
}

class App extends Component<Props> {
  private httpService = new HttpService();

  constructor(props: Props) {
    super(props);
    this.httpService.loadProducts((data) =>
      store.dispatch(addProduct(...data))
    );
  }

  render() {
    return (
      <div className="App">
        <ConnectedProductList />
      </div>
    );
  }
}
export default App;
