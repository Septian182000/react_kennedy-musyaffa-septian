# (23) GraphQl - Mutation

## Three Points I Got

### 1. Mutation
- utation merupakan basic dari fungsi untuk `update`, `insert`, dan `delete` sebuah data. Sebelum melakukan fungsi tersebut, kita haru mendefinisikan operasi apa yang kita inginkan dilakukan, serta definisikan juga apa yang akan di `return` pada saat proses pengolahan data GraphQL.

### 2. Jenis-jenis mutation
- Insert Mutation
- Update Mutatiom
- Delete Mutation

### 3. Apollo Client ReactJS Setup
- Import gql and useQuery and then write your query, or you can copy the query from hasura console instead.
- Get initial data by doing query on the server, call useQuery on top of your code.
- Consume data in your jsx code, note that in first request data is null so need use optional chaining to avoid error.