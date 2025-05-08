import { ConfigProvider } from "antd";
import React from "react";

const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5a00db",
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default AntdProvider;
