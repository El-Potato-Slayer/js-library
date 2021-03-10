let myLibrary = [
  { author: "Jack", title: "Title of book", pages: 400, hasRead: false },
  { author: "Mary", title: "A book", pages: 200, hasRead: true }
]

function Book(author, title, pages, hasRead) {
  this.author = author
  this.title = title
  this.pages = pages
  this.hasRead = hasRead
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

for (let i = 0; i < myLibrary.length; i++) {
  bookList = document.getElementById('book-list')
  book = bookList.appendChild(document.createElement('div'))
  book.classList.add('card')
  title = book.appendChild(document.createElement('h4'))
  author = book.appendChild(document.createElement('p'))
  pages = book.appendChild(document.createElement('p'))
  hasRead = book.appendChild(document.createElement('p'))
  title.innerHTML = `${myLibrary[i].title}`
  author.innerHTML = `Author: ${myLibrary[i].author}`
  pages.innerHTML = `Number of pages: ${myLibrary[i].pages}`
  hasRead.innerHTML = `Has read? ${myLibrary[i].hasRead}`
}

let addBook = document.getElementById("submit")

addBook.addEventListener('click', e => {
  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  let book = new Book(title, author, pages, false)
  addBookToLibrary(book)
  book = bookList.appendChild(document.createElement('div'))
  book.classList.add('card')
  bookTitle = book.appendChild(document.createElement('h4'))
  bookTitle.innerHTML = title
  // author = book.appendChild(document.createElement('p'))
  // pages = book.appendChild(document.createElement('p'))
  // hasRead = book.appendChild(document.createElement('p'))
})