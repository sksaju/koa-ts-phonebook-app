# Koa Phonebook REST App
Building a simple Phonebook REST App using TypeScript, Node.js, Koa.js and MongoDB.

**Requirements**

* MVC pattern
* Dependency Injection
* Database, MongoDB
* Models: Contact
* REST API, Json interface
* Unit tests

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/sksaju/koa-ts-phonebook-app.git
> cd koa-ts-phonebook-app 
> docker-compose up
```

#### Not Familiar with Git?
Click [here](https://github.com/sksaju/koa-ts-phonebook-app/releases/) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> docker-compose up
```

*Resource endpoints*

| path | method | |
|:--- |:--- | --- |
|`/api/contacts`| GET | list all record |
|`/api/contacts`| POST | create a new contact record |
|`/api/contacts/:mobile`| GET | get the individual record |
|`/api/contacts/:mobile`| PUT | update the whole record |
|`/api/contacts/:mobile`| DELETE | get the individual record |


## Main Technologies and libraries

- <a href="https://typescriptlang.org/">Typescript</a>
- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://nodemon.io/">Nodemon</a>
- <a href="https://mongodb.com/">MongoDB</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://koajs.com/#">KoaJS</a>
- <a href="https://github.com/koajs/cors">koa-cors</a>
- <a href="https://github.com/koajs/bodyparser">koa-bodyparser</a>
- <a href="https://github.com/alexmingoia/koa-router">koa-router</a>
- <a href="https://jestjs.io/">Jest</a>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

Sk Saju