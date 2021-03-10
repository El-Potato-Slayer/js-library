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
  book.appendChild(document.createElement('h4')).innerHTML = `${myLibrary[i].title}`;
  book.appendChild(document.createElement('p')).innerHTML = `Author: ${myLibrary[i].author}`;
  book.appendChild(document.createElement('p')).innerHTML = `Number of pages: ${myLibrary[i].pages}`;
  book.appendChild(document.createElement('p')).innerHTML = `Has read? ${myLibrary[i].hasRead}`;
  btn = book.appendChild(document.createElement('button'))
  btn.innerHTML = "Delete" 
  btn.classList.add('delete')
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
  bookAuthor = book.appendChild(document.createElement('p'))
  bookAuthor.innerHTML = author
  bookPages = book.appendChild(document.createElement('p'))
  bookPages.innerHTML = pages
  hasReadBook = book.appendChild(document.createElement('p'))
  hasReadBook.innerHTML = "false"
  
})

let removeBtns = document.querySelectorAll('.delete')
removeBtns.forEach((btn,index) =>{
  btn.addEventListener('click', () =>{
    myLibrary.splice(index,1)
    console.log(myLibrary)
    btn.parentElement.remove()
  })
})
