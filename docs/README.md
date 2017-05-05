# koajs-error
- error middleware for Koa

# Installation

```
$npm install koajs-cors
```

# Usage

```
eg1:

var koa = require('koa');
var router = require('koa-router');
var onError=require('koajs-error');
var app = new koa();
app.use(onError({type:"json"}));
router.get('/', function() {

      throw new Error("错误被捕获");

  this.body = { msg: 'Hello World!' };
});
app.use(router.routes());

app.listen(3000);





eg2:
var koa = require('koa');
var router = require('koa-router');
var onError=require('koajs-error');
var app = new koa();
app.use(onError());
router.get('/', function() {

      throw new Error("错误被捕获");

  this.body = { msg: 'Hello World!' };
});
app.use(router.routes());

app.listen(3000);

```
# options
{Object} [options]
- type:"json"


