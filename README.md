# FAQ Module

## Introduction

- FAQ Module is a simple Javascript utility which displays articles from the Zendesk API.
- It uses React to do DOM operations.
- It uses Jest and Enzyme for testing.

## Running the Demo

To run a demo which will bundle the Javacript files and open a dev server, do `npm run demo`.

## Building the Javscript Bundle

1. After cloning from git, `npm install` to install the dependencies.
2. Build the js bundle by running `npm run build-js`

## Usage

To use the FAQ module, you will need to include the built Javscript file (dist/index.js) in your application. FAQ module will expose a global function at `window.initializeArticles` which will initialize the module. Calling this function with the element will render the FAQ module in your page.

From the demo index.html page:

```html
<body>
  <div id="my-articles"></div>
  <script src="dist/index.js"></script>
  <script>
    window.initializeArticles(document.getElementById("my-articles"));
  </script>
</body>
```
