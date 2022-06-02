// Incluyo modulo filesystem
const fs = require("fs");

// Declaro clase container
class Container {
  constructor(fileName) {
    this.filename = fileName;
    this.createFileIfNotExists();
  }

  // Declaro metodo createFileIfNotExists para crear el archivo si no existe
  async createFileIfNotExists() {
    try {
      await fs.promises.readFile(this.filename, "utf-8");
    } catch (error) {
      error.code === "ENOENT"
        ? this.createFile()
        : console.log(
            `Error Code: ${error.code} | There was an unexpected error when trying to read ${this.filename}`
          );
    }
  }

  // Declaro metodo para crear un archivo si no existe
  async createFile() {
    fs.writeFile(this.filename, "[]", (error) => {
      error
        ? console.log(error)
        : console.log(
            `File ${this.filename} was created since it didn't exist in the system`
          );
    });
  }

  // Declaro el metodo getById para obtener detalle de producto por Id
  async getById(id) {
    try {
      const data = await this.getData();
      const jsonData = JSON.parse(data);

      return jsonData.find((product) => product.id === id);
    } catch (error) {
      console.log(
        `Error when retrieving product by Id. Error Code: ${error.code}`
      );
    }
  }

  // Declaro el metodo deleteById para borrar un producto por Id
  async deleteById(id) {
    try {
      const data = await this.getData();
      const jsonData = JSON.parse(data);
      const objToRemove = jsonData.find((product) => product.id === id);

      if (objToRemove) {
        const index = jsonData.indexOf(objToRemove);
        jsonData.splice(index, 1);
        await fs.promises.writeFile(this.filename, JSON.stringify(jsonData));
      } else {
        console.log(`The product with Id ${id} does not exist`);
        return null;
      }
    } catch (error) {
      console.log(
        `Error when deleting product by Id. Error Code: ${error.code}`
      );
    }
  }

  // Declaro el metodo save para guardar un producto
  async save(object) {
    try {
      const allData = await this.getData();
      const jsonData = JSON.parse(allData);

      object.id = jsonData.length + 1;
      jsonData.push(object);

      await fs.promises.writeFile(this.filename, JSON.stringify(jsonData));
      console.log(`Product saved`);
      return object.id;
    } catch (error) {
      console.log(`Error when saving a product. Error Code: ${error.code}`);
    }
  }

  // Declaro el metodo deleteAll para eliminar todos los productos
  async deleteAll() {
    await fs.promises.writeFile(this.filename, "[]", (error) => {
      error ? console.log(error) : console.log(`Products deleted`);
    });
  }

  // Declaro el metodo getData para obtener el contenido del archivo
  async getData() {
    const data = await fs.promises.readFile(this.filename, "utf-8");
    return data;
  }

  // Declaro el metodo getAll para obtener el detalle de todos los productos
  async getAll() {
    const data = await this.getData();
    return JSON.parse(data);
  }
}

module.exports = Container;
