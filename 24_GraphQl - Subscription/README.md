# (24) GraphQl - Subscription

## Three Points I Got

### 1. Subscription
- Subscription adalah fitur GraphQL yang memungkinkan server mengirim data ke kliennya ketika peristiwa tertentu terjadi. Subscription biasanya diterapkan dengan WebSocket. Dalam pengaturan itu, server mempertahankan koneksi yang stabil ke client berlangganannya.

### 2. How to Use?

1. Untuk penggunaan `Subscription` pada documentasi kita harus menginstall library dengan cara `npm install graphql-ws`
2. Inisialisasi GraphQLWsLink

```js
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/subscriptions",
  })
);
```

### 3. Subscription using useSubscription
- Import useSubscription from apollo client and define subscription
- Invoke subscription and consume data, in this example we will remove query from previous code and change it to subscription. in Jsx code just like before.