const Container = require("./container.js");
const products = new Container("products.txt");

const test = async () => {
  // Test metodo save
  const prod1 = await products.save({
    title: "Keyboard",
    price: 150,
    thumbnail: "keyboard.jpg",
  });

  console.log(`First product Id: ${prod1}`);

  const prod2 = await products.save({
    title: "Mouse",
    price: 50,
    thumbnail: "mouse.jpg",
  });

  console.log(`Second product Id: ${prod2}`);

  //Test de método getAll
  const allProds = await products.getAll();
  console.log(`All products: ${JSON.stringify(allProds)}`);

  //Test de método getById
  const prodById = await products.getById(1);
  console.log(`Product detalis: ${JSON.stringify(prodById)}`);

  //Test de método deleteById
  await products.deleteById(2);

  //Test de método deleteAll
  await products.deleteAll();
};

test();
