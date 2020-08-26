const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;


// dummy data
var books = [
  {name: "Name of the wind", genre: "FANTASY"}
]

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent,args){
        // code to get data from db / other source

      }
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery
})