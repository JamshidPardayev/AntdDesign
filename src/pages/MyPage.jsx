import { Header } from "antd/es/layout/layout";
import React from "react";
import { FacebookOutlined, InstagramOutlined, MenuOutlined, TwitterOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

const contentStyle = {
  height: "80vh",
  color: "#fff",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  letterSpacing: "9%",
  width: "100%",
  margin: "0 auto",
};
const MyPage = () => {
  return (
    <div>
      <Header
        style={{
          backgroundImage: 'url("../../public/heroImg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "0 20px",
        }}
        className="min-h-[100vh]"
      >
        <div className="max-w-[1200px] mx-auto px-3">
          <nav className="h-[100px] flex justify-between items-center">
            <img src="../../public/logo.svg" alt="logo" />
            <ul className="flex gap-4 text-gray-300 text-[14px] max-md:hidden">
              <li>УСЛУГИ</li>
              <li>АКЦИИ</li>
              <li>КОМПОЗИЦИИ</li>
              <li>НАШИ ПАРТНЁРЫ</li>
            </ul>
            <p className="text-white text-[14px] max-md:hidden">
              +7 (916) 392 17 77
            </p>
            <div className="text-white hover:text-gray-500 duration-300 cursor-pointer hidden max-md:block">
              <MenuOutlined className=" text-[25px]" />
            </div>
          </nav>
          <div className="Hero relative">
            <Carousel autoplay>
              <div>
                <h3
                  style={contentStyle}
                  className="text-[80px] max-sm:text-[50px]"
                >
                  флористика <br /> с душой
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-[80px] max-sm:text-[50px]"
                >
                  Цветы говорят <br /> за вас
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-[80px] max-sm:text-[50px]"
                >
                  Композиции <br /> с характером
                </h3>
              </div>
              <div>
                <h3
                  style={contentStyle}
                  className="text-[80px] max-sm:text-[50px]"
                >
                  Искусство <br /> живых цветов
                </h3>
              </div>
            </Carousel>
            <div className="absolute bottom-0 flex flex-col text-[20px] gap-3 text-white cursor-pointer">
              <InstagramOutlined />
              <FacebookOutlined />
              <TwitterOutlined />
              <WhatsAppOutlined />
            </div>
          </div>
        </div>
      </Header>
    </div>
  );
};

export default React.memo(MyPage);
