const library = document.querySelector('#library');
const newBookBtn = document.querySelector('.newBookBtn');
const bookForm = document.querySelector('#hideForm');

const myLibrary = [];

// Book Object Constructor
function Book(title, author, pageCount, read){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${pageCount} pages, ${this.read}`
    };
}

// creating and adding books to "myLibrary" array
const book1 = new Book('First Book', 'Some dude', 100, 'Not read yet');
const book2 = new Book('Moby Dick', 'Mark Twain', 423, 'Have read');
myLibrary.push(book1);
myLibrary.push(book2);

// Add book to library list
function addBookToLibrary(title, author, pageCount, read) {
}

// Display books in "library" div
function showBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
            const newBook = document.createElement("div");

            newBook.innerHTML = 
            `<h4>${myLibrary[i].title} by ${myLibrary[i].author}</h4>
            <p>${myLibrary[i].pageCount} pages, ${myLibrary[i].read}`

            newBook.setAttribute("class", "book");
            
            library.appendChild(newBook);
            console.log(myLibrary[i].info());
        }    
}

// Used to display books in library on page load
window.onload = function(){
    showBooks();
}

newBookBtn.addEventListener("click", () => {
    bookForm.setAttribute("id", "showForm");
})