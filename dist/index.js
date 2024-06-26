"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookstore_1 = __importDefault(require("./model/bookstore"));
const book_1 = require("./model/book");
const library = new bookstore_1.default();
const libro = new book_1.book("Intensamente", "pixar", 2000, "familiar", "Pelicula Animada");
const librodos = new book_1.book("DeadPool", "marvel", 3000, "accion", "Pelicula ciencia ficcion");
library.agregarBook(libro);
library.agregarBook(librodos);
library.mostrarBook();
