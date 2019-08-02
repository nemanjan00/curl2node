# curl2node

This is tool for converting curl bash command to Node.JS code. 

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Installation](#installation)
* [Usage](#usage)
* [Author](#author)

<!-- vim-markdown-toc -->

## Installation

```bash
yarn global add curl2node
```

## Usage

```bash
curl2node generator curl https://google.com 
```

If you would like to test if it will work first, feel free to use `runner` instead of `generator`. 

```bash
curl2node runner curl https://google.com 
```

Generated code will look something like this: 

```javascript
const got = require("got");

const options = {
	"url": "https://google.com"
};

got(options).then((data) => {
	console.log(data);
}).catch((error) => {
	console.error(error);
});
```

## Author

* [nemanjan00](https://github.com/nemanjan00)

