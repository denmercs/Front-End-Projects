class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.getElementById('book-list');

        // Create tr element
        const row = document.createElement('tr');

        // Insert cols
        row.innerHTML = `<td> ${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href="#" class="delete">x</a></td>`;
        // append row in the list
        list.appendChild(row);
    }

    showAlert(message, className) {
        //Create div
        const div = document.createElement('div');
        //add classes
        div.className = `alert ${className}`;
        //add text
        div.appendChild(document.createTextNode(message));
        // Get Parent
        const container = document.querySelector('.container');
        //get form
        const form = document.querySelector('#book-form');

        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 seconds
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteBook(target) {
        if(target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
}

// Local storage
class Store {
    static getBooks() {
        let books;
        if(localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static displayBooks() {
        const books = Store.getBooks();

        books.forEach(function(book){
            const ui = new UI;

            //add book to UI
            ui.addBookToList(book);
        });
    }

    static addBook(book) {
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn) {
        const books = Store.getBooks();

        books.forEach(function(book, index){
            if(book.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// DOM load event
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit', function(e){

    // Get the values
    const title = document.getElementById('title').value,
    author = document.getElementById('author').value,
    isbn = document.getElementById('isbn').value;

    // Instantiate a book
    const book = new Book(title, author, isbn);

    // Instantiate a UI object
    const ui = new UI();

    // validate
    if(title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // add book to list
        ui.addBookToList(book);

        // add to Local Storage
        Store.addBook(book);

        // Show success
        ui.showAlert('Book added!', 'success');

        // clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click', function(e) {
    // instantiate the UI
    const ui = new UI();

    // Delete book
    ui.deleteBook(e.target);

    // Remove form Local storage
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

    // show alert
    ui.showAlert('Book Deleted!', 'success');
    e.preventDefault();
})
