import React, { FunctionComponent } from "react";
import { Order } from "../data/entities";

interface Props {
  order: Order;
}

 const Header: FunctionComponent<Props> = (props) => {
  let count = props.order.productCount;
  return (
    <div className="p-1 bg-secondary text-white text-right">
      {count === 0
        ? "(No Selection)"
        : `${count} product${count > 1 && "s"}, $${props.order.total.toFixed(2)}`}
        {/* : `${count} product(s), $${props.order.total.toFixed(2)}`} */}
      <button className="btn btn-sm btn-primary m-1">Submit Order</button>
    </div>
  );
};

export default Header