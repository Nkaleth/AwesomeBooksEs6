/* exporting modules */

import { loadDataLs, saveDataLs } from './modules/localStorage.js';
import Book from './modules/classes.js';
import { DateTime } from './modules/luxon.js';

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

const list = document.querySelector('#list');
const addNew = document.querySelector('#add-new');
const contact = document.querySelector('#contact');

const librarySection = document.querySelector('.library');
const addBookSection = document.querySelector('.addBook');
const contactSection = document.querySelector('.contactInfo');

list.addEventListener('click', () => {
  librarySection.classList.remove('hide');
  addBookSection.classList.add('hide');
  contactSection.classList.add('hide');
});

addNew.addEventListener('click', () => {
  addBookSection.classList.remove('hide');
  librarySection.classList.add('hide');
  contactSection.classList.add('hide');
});

contact.addEventListener('click', () => {
  librarySection.classList.add('hide');
  addBookSection.classList.add('hide');
  contactSection.classList.remove('hide');
});

/* Date with Luxon */

const Date = () => {
    const option = {
        month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric',
      };
      const now = DateTime.now().toLocaleString(option);
      const time = document.querySelector('.time-text');
      time.innerHTML = now;
}
setInterval(Date, 1000);




 
  