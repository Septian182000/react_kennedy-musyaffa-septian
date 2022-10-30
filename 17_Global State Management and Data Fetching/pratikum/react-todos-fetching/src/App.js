import Router from './Router';
import "./assets/style.css"

import { Provider } from "react-redux";
import { store } from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;