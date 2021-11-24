//Book Factory: Represents a Book

let Book = (title,author,isbn) => {
    return {title, author, isbn}
}



//UI Factory: Handles UI Tasks

let UI = (() => {


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

    let deleteBook = (el) => {
        if (el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }
        
    }

    let showAlert = (message, className) => {
        let div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector(".container");
        let form = document.querySelector("#book-form");
        container.insertBefore(div,form);

        setTimeout(() => document.querySelector('.alert').remove(), 3000)



    }

    let clearFields = () => {
        document.querySelector("#title").value = ''
        document.querySelector("#author").value = ''
        document.querySelector("#isbn").value = ''
    }

    return{ addBookToList, clearFields, deleteBook, showAlert}
})();



//Event: Add a Book
document.querySelector("#book-form").addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let isbn = document.querySelector("#isbn").value;

    if(title === ''|| author === ''||isbn === ''){
        UI.showAlert("please fill in all fields", "danger")
    }else{

        let book = Book(title, author, isbn);

        UI.addBookToList(book);

        UI.showAlert("Book Added", "success")
    
        UI.clearFields();

    }
})

//Event: Remove a Book

document.querySelector("#book-list").addEventListener("click", (e) => {
    UI.deleteBook(e.target);
})

UI.showAlert("Book removed", "success")

