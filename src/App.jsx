import React from "react";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { GenerationProvider } from "./contexts/GenerationContext";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Lexend",
        },
      }}
    >
      <Toaster position="top-right" />
      <AuthProvider>
        <LanguageProvider>
          <GenerationProvider>
            <RouterProvider router={router} />
          </GenerationProvider>
        </LanguageProvider>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;
