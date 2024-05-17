const library = document.querySelector('#library');
const newBookBtn = document.querySelector('.newBookBtn');
const bookForm = document.querySelector('#hideForm');
const submitBtn = document.querySelector('.submitBtn');
const cancelBtn = document.querySelector('.cancelSubmit');

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
const book1 = new Book('Great Expectations', 'Charles Dickens', 544, 'Not read yet');
const book2 = new Book('Moby Dick', 'Herman Melville', 635, 'Have read');
myLibrary.push(book1);
myLibrary.push(book2);

// Add book to library list
function addBookToLibrary(title, author, pageCount, read) {
    const newBook = new Book(title, author, pageCount, read);
    myLibrary.push(newBook);
    showBooks();
}

// Display books in "library" div
function showBooks(){

    // Clear Library list to run through loop again and avoid duplicating books
    library.innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
            const newBook = document.createElement("div");

            newBook.innerHTML = `<div>
            <h4>${myLibrary[i].title} by ${myLibrary[i].author}</h4>
            <p>${myLibrary[i].pageCount} pages, ${myLibrary[i].read}
            </div>

            <div class="bookR"><button>X</button></div>`

            newBook.setAttribute("class", "book");
            
            library.appendChild(newBook);
            console.log(myLibrary[i].info());
        }    
}

// Used to display books in library on page load
window.onload = function(){
    showBooks();
}

// Show new book form
newBookBtn.addEventListener("click", () => {
    bookForm.setAttribute("id", "showForm");
})

// Cancel submit form
cancelBtn.addEventListener("click", () => {
    bookForm.setAttribute("id", "hideForm");
})

// Submit new book form and populate Library list utilizing a "submit" type button without "action" field
submitBtn.addEventListener("click", () => {
    event.preventDefault();

    const newTitle = document.querySelector("#title");
    const newAuthor = document.querySelector("#author");
    const newPgC = document.querySelector("#pageC");
    const newRead = document.querySelector("#read");
    console.log(newTitle.value, newAuthor.value, newPgC.value, newRead.value);

    if(newTitle.value =="" || newAuthor.value =="" || newPgC.value =="" || newRead.value ==""){
        alert("Please fill out all fields before submitting.")
    } else {
        addBookToLibrary(newTitle.value, newAuthor.value, newPgC.value, newRead.value);

        // Reset form to hidden and empty fields
        bookForm.setAttribute("id","hideForm");
        newTitle.value = "";
        newAuthor.value = "";
        newPgC.value = "";
        newRead.value = "";
    }
})