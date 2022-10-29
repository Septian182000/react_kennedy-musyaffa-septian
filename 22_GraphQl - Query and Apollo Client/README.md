# (22) GraphQl - Query and Apollo Client

## Three Points I Got

### 1. Apollo Clinet?
- Apollo Client merupakan sebuah library state management yang komprehensif untuk JavaScript untuk mengelola data lokal dan jarak jauh dengan graphql yang secara global digunakan untuk `fetch`, `cache`, dan `modify` data aplikasi dan secara otomatis akan memperbarui di UI

### 2. Dasar Query
- Dengan GraphQL bisa mendapatkan data yang dibutuhkan yaitu dengan menentukan bidang apa yang ingin didapatkan dan GraphQL akan memberikan data berdasarkan apa yang didefinisikan.

### 3. Apollo Client ReactJS Setup
- Import gql and useQuery and then write your query, or you can copy the query from hasura console instead.
- Get initial dadta by doing query on the server, call useQuery on top of your code
- Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.