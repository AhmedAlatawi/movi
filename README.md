# movi
A movie tracker application built with the MEAN stack.
The main purpose of the project is to learn the basics and the insights of the MEAN application stack.

![MEAN Stack logo](https://d21ii91i3y6o6h.cloudfront.net/gallery_images/from_proof/6120/large/1435723400/mean-stack-die-cut.png)

## Main technologies
- **Front-end**
  - [AngularJS](https://angularjs.org/)
  - [Bootstrap](http://getbootstrap.com/)
  - [Stylus](https://learnboost.github.io/stylus/)
  - [Bower](http://bower.io/)
- **Back-end**
  - [Node.js](https://nodejs.org/en/)
  - [Express](http://expressjs.com/)
  - [MongoDB](https://www.mongodb.org/)
  - [Mongoose](http://mongoosejs.com/)
  - [Passport](http://passportjs.org/)


## Project structure

```html
- public/
-------- app/ <!-- Angular components -->
------------ controllers/ <!-- Angular controllers -->
------------ directives/ <!-- Angular directives -->
------------ services/ <!-- Angular services -->
------------ views/ <!-- Angular partials -->
------------ app.js <!-- Angular application -->
-------- assets/ <!-- Images, css, static files -->
-------- vendor/ <!-- Bower packages -->
-------- index.html <!-- Entry point -->
- server/
-------- config/ <!-- Express/Mongoose configuration -->
-------- controllers/ <!-- Server controllers -->
-------- models/ <!-- MongoDB models -->
- .bowerrc <!-- Tells bower where to put files (public/assets/vendor) -->
- bower.json <!-- Bower dependencies -->
- package.json <!-- Node.js dependencies -->
- server.js <!-- Node application set up / entry -->
```

## Commit message

Here's a commit message example including *tag*, *title* and *description*:

```
[MOD] redirect user to WatchedView after adding movies

User is now redirected to the "watched movies" section so he can see
the new movie has been correcly added to the list.
This is far a better experience than redirect him to the home page.
```

Commit tags used:

Tag | Description
--- | -----------
[ADD] | Add a new feature to a component
[MOD] | *Modify*. Change the behaviour of a component
[REF] | *Refactor*. Change the form but not the behaviour of a component
[FIX] | Remove software errors
[REM] | *Remove*. Remove some features from a component
[REA] | *Readability*. Code and comments cleaning
[REPO] | *Repository*. Everything repo-related
[SCRIPT] | Add, modify or remove automation scripts
[DOC] | *Documentation*. Everything doc-related
[TASK] | A generic commit
