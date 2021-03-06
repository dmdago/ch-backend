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
            `Error when trying to read the file. | Error Code: ${error.code}`
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
      const jsonData = await this.getData();
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
      const jsonData = await this.getData();
      const objToRemove = jsonData.find((product) => product.id === id);

      if (objToRemove) {
        const index = jsonData.indexOf(objToRemove);
        jsonData.splice(index, 1);
        await fs.promises.writeFile(
          this.filename,
          JSON.stringify(jsonData, null, 2)
        );
        console.log(`The product with Id ${id} was deleted successfully`);
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
      const jsonData = await this.getData();

      object.id =
        jsonData.length - 1 >= 0 ? jsonData[jsonData.length - 1].id + 1 : 1;

      jsonData.push(object);

      await fs.promises.writeFile(
        this.filename,
        JSON.stringify(jsonData, null, 2)
      );
      console.log(`Product saved`);
      return object.id;
    } catch (error) {
      console.log(`Error when saving a product. Error Code: ${error.code}`);
    }
  }

  // Declaro el metodo deleteAll para eliminar todos los productos
  async deleteAll() {
    await fs.writeFile(this.filename, "[]", (error) => {
      error ? console.log(error) : console.log(`Products deleted`);
    });
  }

  // Declaro el metodo getData para obtener el contenido del archivo
  async getData() {
    const data = await fs.promises.readFile(this.filename, "utf-8");
    return JSON.parse(data);
  }

  // Declaro el metodo getAll para obtener el detalle de todos los productos
  async getAll() {
    const data = await this.getData();
    return data;
  }
}

module.exports = Container;
