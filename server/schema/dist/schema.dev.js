"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var graphql = require('graphql');

var _ = require('lodash');

var GraphQLObjectType = graphql.GraphQLObjectType,
    GraphQLString = graphql.GraphQLString,
    GraphQLSchema = graphql.GraphQLSchema,
    GraphQLID = graphql.GraphQLID,
    GraphQLInt = graphql.GraphQLInt; // dummy data

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
var authors = [{
  name: 'Patrick Rothfuss',
  age: 44,
  id: '1'
}, {
  name: 'Brandon Sanderson',
  age: 42,
  id: '2'
}, {
  name: 'Terry Pratchett',
  age: 66,
  id: '3'
}];
var AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: function fields() {
    return {
      name: {
        type: GraphQLString
      },
      age: {
        type: GraphQLInt
      },
      id: {
        type: GraphQLString
      }
    };
  }
});
var BookType = new GraphQLObjectType({
  name: "Book",
  fields: function fields() {
    return {
      id: {
        type: GraphQLID
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
          type: GraphQLID
        }
      },
      resolve: function resolve(parent, args) {
        // code to get data from db / other source
        console.log(_typeof(args.id));
        return _.find(books, {
          id: args.id
        });
      }
    },
    author: {
      type: AuthorType,
      args: {
        id: {
          type: GraphQLID
        }
      },
      resolve: function resolve(parent, args) {
        return _.find(authors, {
          id: args.id
        });
      }
    }
  }
}); // An example GraphQL query might look like:
// #
// #     {
// #       field(arg: "value") {
// #         subField
// #       }
// #     }

module.exports = new GraphQLSchema({
  query: RootQuery
});