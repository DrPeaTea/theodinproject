//new book button
const newBookButton = document.querySelector(".New-book");
const form = document.querySelector(".book-form");
newBookButton.addEventListener("click", () => {
  form.classList.toggle("visible");
});

// How to get data from the form

const library = document.querySelector(".bookcards");

const books = [];

function removeBook(event) {
  const button = event.target;

  console.log(typeof button);

  const bookListItem = button.parentNode;

  library.removeChild(bookListItem);
}

function renderBook(newBook) {
  // Add a child item
  const bookCard = document.createElement("div");
  const bookName = document.createElement("div");
  const bookAuthor = document.createElement("div");
  const bookPages = document.createElement("div");
  const readStatus = document.createElement("div");
  const readQuestion = document.createElement("label");
  const bookRead = document.createElement("input");
  const removeButton = document.createElement("button");

  // filling in the contents

  bookName.textContent = newBook.name;
  bookAuthor.textContent = "by " + newBook.author;
  bookPages.textContent = newBook.pages + " Pages";
  readQuestion.textContent = "have you read this?";
  bookRead.textContent = newBook.Read;
  removeButton.textContent = "Remove";

  //where the new parts go + giving them a class

  library.appendChild(bookCard);
  bookCard.classList.add("book");
  bookCard.appendChild(bookName);
  bookName.classList.add("book-name");
  bookCard.appendChild(bookAuthor);
  bookAuthor.classList.add("book-author");
  bookCard.appendChild(bookPages);
  bookPages.classList.add("book-pages");
  bookCard.appendChild(readStatus);
  readStatus.appendChild(readQuestion);
  readQuestion.classList.add("read-question");
  readStatus.appendChild(bookRead);
  bookRead.classList.add("book-read");
  bookRead.type = "checkbox";
  bookRead.checked = newBook.read;

  bookCard.appendChild(removeButton);
  removeButton.classList.add("book-remove");
  removeButton.onclick = removeBook;
}

if (form) {
  // Stuff here happens on load

  form.onsubmit = function (event) {
    // Stuff here happens when form has been submitted

    console.log("Form submitted");

    const bookName = form.querySelector("#book-name").value;
    const bookAuthor = form.querySelector("#book-author").value;
    const bookPages = form.querySelector("#book-pages").value;
    const bookRead = form.querySelector("#book-read").value;

    const newBook = {
      name: bookName,
      author: bookAuthor,
      pages: bookPages,
      read: bookRead,
    };

    books.push(newBook);

    renderBook(newBook);

    // Cancel any other stuff
    event.preventDefault();
  };
}

// How to put something on the page
