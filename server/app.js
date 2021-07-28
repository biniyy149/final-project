const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.connect('mongodb+srv://Ethiopian:Ethiopian@cluster0.t0ojm.mongodb.net/gql-biniman?retryWrites=true&w=majority')
mongoose.connection.once('open',() => {
    console.log('connected to database');
})
 app.use( '/graphql', graphqlHTTP({
     schema:schema,
     graphiql:true
     

 }));
app.listen(4000, () => {
    console.log('now listening for requests on port 4000')
})
