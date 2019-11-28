const typeDefs = `
  extend type Query {
    post(title: String!): Post
  }

  type Post {
    title: String
    user: User
  }
`;

const posts = [
  { title: "Time", authorId: "123" },
  { title: "Words", authorId: "123" }
];

const resolvers = {
  Query: {
    post: (_, args) => posts.filter(b => b.title === args.title)[0]
  },
  User: {
    posts: author => posts.filter(b => b.authorId === author.id)
  }
};

module.exports = { typeDefs, resolvers };
