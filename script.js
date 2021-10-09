let myLibrary = [];
let button = document.querySelector("#button");
let books =document.querySelector("#books");
let libTitle = document.querySelector("#libTitle")
let libAuthor = document.querySelector("#libAuthor")
let libPages = document.querySelector("#libPages")
let libRead = document.querySelector("#libRead")
let titles = [];
let errorMessage = document.querySelector("#error");
let tableData = document.querySelector("#tableData");



//creates the book
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

//adds books to library if it is not a duplicate
function addBookToLibrary(book){

    if (titles.includes(book.title) === false){
        myLibrary.push(book);    
    } else{
        errorMessage.textContent = "duplicate"
    };
    

    titles.push(book.title);
    
};


//primary function.  Captures form entries and converts to book.
function submitButton(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;

    //create book from input fields:
    let newBook = new Book(title,author,pages,read);
    
    //push book to 'myLibary'
    addBookToLibrary(newBook);  

    toPage(myLibrary);
    
    clear();

    
};


function toPage(arr){
    let bookText = '';

    for (let items of arr){
        bookText += `<tr><td>${items.title}</td><td> ${items.author}</td><td>${items.pages}</td><td>${items.read}</td></tr>`
    }

    tableData.innerHTML = bookText;
    
  
}

function clear(){
    document.querySelector("#title").value='';
    document.querySelector("#author").value='';
    document.querySelector("#pages").value='';
    document.querySelector("#read").value='';
}


button.addEventListener("click", submitButton);


