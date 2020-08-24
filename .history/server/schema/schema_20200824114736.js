const graphql = require('graphql');

const { GraphQLObjectType, Graphst } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: }
    })
});