# Google Books Search :blue_book: :mag_right:

This is a React-based Google Books Search app. A user can search and save books to consider which one to puchase  later. 

<img src="./readme/google_books_logo.png"> 

## Live demo :earth_asia:
The application has been deployed to [heroku](https://www.heroku.com/). 

https://google-books-takuji.herokuapp.com/

The react front-end has also been deployed to [Netlify](https://www.netlify.com/) for faster access. The same app can also be accessed from here. 

https://google-books-takuji.netlify.app/

<img src="./readme/screencapture.jpg" width="850px">

## Functionalities

 * This application provides two pages:

   * Search - User can search for books via the Google Books API and render them here. User has the option to "View" a book, bringing them to the book on Google Books, or "Save" a book, saving it to the Mongo database.

   * Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.


## React  :atom_symbol:
[React Hooks](https://reactjs.org/docs/hooks-intro.html) useState, useEffect are used to implement it without Class. 

## Deployment to Netlify 
As heroku server may get very slow on 'free' plan, I have deployed React front-end to [Netlify](https://www.netlify.com/). The back-end API and MongoDB are hosted on heroku. 

### Setup for Deployment on Netlify
Create a new site on Netlify by clicking "New Site from Git". Choose this repositor to create a new site. As React router does not work on Netlify by default, a file called `_redirects` with the following content has to be created inside the build folder. See [this](https://medium.com/@rexben/how-to-fix-page-not-found-on-netlify-with-react-router-dom-e0520692be5) article.

`/*    /index.html   200`

In Netlify admin screen, go to Settings > Build & Deploy > Continuous Deployment
* Base directory: client
* Publish directory: /client/build

Netlify is updated when a file is pushed to github.

## Future Development

* Replace JavaScript `alert()` with Bootstrap [modal](https://getbootstrap.com/docs/4.0/components/modal/).


## Technolgies
Following technologies are used for this application.

* [React](https://reactjs.org/), [Bootstrap](https://getbootstrap.com/)
* [Node.js](https://nodejs.org), [Express](https://expressjs.com/), [MongoDB](https://www.mongodb.com/)


## Move MongoDB from mLab to MongoDB Atlas
[The mLab MongoDB add-on will be removed from all Heroku apps on November 10, 2020.](https://devcenter.heroku.com/changelog-items/1823)
[MongoDB Atlas Sandbox](https://www.mongodb.com/cloud/atlas) is now used for alternative. 


## Credit 
* Book data is provided by [Google Books API](https://developers.google.com/books).
