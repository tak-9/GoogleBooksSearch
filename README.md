# GoogleBooksSearch :blue_book: :mag_right:
This is a React-based Google Books Search app. A user can search and save books to consider which one to puchase  later. 


## Live demo :earth_asia:
The application has been deployed to heroku. 

https://google-books-takuji.herokuapp.com/

<img src="./readme/screencapture.jpg" width="850px">


## Functionalities

 * This application provides two pages:

   * Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

   * Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.

## React  :atom_symbol:
[React Hooks](https://reactjs.org/docs/hooks-intro.html) useState, useEffect are used to implement it without Class. 


## Technolgies
Following technologies are used for this application.

* [React](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/)
* [Node.js](https://nodejs.org), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)


## Credit 
* Book data is provided by [Google Books API](https://developers.google.com/books).