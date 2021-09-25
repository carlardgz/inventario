import Interface from "./interface.js";
import Inventory from "./inventory.js";
import Product from "./product.js";

let inventory1 = new Inventory();
let interface1 = new Interface();

const btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener("click", () => {
  let code = document.getElementById("txtCode").value;
  let name = document.getElementById("txtName").value;
  let quantity = document.getElementById("txtQuantity").value;
  let price = document.getElementById("txtPrice").value;

  let p = new Product(code, name, quantity, price);

  inventory1.add(p);
  interface1.newInterface(p);
});

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", () => {
  let code = document.getElementById("txtCode");
});
