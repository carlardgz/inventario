export default class Product {
  constructor(code, name, quantity, price) {
    this.code = Number(code);
    this.name = name;
    this.quantity = Number(quantity);
    this.price = Number(price);
    this.total = Number(this.quantity * this.price);
  }

  infoHTML() {
    return `
              <div>
              <h1>Inventario</>
                  <h2>Producto: ${this.name}</h2>
                  <p>Código: ${this.code}</p>
                  <p>Cantidad: ${this.quantity}</p>
                  <p>Precio: ${this.price}</p>
                  <p>Total: ${this.total}</p>
              </div>
          `;
  }
}
