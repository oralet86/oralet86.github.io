const read_true_emoji = "✅";
const read_false_emoji = "❎";

const addBook = document.querySelector(".addbook");
const addBookDialog = document.getElementById("addbook-dialog");
const addBookForm = document.getElementById("addbook-form");
const addBookConfirm = document.getElementById("confirm");

addBook.addEventListener("click", () => addBookDialog.showModal());

addBookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formTitle = document.getElementById("title");
    const formPages = document.getElementById("pages");
    const formRead = document.getElementById("read");

    new Book(formTitle.value, formPages.value, formRead.checked);

    addBookDialog.close();
})

const bookshelf = document.querySelector(".main");


class Book {
    static library = [];

    static addToLibrary(book) {
        Book.library.push(book);
    }

    static removeFromLibrary(book) {
        Book.library.remove(book.getIndex);
    }

    constructor(title = "Lord of The Rings", pageLength = 1984, readStatus = false) {
        Book.addToLibrary(this);
        this.title = title;
        this.pageLength = pageLength;
        this.readStatus = readStatus;
        this.node;

        // Preperation for display
        this.renderBook();
        this.buttonInit();
    }

    getIndex() {
        return Book.library.findIndex(a => {
            return (a.title === this.title &&
                a.pageLength === this.pageLength &&
                a.readStatus === this.readStatus);
        });
    }

    markAsRead() {
        this.readStatus = true;
    }

    markAsUnread() {
        this.readStatus = false;
    }

    renderBook() {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        
        const img = document.createElement("img");
        img.alt = "Book Image";
        bookDiv.appendChild(img);

        const titleSpan = document.createElement('span');
        titleSpan.classList.add('title');
        titleSpan.textContent = this.title;
        bookDiv.appendChild(titleSpan);

        const pagesContainer = document.createElement('div');
        pagesContainer.classList.add('pages-container');

        const pageSizeSpan = document.createElement('span');
        pageSizeSpan.textContent = 'Page size: ';
        pagesContainer.appendChild(pageSizeSpan);

        const pagesSpan = document.createElement('span');
        pagesSpan.classList.add('pages');
        pagesSpan.textContent = this.pageLength;
        pagesContainer.appendChild(pagesSpan);

        bookDiv.appendChild(pagesContainer);

        const readContainer = document.createElement('div');
        readContainer.classList.add('read-container');

        const readLabelSpan = document.createElement('span');
        readLabelSpan.textContent = 'Read? ';
        readContainer.appendChild(readLabelSpan);

        const readSpan = document.createElement('span');
        readSpan.classList.add('read');
        readContainer.appendChild(readSpan);

        const changeButton = document.createElement('button');
        changeButton.classList.add('change');
        changeButton.textContent = 'Change';
        readContainer.appendChild(changeButton);

        bookDiv.appendChild(readContainer);

        const removeButton = document.createElement('button');
        removeButton.classList.add('remove');
        removeButton.textContent = 'Remove Book';
        bookDiv.appendChild(removeButton);

        bookshelf.appendChild(bookDiv);
        this.node = bookDiv;
        this.renderReadStatus();
    }

    renderReadStatus() {
        this.node.setAttribute("data-read", (this.readStatus) ? "true" : "false");

        const img = this.node.querySelector("img");
        img.src = (this.readStatus) ? "svg/book-read.svg" : "svg/book-noread.svg";
        const readSpan = this.node.querySelector(".read");
        readSpan.textContent = (this.readStatus) ? read_true_emoji : read_false_emoji;
    }

    buttonInit() {
        this.removeButtonInit();
        this.changeButtonInit();
    }

    removeButtonInit() {
        const removeButton = this.node.querySelector(".remove");
        removeButton.addEventListener("click", () => {
            bookshelf.removeChild(this.node);
            Book.library.splice(this.getIndex(), 1);
            this.node = null;
        })
    }

    changeButtonInit() {
        const changeButton = this.node.querySelector(".change");
        changeButton.addEventListener("click", () => {
            this.readStatus = !this.readStatus;
            this.renderReadStatus();
        });
    }
}

const lotr_test = new Book("Lord of The Rings", "198", false);
const animal_test = new Book("Animal Farm", "123", true);


