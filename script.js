let myLibrary = [];
let button = document.querySelector("#button");
let books =document.querySelector("#books");


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book){
    return myLibrary.push(book);
};

function submitButton(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    //create book from input fields:
    let newBook = new Book(title,author,pages,read)

    //push book to 'myLibary'
    addBookToLibrary(newBook);  
    
    for (let i = 0; i < myLibrary.length; i++){
        let newDiv = document.createElement("DIV");
        newDiv.innerHTML = "hello";
        books.appendChild(newDiv);
    };

    console.log(myLibrary);
}


//Event Listener
button.addEventListener("click", submitButton);