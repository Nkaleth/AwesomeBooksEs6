/* exporting modules */

import { loadDataLs, saveDataLs } from './modules/localStorage.js';
import Book from './modules/classes.js';

const form = document.querySelector('.form');
const { title, author } = form.elements;

/* Loading books from Local Storage */
let library = loadDataLs();
Book.loadBooks(library);

/* Adding a new book */

const addBook = (e) => {
  e.preventDefault();
  const bookTitle = title.value;
  const bookAuthor = author.value;
  const newBook = new Book(bookTitle, bookAuthor);
  library.push(newBook);
  saveDataLs(library);
  Book.loadBooks(library);
  form.reset();
};

form.addEventListener('submit', addBook);

/* Removing a Book */

const section = document.querySelector('.bookWraper');
section.addEventListener('click', (event) => {
  const { target } = event;
  if (target.type === 'submit') {
    const { id } = target;
    const parents = target.parentElement;
    parents.remove();
    library = Book.removeBook(library, id);
    saveDataLs(library);
    Book.loadBooks(library);
  }
});

/* Navigation */