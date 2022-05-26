// Clase usuario
class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }

  // Metodo para obtener nombre completo
  getFullName() {
    return `${this.nombre} ${this.apellido}`;
  }

  // Metodo para agregar mascota
  addMascota(mascota) {
    this.mascotas.push(mascota);
  }

  // Metodo para contar mascotas
  countMascotas() {
    return this.mascotas.length;
  }

  // Metodo para agregar libro
  addBook(book, autor) {
    this.libros.push({ nombre: book, autor: autor });
  }

  // Metodo para obtener nombre de los libros
  getBookNames() {
    let arrayLibro = [];
    arrayLibro = this.libros.map((libro) => libro.nombre);
    return arrayLibro;
  }
}

// Creo usuario
let usuario = new Usuario(
  "diego",
  "dagostino",
  [
    {
      nombre: "The C programming language",
      autor: "Brian Kernighan, Dennis Ritchie",
    },
  ],
  ["Bola de Nieve", "Ayudante de Santa", "Lassie"]
);

// Imprimo objeto usuario
console.log("|######| Objeto usuario |######|");
console.log(usuario);
// Imprimo nombre completo del usuario
console.log("|######| Nombre completo del usuario |######|");
console.log(usuario.getFullName());
// Agrego mascota
usuario.addMascota("Flipper");
// Imprimo cantidad de mascotas
console.log("|######| Cantidad de mascotas |######|");
console.log(usuario.countMascotas());
// Agrego libro
usuario.addBook("Clean Code", "Robert Martin");
console.log("|######| Listado de nombres de libros |######|");
// Imprimo objeto con nombres de los libros
console.log(usuario.getBookNames());
