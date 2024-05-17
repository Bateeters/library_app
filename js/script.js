const library = document.querySelector('#library')
const myLibrary = [];

function Book(title, author, pageCount, read){
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${pageCount} pages, ${this.read}`
    };
}

const book1 = new Book('First Book', 'Some dude', 100, 'Not read yet');
const book2 = new Book('Moby Dick', 'Mark Twain', 423, 'Have read');
myLibrary.push(book1);
myLibrary.push(book2);


function addBookToLibrary(title, author, pageCount, read) {

    const newBook = new Book()
}

function showBooks(){
    for (let i = 0; i < myLibrary.length; i++) {
            const newBook = document.createElement("div");

            newBook.innerHTML = 
            `<h4>${myLibrary[i].title} by ${myLibrary[i].author}</h4>
            <p>${myLibrary[i].pageCount} pages, ${myLibrary[i].read}`

            newBook.setAttribute("class", "book");
            
            library.appendChild(newBook);
            console.log(myLibrary[i]);
        }    
}

window.onload = function(){
    showBooks();
}