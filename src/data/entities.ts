export type Product = {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
};

export class OrderLine {
  constructor(public product: Product, public quantity: number) {}

  get total(): number {
    return this.product.price * this.quantity;
  }
}


export class Order {
    private lines = new Map<number, OrderLine>()

    constructor(initialLines?: OrderLine[]){
        if (initialLines){
            initialLines.forEach(item => this.lines.set(item.product.id, item))
        }
    }

    public removeProduct(id: number){
        this.lines.delete(id)
    }

    public addProduct(prod: Product, quantity: number){
        if (this.lines.has(prod.id)){
            this.removeProduct(prod.id)
        } else {
            this.lines.set(prod.id, new OrderLine(prod, quantity))
        }
    }

    get orderLines(): OrderLine[] {
        return [...this.lines.values()]
    }

    get productCount(): number {
        return [...this.lines.values()].reduce((total, item) => total += item.quantity, 0)
    }

    get total(): number {
        return [...this.lines.values()].reduce((total, item) => total += item.total, 0)
    }
}