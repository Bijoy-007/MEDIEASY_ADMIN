import { Provider } from "react-redux";
import "antd/dist/antd.css";

import "./App.css";
import AllRoutes from "./routes/route";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AllRoutes />;
    </Provider>
  );
}

export default App;
