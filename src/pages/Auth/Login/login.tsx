import { Button, Form, Input } from 'antd';
import { ILogin } from "../../../types/Type";
import { useNavigate } from "react-router-dom";
import { useMutateRequest } from "../../../config/service/request";
import { login } from '../../../config/service/url';
import MaskInput from '../../../components/Form/Input/MaskInput';

import logo_crm from '../../../assets/images/login_image.svg'
import logo_input from '../../../assets/images/login_union.svg'

const Login = () => {

    const navigate = useNavigate();
    const { mutateAsync, isPending } = useMutateRequest();

    const loginHandle = async (values: ILogin) => {
        const body: ILogin = {
            phone_number: "+998" + values.phone_number.replace(/\D/g, ""),
            password: values.password,
        };
        const res = await mutateAsync({
            url: login,
            method: "POST",
            data: body,
        });
        if (res?.success) {
            localStorage.setItem("access", res?.data?.tokens?.access);
            localStorage.setItem("refresh", res?.data?.tokens?.refresh);
            navigate("/");
        }
        console.log(res);

    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-[#f6f7fa]">
            <div className="w-full md:w-1/2 hidden md:flex items-center justify-center overflow-hidden">
                <img src={logo_crm} alt="noventer" className="" />
            </div>
            <div className="w-full h-screen md:w-1/2 flex items-center justify-center p-4 bg-[#f6f7fa]">
                <div className="flex flex-col justify-center items-center w-1/2">
                    <div className=" mx-auto w-full bg-white p-5 rounded-xl">
                        <img src={logo_input} alt="logo input" className="pb-5 w-1/2 mx-auto" />
                        <Form layout="vertical" onFinish={loginHandle}>
                            <Form.Item
                                name="phone_number"
                                rules={[
                                    { required: true, message: "Telfon raqamini kiriting" },
                                ]}
                                label="Telefon raqam"
                            >
                                <MaskInput mask={"(99) 999-99-99"} placeholder="(99) 999-99-99" />
                            </Form.Item>
                            <Form.Item
                                label="Parolingiz"
                                rules={[
                                    {
                                        required: true,
                                        message: "Parol kiriting",
                                    },
                                ]}
                                name={"password"}
                            >
                                <Input.Password placeholder="********" />
                            </Form.Item>
                            <div className="my-4 flex justify-center">
                                {/* <Button
                    color="primary"
                    variant="link"
                    onClick={() => {
                      navigate("/register");
                    }}
                  >
                    Ro'yxatdan o'tish
                  </Button> */}
                                <Button
                                    className='w-full'
                                    htmlType="submit"
                                    color="primary"
                                    variant="solid"
                                    loading={isPending}
                                >
                                    Kirish
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login