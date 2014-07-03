jQuery.powerpack
====================

Powerpack for jquery, the missing recipes in real world projects, also available as NPM module 

FE tooling spec: grunt+mocha+chai+sinon+browserify+testem

## Setup
   
For direct usage   
```js
npm install jquery.powerpack --save
```

For development, clone the repo and run `npm install` to install npm dependecy. `npm test` or `testem` to run the tests. Run `grunt watch` when you are going to edit the lib/jquery.powerpack.js 

PS. tests will fail in phantomjs, becuase it doesn't support Funciton.prototype.bind since it's build with QTwebkit. you can either polyfill the bind or just use a real browser (the .bind is used in the spec to validate params)

## API

## Todo: 

- add detailed API doc 
- add CI

## Credits 
 
Testem with Mocha, Chai, Sinon setup http://www.kenpowers.net/blog/testing-in-browsers-and-node/
https://github.com/paulgrock/testem-blanket-mocha-chai-sinon-plato

Browerify + literalify for browser usage
http://truongtx.me/2014/03/20/browserify-bring-nodejs-modules-to-browser/
