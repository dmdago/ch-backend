class Products {
  products = [];
  id = 0;

  //Carga inicial de datos
  constructor() {
    this.newProduct({
      title: "Keyboard",
      price: 249,
      thumbnail: "keyboard.gif",
    });
    this.newProduct({
      title: "Computer Mouse",
      price: 107,
      thumbnail: "computer mouse.png",
    });
    this.newProduct({
      title: "Graphic Tablet",
      price: 178,
      thumbnail: "graphic tablet.jpg",
    });
    this.newProduct({
      title: "Touchscreen",
      price: 131,
      thumbnail: "touchscreen.gif",
    });
    this.newProduct({
      title: "Barcode Reader",
      price: 44,
      thumbnail: "barcode reader.jpg",
    });
    this.newProduct({
      title: "Microphone",
      price: 66,
      thumbnail: "microphone.png",
    });
    this.newProduct({
      title: "Webcam",
      price: 30,
      thumbnail: "webcam.jpg",
    });
    this.newProduct({
      title: "Joystick",
      price: 120,
      thumbnail: "joystick.png",
    });
    this.newProduct({
      title: "Digital Camera",
      price: 217,
      thumbnail: "digital camera.gif",
    });
    this.newProduct({
      title: "Printer",
      price: 239,
      thumbnail: "printer.gif",
    });
  }

  // Metodo agregar producto
  newProduct(products) {
    this.products.push({
      title: products.title,
      price: products.price,
      thumbnail: products.thumbnail,
      id: ++this.id,
    });

    return this.products[this.id - 1];
  }

  // Metodo obtener producto
  getProduct(id) {
    let prod = this.products.find((products) => {
      return products.id == id;
    });
    if (prod == undefined) return { error: "Producto no encontrado." };

    return prod;
  }

  // Metodo obtener productos
  get getProducts() {
    if (this.products.length == 0)
      return { error: "No hay producto cargados." };

    return this.products;
  }

  // Metodo actualizar producto
  updateProduct(data, id) {
    let index = this.products.findIndex((prod) => {
      return prod.id === id;
    });
    let prdData = { ...data, id: parseInt(id) };

    return (this.products[index] = prdData);
  }

  // Metodo eliminar producto
  deleteProduct(id) {
    let index = this.products.findIndex((prod) => {
      if (prod.id == id) {
        return prod;
      }
    });
    if (index == -1) return { error: "Producto no encontrado." };

    return this.products.splice(index, 1)[0];
  }
}

module.exports = new Products();
