import logo from '../assets/logo.svg';

import { Footer, Header } from "antd/es/layout/layout";
import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  MenuOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Button, Carousel, Tabs, Image } from "antd";

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
            <img src={logo} alt="logo" />
            <ul className="flex gap-4 text-[14px] max-md:hidden">
              <a href="#services">
                {" "}
                <li className="hover:text-white text-gray-300  duration-300">
                  УСЛУГИ
                </li>
              </a>
              <a href="#offer">
                <li className="hover:text-white text-gray-300  duration-300">
                  АКЦИИ
                </li>
              </a>
              <a href="#composition">
                <li className="hover:text-white text-gray-300  duration-300">
                  КОМПОЗИЦИИ
                </li>
              </a>
              <a href="#partners">
                <li className="hover:text-white text-gray-300  duration-300">
                  НАШИ ПАРТНЁРЫ
                </li>
              </a>
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
        <div id="services" className="text-white max-w-[1200px] mx-auto px-3">
          <h2 className="text-[30px] uppercase text-center relative before:absolute before:bottom-0 before:duration-300 before:w-0 hover:before:w-[220px] before:h-[2px] before:bg-white before:mx-auto mb-4">
            Каталог услуг
          </h2>
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
        <div
          id="offer"
          className="max-w-[1200px] mx-auto px-3 flex gap-6 py-[70px] max-sm:flex-col max-sm:text-center"
        >
          <div>
            <h2 className="text-[45px] tracking-[6px]">
              Акционные предложения
            </h2>
            <hr className="w-[100px] my-6 max-sm:mx-auto" />
            <p className="mb-6 text-[18px]">
              При заказе свадебного предоставляется скидка на букет невесты и
              бутоньерку в размере 30%
            </p>
            <Button ghost>смотреть работы</Button>
          </div>
          <div className="overflow-hidden">
            <img
              src="../../public/treeImg.jpg"
              alt="img"
              className="h-[350px] hover:scale-105 duration-300"
            />
          </div>
        </div>

        <div
          id="composition"
          className="max-w-[1200px] mx-auto px-3 flex gap-6 py-[70px] max-sm:flex-col max-sm:text-center"
        >
          <div className="w-[50%] max-sm:w-[100%] overflow-hidden">
            <img
              src="../../public/copmImg.jpg"
              alt="img"
              className="w-full h-full hover:scale-105 duration-300"
            />
          </div>
          <div className="w-[50%] max-sm:w-[100%]">
            <h2 className="text-[45px] tracking-[3px]">
              композиции и шляпные коробки
            </h2>
            <hr className="w-[100px] my-6 max-sm:mx-auto" />
            <p className="mb-6 text-[15px]">
              Композиции могут собираться в любой таре: корзинке, шляпной
              коробке, вазочке или декоративных ящиках. Их нет необходимости
              ставить в вазу, как букеты, потому что цветы питаются при помощи
              специальной флористической губки под названием оазис. Композиции
              очень удобные для подарка, или оформления мероприятия.
            </p>
            <Button ghost>смотреть работы</Button>
            <div className="flex gap-2 max-sm:justify-center mt-3">
              <div className="overflow-hidden">
                <img
                  src="../../public/gruop1.jpg"
                  alt="img"
                  className="hover:scale-105 duration-300"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="../../public/gruop2.jpg"
                  alt="img"
                  className="hover:scale-105 duration-300"
                />
              </div>{" "}
              <div className="overflow-hidden">
                <img
                  src="../../public/gruop3.jpg"
                  alt="img"
                  className="hover:scale-105 duration-300"
                />
              </div>{" "}
              <div className="overflow-hidden">
                <img
                  src="../../public/gruop4.jpg"
                  alt="img"
                  className="hover:scale-105 duration-300"
                />
              </div>{" "}
            </div>
          </div>
        </div>

        <div id="partners">
          <h2 className="text-[30px] uppercase text-center relative before:absolute before:bottom-0 before:duration-300 before:w-0 hover:before:w-[300px] before:h-[2px] before:bg-white before:mx-auto mb-4">
            наши поставщики
          </h2>
          <div className="flex justify-center flex-wrap gap-5 my-10">
            <Image width={250} height={100}  src="../../public/partners1.jpg" />
            <Image width={250} height={100}  src="../../public/partners2.jpg" />
            <Image width={250} height={100}  src="../../public/partners3.jpg" />
            <Image width={250} height={100}  src="../../public/partners4.jpg" />
            <Image width={250} height={100}  src="../../public/partners5.jpg" />
            <Image width={250} height={100}  src="../../public/partners6.jpg" />
            <Image width={250} height={100}  src="../../public/partners7.jpg" />
            <Image width={250} height={100}  src="../../public/partners8.jpg" />
            <Image width={250} height={100}  src="../../public/partners9.jpg" />
          </div>
        </div>

        <div className="Footer max-w-[1200px] mx-auto  pt-10 px-3">
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
