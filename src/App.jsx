import React from "react";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Lexend",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App; 