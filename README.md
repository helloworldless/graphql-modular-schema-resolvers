# Modular GraphQL Schema and Resolvers

https://github.com/paltamadura/graphql-modular-schema-resolvers

Based on https://blog.apollographql.com/modularizing-your-graphql-schema-code-d7f71d5ed5f2

## Example Queries

```graphql
query {
  user(id: "123") {
    firstName
    posts {
      title
    }
  }
}
```

```graphql
query {
  post(title: "Time") {
    title
    user {
      firstName
    }
  }
}
```
