"use strict";

var graphql = require('graphql');

var _ = require('lodash');

var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLSchema = graphql.GraphQLSchema; // dummy data

var books = [{
  name: "Name of the wind",
  genre: "FANTASY",
  id: "1"
}, {
  name: "The Final Empire",
  genre: "FANTASY",
  id: "2"
}, {
  name: "The Long Earth",
  genre: "Sci-Fi",
  id: "3"
}];
var BookType = new GraphQLObjectType({
  name: "Book",
  fields: function fields() {
    return {
      id: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      genre: {
        type: GraphQLString
      }
    };
  }
});
var RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: {
          type: GraphQLString
        }
      },
      resolve: function resolve(parent, args) {
        // code to get data from db / other source
        return _find(books, {
          id: args.id
        });
      }
    }
  }
});
module.exports = new GraphQLSchema({
  query: RootQuery
});