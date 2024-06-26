
import bookStore from "./model/bookstore";
import { book } from "./model/book";

    const library = new bookStore();
    const libro = new book ("Intensamente","pixar",2000,"familiar","Pelicula Animada");
    const librodos = new book ("DeadPool","marvel",3000,"accion","Pelicula ciencia ficcion");

    library.agregarBook(libro);
    library.agregarBook(librodos);
    library.mostrarBook();