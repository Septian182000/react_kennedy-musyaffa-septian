# (18) Testing

## Three Points I Got

### 1. Testing
- Testing adalah proses verifikasi bahwa test assertions kita benar sepanjang masa aplikasi. Test Assertion ini adalah ekspresi boolean yang mengembalikan nilai true kecuali ada bug di kode kita.


### 2. Create Basic Testing With RTL (React Testing Library)

1. Rendering Component

Fungsi `render()` RTL akan merender file `.jsx` apapun yang dibutuhkan, setelah itu baru bisa memiliki akses ke komponen React

```js
import React from "react";
import { render, screen } from "@testng-library/react";

import App from "./App";

describe("App", () => {
  test("renders App Component", () => {
    render(<App />);

    screen.debug();
  });
});
```

#### 3 Kategori Testing

Contoh lain yang bisa digunakan untuk _testing_ adalah sebagai berikut:

| Fungsi          | Cara Implementasi                                      |
| --------------- | ------------------------------------------------------ |
| LabelText       | `getByLabelText: <label for=”search”` />               |
| PlaceholderText | `getByPlaceholderText: <input placeholder=”Search”` /> |
| AltText         | `getByAltText: <img alt=”profile” />`                  |
| DisplayValue    | `getByDisplayValue: <input value=”Javascript” />`      |