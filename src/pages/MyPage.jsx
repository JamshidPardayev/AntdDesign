import { Footer, Header } from "antd/es/layout/layout";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  MenuOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Tabs } from "antd";

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
      <div className="bg-[#3B181E] text-white py-[50px]">
        <h2 className="text-[36px] text-center relative before:absolute before:bottom-0 before:duration-300 before:w-0 hover:before:w-[220px] before:h-[2px] before:bg-white before:mx-auto ">
          Каталог услуг
        </h2>
        <div className="text-white max-w-[1200px] mx-auto px-3">
          <Tabs
            tabBarGutter={20}
            className=""
            defaultActiveKey="1"
            items={[
              {
                label: "Tab 1",
                key: "1",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg1.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        букет невесты и свадебное оформление
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
              {
                label: "Tab 2",
                key: "2",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg2.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        букеты на торжества
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
              {
                label: "Tab 3",
                key: "3",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg3.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        композиции
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
              {
                label: "Tab 4",
                key: "4",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg4.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        оформление мероприятий
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
              {
                label: "Tab 5",
                key: "5",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg5.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        доставка цветов
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
              {
                label: "Tab 6",
                key: "6",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg6.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        курсы по флористике
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
              {
                label: "Tab 7",
                key: "7",
                children: (
                  <div className="text-white h-[400px] flex gap-10 border border-[#FFFFFF33] p-2 max-sm:flex-col">
                    <div className="w-[50%] max-sm:w-[100%] max-sm:h-[300px] h-[100%] rounded-[10px] overflow-hidden">
                      <img
                        src="../../public/catalogImg7.jpg"
                        alt="img1"
                        className="w-full h-full rounded-[10px] hover:scale-105 duration-300"
                      />
                    </div>
                    <div className="w-[50%] max-sm:w-[100%] text-center  uppercase">
                      <h3 className="text-[50px] mb-5 max-md:text-[40px]">
                        фотосессии в нашей оранжерее
                      </h3>
                      <Button ghost>смотреть работы</Button>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <div className="Footer pt-10 px-3">
          <div className="flex text-[#FFFFFF80] flex-wrap gap-x-8 justify-center">
            <p>Cвадебная флористика</p>
            <p>Букеты на любые мероприятия</p>
            <p>Букеты невесты</p>
            <p>Композиции</p>
            <p>Оформление мероприятий</p>
          </div>
          <div className="flex justify-center mt-4 text-[25px] gap-6 text-white cursor-pointer">
            <InstagramOutlined />
            <FacebookOutlined />
            <TwitterOutlined />
            <WhatsAppOutlined />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MyPage);
