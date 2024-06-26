import { book } from "./book";

class bookStore{
    private books: book[];

    constructor() {
        this.books = [];
    }


    //metodo para agregar un libro a la biblioteca
    agregarBook(book: book): void{
        this.books.push(book);
        console.log(`Libro '${book.titulo}' agregado a la biblioteca.`);
    }

    //metodo para eliminar un libro a la biblioteca
    eliminarBook(title: string): void {
        const index = this.books.findIndex(book => book.titulo === titulo);
        if (index !== -1) {
            this.books.splice(index, 1);
            console.log(`Libro '${titulo}' eliminado de la biblioteca.`);
        }else {
            console.log(`Libro '${titulo}' no encontrado en la biblioteca.`);
        }
    }

    //metodo para mostrar todos los libros de la biblioteca
    mostrarBook():void{
        if (this.books.length === 0) {
            console.log(`La biblioteca esta vacia`);
        } else {
            console.log(`La biblioteca esta vacia:`);
            this.books.forEach(book => {
                console.log(`- Titulo: ${book.titulo}, Editorial: ${book.editorial}, precio: ${book.precio}, genero: ${book.genero}, descripcion: ${book.descripcion} `)
            });
        }
    }
}

export default bookStore