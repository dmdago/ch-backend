const Container = require("./container.js");
console.clear();

const products = new Container("products.txt");

// Test metodo save

products.save({
  title: "Keyboard",
  price: 150,
  thumbnail: "keyboard.jpg",
});

products.save({
  title: "Mouse",
  price: 50,
  thumbnail: "mouse.jpg",
});

//Test de método getAll
//products.getAll();

//Test de método getById
// products.getById(1);

//Test de método deleteById
// products.deleteById(2);

//Test de método deleteAll
// products.deleteAll();

// products.generateId();
