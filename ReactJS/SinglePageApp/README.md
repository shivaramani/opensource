x-- Create a single page sample application

- Install NPM

# install create app globally
- sudo npm install -g create-react-app

# To create a sample application
- create-react-app react_spa

- cd react_spa
- npm i react-router-dom --save
- delete everything found inside your public and src

- Inside PUBLIC folder
    - create index html - create body and root div

- Inside SRC folder
    - create the index.CSS 
    - create home, menu1, contact,  js 
      - import react (ex: import React, { Component } from "react";)
      - create appropriate class (ex - "home") extending the "component". on render return appropriate html
      - export default <class>. This lets the home/menu1/contact class components available to be imported . Ex: export default home

    - create main js. 
        - import React, home/menu1/contact components
        - import Route, NavLink, HashRouter - These helps to provide navigation
        - extend Main class and add the attached code accordingly for the HashRouter
        
    - create index.js - import React, ReactDOM and Main etc and ReactDOM render for the Main root/main

    # to run the app

    - npm install
    - npm superagent
    - npm start

    - to build an deploy/publish (ex: to aws) - "npm run build" and copy the "build" folder contents

    ## 8/13/2018 implementation

    - Modify router link navigation (main.js)
    - make REST call using using superagent - to a sample aws apigateway/lambda
    - pass props of rest call response to other components
    - implement componentWillReceiveProps, componentWillMount events (inside Menu1 component) to render contents

