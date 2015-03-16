# How to install
* Clone this repository
* CD to project folder
* Open index.html to view

# Compile all module to one file
1. ```sudo npm install```
2. ```./node_modules/.bin/browserify -t reactify [mainFile] -o [distFile]```
3. Ex: ```./node_modules/.bin/browserify -t reactify app/App.js -o dist/app.js```
