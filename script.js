let myLibrary = [];
let button = document.querySelector("#button");
let books =document.querySelector("#books");
let libTitle = document.querySelector("#libTitle")
let libAuthor = document.querySelector("#libAuthor")
let libPages = document.querySelector("#libPages")
let libRead = document.querySelector("#libRead")
let titles = [];
let errorMessage = document.querySelector("#error");

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

    newFunction;
    
};


function toPage(arr){
    let newEntry = myLibrary.pop();
    
    let newTitle = document.createElement('DIV');
    newTitle.textContent = (`${newEntry.title}`);
    libTitle.appendChild(newTitle);
    
    let newAuthor = document.createElement('DIV');
    newAuthor.textContent = (`${newEntry.author}`);
    libAuthor.appendChild(newAuthor);

    let newPages = document.createElement('DIV');
    newPages.textContent = (`${newEntry.pages}`);
    libPages.appendChild(newPages);
   
    let newRead = document.createElement('DIV');
    newRead.textContent = (`${newEntry.read}`);
    libRead.appendChild(newRead);
    
}

function clear(){
    document.querySelector("#title").value='';
    document.querySelector("#author").value='';
    document.querySelector("#pages").value='';
    document.querySelector("#read").value='';
}


button.addEventListener("click", submitButton);

let newFunction = setTimeout(() => {
    document.querySelector("#error").value = '';
}, 2000);
