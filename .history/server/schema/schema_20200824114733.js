const graphql = require('graphql');

const { GraphQLObjectType, Graph } = graphql;

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: }
    })
});