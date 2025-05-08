import { RouterProvider } from "react-router-dom";
import Provider from "./config/provider/provider";
import { router } from "./config/router/router";
import AntdProvider from "./config/AntProvider/AntProvider";

function App() {
  return (
    <AntdProvider>
      <Provider>
        <RouterProvider router={router} />
      </Provider>
    </AntdProvider>
  );
}

export default App;
