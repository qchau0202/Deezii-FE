import React from "react";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Lexend",
        },
      }}
    >
      <AuthProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App; 