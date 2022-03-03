# 2108 FE Mod 4 Take Home Challenge - Colgan Meanor
Mod4 2108 FE

<img width="1433" alt="Screen Shot 2022-03-03 at 2 29 14 PM" src="https://user-images.githubusercontent.com/87510749/156650431-7cc12426-543e-44f5-bea6-c1fe2d99fef6.png">


## Table of Contents
  - [Install + Setup](#install)
  - [Project Specs](#project-specs)  
  - [Abstract](#abstract)
  - [Architecture](#architecture)
  - [Technologies](#technologies)
  - [Contributors](#contributors)

  

## Install + Setup
  - clone this repo: [here](https://github.com/colganmeanor/colgan-take-home-turing)
   - On the command line, type: **$ npm install**
   - On the command line, type: **$ npm start**
   - The app will run on port 3000.
   - Visit (http://localhost:3000/) in your browser. 

## Project Specs
   - The project spec & rubric can be found [here](https://mod4.turing.edu/projects/take_home/take_home_fe)


## Abstract

  This project was created in response to a Take Home Coding Challenge exercise presented to students in their final module at Turing School of Software & Design. For those of us in the Front End program at Turing, our challenge was to utilize the New York Time's public API and create a simple application that displays fetched articles to the user. We were asked to work no longer than 8 hours on this project. So, the application presented in this repository was created in roughly 7.5 hours. 

  The requirements as listed on the spec are as follows: The app must show the articles in a "list view", there must be a page to view articles in greater detail, articles in the "list view" must link in some way to the "detailed view", and there must be some sort of functionality to filter, sort, or search for articles. 
  
Navigating from 'list view' to 'detail view':

https://user-images.githubusercontent.com/87510749/156650861-c0bb0fba-8ef8-42a5-808d-e23bed775680.mov


  My take on this project is a fairly simple React-based application that should satisfy the required specs provided by Turing. This app allows a user to view top stories from NYT upon page load, and by clicking on a given article from the list the user can navigate to a detailed article page at a separate URL. By using the navigation menu near the top of the site, the user can choose which category of articles they want to see (such as Sports, World News, Arts, etc). 
  
 Choosing to see articles from the Sports section:

https://user-images.githubusercontent.com/87510749/156651007-7f1e8f36-d4e2-44d9-8b56-0662338adcc6.mov


## Architecture

  All data for this application is serviced by the [New York Times public stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview). On page load, React's useEffect hook is utilized to fetch all top stories from the home section of the NYT and store it in app state. This info is then passed down to children components as props as necessary. 

  When clicking on a story category in the top nav bar, the user is actually triggering a new fetch request to the NYT API and re-populating the application with stories from the category they have selected. 

  This application is created via the `create-react-app` command provided by the React team, and it is tested via the Cypress Testing Framework. It was written using VSCode and designed to be used on Google Chrome or similar browsers.

## Technologies
  - React Framework
  - React Router
  - Cypress Testing Framework
  - Javascript
  - CSS HTML
  - VSCode
  - Git Version Control / GitHub
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line


## Contributors
  - [Colgan Meanor](https://github.com/colganmeanor)
