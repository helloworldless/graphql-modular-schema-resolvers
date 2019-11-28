const typeDefs = `
  extend type Query {
    user(id: String!): User
  }
  
  type User {
    id: Int!
    firstName: String
    lastName: String
    posts: [Post]
  }
`;

const users = [{ id: "123", firstName: "dan", lastName: "sax" }];

const resolvers = {
  Query: {
    user: (_, args) => users.filter(a => a.id === args.id)[0]
  },
  Post: {
    user: post => users.filter(a => a.id === post.authorId)[0]
  }
};

module.exports = { typeDefs, resolvers };
