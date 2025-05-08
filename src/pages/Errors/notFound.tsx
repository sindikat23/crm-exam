import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Result
        status="404"
        title="404"
        subTitle="Kechirasiz, Bunday sahifa mavjud emas edi."
        extra={
          <Link to={"/"}>
            <Button type="primary">Asosiy sahifaga qaytish</Button>
          </Link>
        }
      />
    </div>
  );
};

export default NotFound;
