let myLibrary = [];
let button = document.querySelector("#button");
let books =document.querySelector("#books");
let libTitle = document.querySelector("#libTitle")
let libAuthor = document.querySelector("#libAuthor")
let libPages = document.querySelector("#libPages")
let libRead = document.querySelector("#libRead")


function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book){
     myLibrary.push(book);
};

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
  
};


function toPage(arr){
    for (let title in myLibrary){
        let newTitle = document.createElement('DIV');
        newTitle.textContent = (`${myLibrary[title].title}`);
        libTitle.appendChild(newTitle);
    }
    
    for (let author in myLibrary){
        let newAuthor = document.createElement('DIV');
        newAuthor.textContent = (`${myLibrary[author].author}`);
        libAuthor.appendChild(newAuthor);
    }
    
    for (let pages in myLibrary){
        let newPages = document.createElement('DIV');
        newPages.textContent = (`${myLibrary[pages].pages}`);
        libPages.appendChild(newPages);
    }
    for (let read in myLibrary){
        let newRead = document.createElement('DIV');
        newRead.textContent = (`${myLibrary[read].read}`);
        libRead.appendChild(newRead);
    }
}

button.addEventListener("click", submitButton);







