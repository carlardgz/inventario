export default class Inventory {
  constructor() {
    this.products = new Array();
  }

  add(product) {
    this.products.push(product);
    console.log(this.products);

    if (this.products.length > 20) {
      return false;
    }
  }

  searchPosition(code) {
    for (let i = 0; i <= this.products.length; i++) {
      if (this.products[i].code === code) {
        return i;
      }
      return -1;
    }
  }

  search(code) {
    for (let i = 0; i <= this.products.length; i++) {
      if (this.products[i].code === code) {
        return this.products[i];
      }
      return null;
    }
  }

  delete(code) {
    let position = this.searchPosition(code);

    if (position > -1) {
      for (let i = position; i < this.products.length - 1; i++) {
        this.products[i] = this.products[i + 1];
        this.products.pop();
      }
    }
  }

  toList() {
    return "<p> todos los elementos HTML</p>";
  }
}
