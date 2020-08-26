"use strict";

var express = require('express');

var _require = require("express-graphql"),
    graphqlHTTP = _require.graphqlHTTP;

var schema = require('./schema/schema');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema
}));
app.listen(4000, function () {
  console.log('now listening for request on port 4000');
});