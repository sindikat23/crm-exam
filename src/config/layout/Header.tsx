import { Image, Input, List, Popover, theme } from "antd";
import no_user from "../../assets/svg/no_user.svg";
import { useMutateRequest } from "../service/request";
import { account_me, company_me } from "../service/url";
import { useEffect } from "react";
import ProfileStore from "../../store/Profile";
import { useNavigate } from "react-router-dom";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import FullScreen from "./FullScreen";
import CheckRole from "../../components/shared/CheckRole";

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { mutateAsync } = useMutateRequest();
  const {
    setProfile,
    profile,
    clearProfile,
    company,
    setCompany,
    clearCompany,
  } = ProfileStore();
  const navigate = useNavigate();

  const getAccountMe = async () => {
    const res = await mutateAsync({
      url: account_me,
      method: "GET",
    });
    setProfile(res);
  };
  const getCompanyMe = async () => {
    const res = await mutateAsync({
      url: company_me,
      method: "GET",
    });
    setCompany(res);
  };

  useEffect(() => {
    if (!profile?.id) {
      getAccountMe();
    }
  }, []);

  useEffect(() => {
    if (!company) {
      getCompanyMe();
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    clearProfile();
    clearCompany();
    navigate("/login");
  };

  const content = () => (
    <List className="profile-popover">
      <List.Item
        className="hover:bg-muted"
        onClick={() => {
          navigate("/profile");
        }}
      >
        Shaxsiy kabinet
      </List.Item>
      <List.Item
        className="hover:bg-danger"
        onClick={() => {
          logOut();
        }}
      >
        Chiqish
      </List.Item>
    </List>
  );

  return (
    <div style={{ padding: "8px 32px", background: colorBgContainer }}>
      <div className="flex justify-between items-center">
        <div className="">
          <p className="text-xl">Dashboard</p>
        </div>
        <div>
          <Input
            addonAfter={<SearchOutlined />}
            placeholder="Qidiruv"
          />
        </div>
        <div className="flex items-center gap-3">
          <BellOutlined className="text-xl" />
          <FullScreen />
          <Popover placement="bottomLeft" content={content}>
            <div className="flex items-center gap-3 border-l-[1.5px] border-gray-400  ps-3">
              <Image
                src={profile?.avatar || no_user}
                alt={""}
                className="w-10 h-10 rounded-full object-cover"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-lg text-primary">
                  {profile?.full_name || "No Name"}
                </p>
                <p className="text-muted text-sm">
                   <CheckRole role={profile?.role} />
                </p>
              </div>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
