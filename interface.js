export default class Interface {
  newInterface(product) {
    let data = document.getElementById("information");

    data.innerHTML += product.infoHTML();
  }
}
