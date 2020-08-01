# Github Users Lookup

Vanilla JS application to search github users and their repos
Application uses [Github Api](https://developer.github.com/v3/) to show user profiles & repos

Requests to Github API are not authorized, thus request rate limit is 60 per hour [according to dev guide info](https://developer.github.com/v3/#rate-limiting)

## Tech stack
Vanilla JS, Bootstrap Css, EsLint, Mocha

### Application is deployed from 'gh-pages' branch to github.io 
[Live Demo](https://joraclista.github.io/github-users-lookup/)

## Usage
```
## Install dependencies
npm install
```

```
## Run app (opens application on localhost:3000 (which is default))
npm start
```

```
## Run tests  (test report is generated in ./test-report folder)
npm run test
```

```
## Run tests & show test report (opens test report on localhost:3001 (which is configured in test-bs-config.json) )
npm run test-and-show
```

```
## Run ESlint  
npm run eslint
```

## Test report

Tests are performed using Mocha, report is generated in html format using really awesome [mochawesome](https://www.npmjs.com/package/mochawesome)
