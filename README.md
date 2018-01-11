# Style Board

## Current Features
Style Board allows you to take pictures you have saved of your clothing items and save them to the different categories that they belong in. You can add, update, and delete items as you see fit.

## Future Features
* Login - Login accounts will allow users to have their own personal page. Login will also allow users to sign in from other accounts (facebook, twitter, gmail)
* My Closet - Will allow users to view all items that they have added on one page. This page will allow users to view items in a carousel and match things together. This is great for when you're out shopping and want to know if you have something that matches exactly.
* Search - Functionality to search for items by name, tag, color, etc.

## Technologies Used
MEHN Stack
* Mongo
* Express
* Handlebars
* Node
### Node Dependencies
* Body-Parser
* Express-Handlebars
* Method Override
* Mongoose

## Project Status
This project is currently in development. Users can have access to the functionality listed under current features.

## Installation and Set Up
Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

npm install

To Visit App:

localhost:8000/

## Reflection
I planned on building this app that allowed users to upload clothing items and their name, colors, images, and tags. I then wanted users to be able to add items to a "stack" in which they could say what category clothes belonged in. I decided the best thing to do was add a category feature and build 4 models for Accessories, Shirts, Pants, and Shoes. This feature actually made the project a taller task than expected as it required 4 schemas, 4 databases, and 4 times the routes. 

*This readme is based off of https://gist.github.com/martensonbj/6bf2ec2ed55f5be723415ea73c4557c4
