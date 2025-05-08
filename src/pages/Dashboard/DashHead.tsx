import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic, StatisticProps } from "antd";
import CountUp from "react-countup";
import { FaUsers } from "react-icons/fa";
import { IoMdDoneAll } from "react-icons/io";

const DashHead = () => {
  const formatter: StatisticProps["formatter"] = (value) => (
    <CountUp end={value as number} />
  );

  return (
    <div>
      <Row gutter={16}>
        
        <Col span={8}>
          <Card
            variant="borderless"
            className="hover:!scale-105 hover:shadow-lg duration-150"
          >
            <div className="flex gap-3 items-center">
              <div className="bg-primary/70 w-16 h-16 rounded-lg flex justify-center items-center">
                <FaUsers size={30} className="text-white" />
              </div>
              <div>
                <Statistic
                  value={900000}
                  precision={2}
                  valueStyle={{ color: "#3f8600", fontSize: "18px" }}
                  prefix={<ArrowDownOutlined />}
                  suffix="so'm"
                  formatter={formatter}
                />
                <span className="text-muted text-base">Kirim </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            variant="borderless"
            className="hover:!scale-105 hover:shadow-lg duration-150"
          >
            <div className="flex gap-3 items-center">
              <div className="bg-primary/70 w-16 h-16 rounded-lg flex justify-center items-center">
                <FaUsers size={30} className="text-white" />
              </div>
              <div>
                <Statistic
                  value={11000000}
                  precision={2}
                  valueStyle={{ color: "#f7685b", fontSize: "18px" }}
                  prefix={<ArrowUpOutlined />}
                  suffix="so'm"
                  formatter={formatter}
                />
                <span className="text-muted text-base">Chiqim </span>
              </div>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            variant="borderless"
            className="hover:!scale-105 hover:shadow-lg duration-150"
          >
            <div className="flex gap-3 items-center">
              <div className="bg-primary/70 w-16 h-16 rounded-lg flex justify-center items-center">
                <FaUsers size={30} className="text-white" />
              </div>
              <div>
                <Statistic
                  value={110}
                  precision={2}
                  valueStyle={{ color: "#3f8600", fontSize: "18px" }}
                  prefix={<IoMdDoneAll />}
                  suffix="ta"
                  formatter={formatter}
                />
                <span className="text-muted text-base line-clamp-1">
                  Bajarilgan buyurtmalar{" "}
                </span>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashHead;
