const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

app.use('/graph')

app.listen(4000, () => {
    console.log('now listening for request on port 4000');
})