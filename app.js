//Book Factory: Represents a Book

let Book = (title,author,isbn) => {
    return {title, author, isbn}
}

//UI Factory: Handles UI Tasks

let UI = (() => {

    let displayBooks = () => {
        let storedBooks = [
            {
            title: "Book One",
            author: "John Doe",
            isbn: 234234
            },
            {
            title: "Book Two",
            author: "Jane Doe",
            isbn: 234566
            }
        ];

        let books = storedBooks;

       books.forEach((book) => addBookToList(book)) 
    }

    let addBookToList = (book) => { 
        let list = document.querySelector("#book-list");

        let row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
            `;

        list.appendChild(row)
    };

    let clearFields = () => {
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#isbn").value = ''
    }

    return{ displayBooks, addBookToList, clearFields}
})();



//Store Factory: Handles local Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

//Event: Add a Book
document.querySelector("#book-form").addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;
    
    let book = Book(title, author, isbn);

    UI.addBookToList(book);

    UI.clearFields();

})

//Event: Remove a Book


