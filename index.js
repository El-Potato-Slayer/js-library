let myLibrary = [
  { author: "Jack", title: "Title of book", pages: 400, hasRead: false },
  { author: "Hoppie", title: "Ma se poes", pages: 3, hasRead: false },
  { author: "Mary", title: "A book", pages: 200, hasRead: false }
]
let bookList = document.getElementById('book-list')
let addBook = document.getElementById("submit")
let removeBtns;
let editBtns;

function Book(author, title, pages, hasRead) {
  this.author = author
  this.title = title
  this.pages = pages
  this.hasRead = hasRead
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

function addClickEventForDelete(buttons) {
  buttons.forEach((btn,index) => {
    btn.addEventListener('click', () =>{
      myLibrary.splice(index,1)
      btn.parentElement.remove()
    })
  })
}

function addClickEventForEdit(buttons) {
  buttons.forEach((btn,index) => {
    btn.addEventListener('click', () =>{
      myLibrary[index].hasRead = true
      readElement = document.querySelectorAll('.card')[index].children[3]
      readElement.innerHTML = `Has read? ${myLibrary[index].hasRead}`
    })
  })
}

function createBookCard(bookList, book){
  card = bookList.appendChild(document.createElement('div'))
  card.classList.add('card')
  card.appendChild(document.createElement('h4')).innerHTML = `${book.title}`;
  card.appendChild(document.createElement('p')).innerHTML = `Author: ${book.author}`;
  card.appendChild(document.createElement('p')).innerHTML = `Number of pages: ${book.pages}`;
  card.appendChild(document.createElement('p')).innerHTML = `Has read? ${book.hasRead}`;
  return card
}

function createButton(container, btnName) {
  dltBtn = container.appendChild(document.createElement('button'))
  dltBtn.innerHTML = btnName
  dltBtn.classList.add(btnName.toLowerCase())
}

for (let i = 0; i < myLibrary.length; i++) {
  let bookCard = createBookCard(bookList, myLibrary[i])
  dltBtn = bookCard.appendChild(document.createElement('button'))
  dltBtn.innerHTML = "Delete" 
  dltBtn.classList.add('delete')
  readBtn = bookCard.appendChild(document.createElement('button'))
  readBtn.innerHTML = "Read" 
  readBtn.classList.add('read')
}

addBook.addEventListener('click', () => {
  title = document.getElementById('title').value
  author = document.getElementById('author').value
  pages = document.getElementById('pages').value
  let book = new Book(title, author, pages, false)
  addBookToLibrary(book)
  bookCard = createBookCard(bookList, book)
  createButton(bookCard, "Delete")
  removeBtns = document.querySelectorAll('.delete')
  addClickEventForDelete(removeBtns)
  createButton(bookCard, "Read")
  editBtns = document.querySelectorAll('.read')
  addClickEventForEdit(editBtns)
})

removeBtns = document.querySelectorAll('.delete')

addClickEventForDelete(removeBtns)

editBtns = document.querySelectorAll('.read')

addClickEventForEdit(editBtns)