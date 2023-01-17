export default class Book {
  constructor(title, author) {
    this.id = Math.random();
    this.title = title;
    this.author = author;
  }

    add = (library) => {
      library.push(this);
    }

    static removeBook = (library, id) => {
      const libraryFiltered = library.filter((el) => el.id !== id * 1);
      return libraryFiltered;
    }

    static loadBooks = (library) => {
      const bookWraper = document.querySelector('.bookWraper');
      let bookElement = '';
      library.forEach((book) => {
        bookElement += `
                <div class="book">
                <div id="book-title">${book.title} by ${book.author}</div>
                <button id="${book.id}">Remove</button>
                </div>
                <hr> `;
      });
      bookWraper.innerHTML = bookElement.length === 0 ? '<p> No book </p> <hr><br>' : bookElement;
    }
}