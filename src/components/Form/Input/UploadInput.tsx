import React, { useState } from "react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadProps } from "antd";

const UploadInput: React.FC = () => {
  const [loading, ] = useState(false);
  const [imageUrl,] = useState<string[]>([]);

  const handleChange: UploadProps["onChange"] = (info) => {
    console.log(info);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <Upload
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      beforeUpload={() => false}
      onChange={handleChange}
    >
      {imageUrl ? (
        <img src="" alt="avatar" style={{ width: "100%" }} />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default UploadInput;
