const express = require('express');
const import { compose, graphql } from 'react-apollo'


const app = express();

app.listen(4000, () => {
    console.log('now listening for request on port 4000');
})