import { FullscreenExitOutlined, FullscreenOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const FullScreen = () => {
  const [isFull, setIsFull] = useState(false);

  const fullScreenHandle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFull(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFull(false);
      });
    }
  };

  return (
    <Button
      icon={!isFull ? <FullscreenOutlined /> : <FullscreenExitOutlined />}
      onClick={() => {
        fullScreenHandle();
      }}
    />
  );
};

export default FullScreen;
