import Axios from "axios";
import { Product, Order } from "./entities";

const protocol = "http";
const hostname = "localhost";
const port = 4600;

const urls = {
  products: `${protocol}://${hostname}:${port}/products`,
  orders: `${protocol}://${hostname}:${port}/orders`,
};

class httpService {

  loadProducts(cb: (products: Product[]) => void): void {
    Axios.get(urls.products).then((res) => cb(res.data));
  }

  storeOrder(order: Order, cb: (id: number) => void): void {
    let orderData = {
      items: [...order.orderItems.values()].map((item) => ({
        productId: item.product.id,
        productName: item.product.name,
        quantity: item.quantity,
      })),
    };
    
    Axios.post(urls.orders, orderData).then((res) => cb(res.data.id));
  }
}


export default httpService