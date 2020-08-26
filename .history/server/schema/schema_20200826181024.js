const graphql = require('graphql');
const _ = require('lodash')


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;


// dummy data
var books = [
  { name: "Name of the wind", genre: "FANTASY", id: "1" },
  { name: "The Final Empire", genre: "FANTASY", id: "2" },
  { name: "The Long Earth", genre: "Sci-Fi", id: "3" },
];


var authors = [
  { name: 'Patrick Rothfuss', age: 44, id: '1' },
  { name: 'Brandon Sanderson', age: 42, id: '2' },
  { name: 'Terry Pratchett', age: 66, id: '3'}

]

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    id: { type: GraphQLString },
  }),
});



const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent,args){
        // code to get data from db / other source
        console.log(typeof(args.id))
        return _.find(books, { id: args.id });

      }
    },

    author{
    type: AuthorType,
    args: { id: { type: GraphQLID } },
      resolve(parent,args){
        return _.find(authors, {id})
      }
    }



  },
});


// An example GraphQL query might look like:
// #
// #     {
// #       field(arg: "value") {
// #         subField
// #       }
// #     }

module.exports = new GraphQLSchema({
  query: RootQuery
})