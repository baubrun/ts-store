export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
};

export class OrderItem {
  constructor(public product: Product, public quantity: number) {}

  get total(): number {
    return this.product.price * this.quantity;
  }
}


export class Order {
    private items = new Map<number, OrderItem>()

    constructor(initialitems?: OrderItem[]){
        if (initialitems){
            initialitems.forEach(item => this.items.set(item.product.id, item))
        }
    }

    public removeProduct(id: number){
        this.items.delete(id)
    }

    public addProduct(prod: Product, quantity: number){
        if (this.items.has(prod.id)){
            this.removeProduct(prod.id)
        } else {
            this.items.set(prod.id, new OrderItem(prod, quantity))
        }
    }

    get orderItems(): OrderItem[] {
        return [...this.items.values()]
    }

    get productCount(): number {
        return [...this.items.values()].reduce((total, item) => total += item.quantity, 0)
    }

    get total(): number {
        return [...this.items.values()].reduce((total, item) => total += item.total, 0)
    }
}