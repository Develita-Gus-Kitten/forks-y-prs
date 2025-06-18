import products from "./products.json";

class Product {
  constructor(name: string, price: number, id?: number) {
    this.name = name;
    this.price = price;
    this.id = id;
  }
  id: number;
  name: string;
  price: number;

  // agregando el metodo estatico "findProductsBelow"
  static findProductsBelow(precioBase: number) {
    const productosFiltrados = products.filter((producto) => {
      return producto.price <= precioBase;
    });
    return productosFiltrados;
  }
}

class User {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  products: Product[] = [];
  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  addProducts(newProducts: Product[]) {
    this.products = this.products.concat(newProducts);
  }
}
export { User, Product };
