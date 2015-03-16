# How to install
* Clone this repository
* CD to project folder
* Open index.html to view

# Compile all module to one file
* ```./node_modules/.bin/browserify -t reactify [mainFile] -o [distFile]```
* Ex:
```./node_modules/.bin/browserify -t reactify app/App.js -o dist/app.js```