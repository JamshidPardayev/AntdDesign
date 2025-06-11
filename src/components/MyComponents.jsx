{
  /* ================================== Qaytarilgan yoki uxshash Componentlarni qilmadim va Uzgaruvchisi bir xil bolgan Componentlar ham Izohga olingan ishlamasa ushandan bolishi mumkin a tak uzimda hammasi ishlagan ================================== */
}
{
  /* ================================== Qaytarilgan yoki uxshash Componentlarni qilmadim va Uzgaruvchisi bir xil bolgan Componentlar ham Izohga olingan ishlamasa ushandan bolishi mumkin a tak uzimda hammasi ishlagan ================================== */
}
import {
  Anchor,
  Breadcrumb,
  Button,
  Cascader,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Dropdown,
  Flex,
  FloatButton,
  Form,
  Layout,
  Menu,
  Pagination,
  Radio,
  Row,
  Segmented,
  Space,
  Steps,
  theme,
  TreeSelect,
  Typography,
  Input,
  Select,
  InputNumber,
  Switch,
  Upload,
  Slider,
  ColorPicker,
  Rate,
  Badge,
  Carousel,
  Collapse,
  Popover,
  Statistic,
  Tag,
  Tour,
  Alert,
  Drawer,
  message,
  Modal,
  Popconfirm,
  Progress,
  Skeleton,
  Spin,
} from "antd";
import {
  ClockCircleOutlined,
  CommentOutlined,
  CustomerServiceOutlined,
  EllipsisOutlined,
  FacebookOutlined,
  LikeOutlined,
  LinkedinOutlined,
  MenuOutlined,
  PlusOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import React, { useRef, useState } from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
const boxStyle = {
  width: "100%",
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff",
};
const justifyOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];
const alignOptions = ["flex-start", "center", "flex-end"];
const style = { background: "#0092ff", padding: "8px 0" };

// ----------------Layout Items --------------

// const items = Array.from({ length: 15 }).map((_, index) => ({
//   key: index + 1,
//   label: `nav ${index + 1}`,
// }));

// ---------------- DropDown Items ---------------------
const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const description = "This is a description.";
const options1 = [
  {
    value: "Jasur",
    label: "Jasur",
    children: [
      {
        value: "Pardayev",
        label: "Pardayev",
        children: [
          {
            value: "wwwww",
            label: "wwwww",
          },
        ],
      },
    ],
  },
  {
    value: "Jamshid",
    label: "Jamshid",
    children: [
      {
        value: "Pardayev",
        label: "Pardayev",
        children: [
          {
            value: "11111",
            label: "11111",
          },
        ],
      },
    ],
  },
];
// const onChange = (value) => {
//   console.log(value);
// };

const plainOptions = ["Apple", "Pear", "Orange"];

// const options = [{ label: "Apple", value: "Apple", className: "label-1" }];

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e === null || e === void 0 ? void 0 : e.fileList;
};
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items3 = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>,
  },
];
const content = (
  <div>
    <p>Real Madrid</p>
    <p>Barcelona</p>
  </div>
);
const confirm = (e) => {
  console.log(e);
  message.success("Click on Yes");
};
const cancel = (e) => {
  console.log(e);
  message.error("Click on No");
};
const contentStyle3 = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content3 = <div style={contentStyle3} />;

{
  /* ================================== Qaytarilgan yoki uxshash Componentlarni qilmadim va Uzgaruvchisi bir xil bolgan Componentlar ham Izohga olingan ishlamasa ushandan bolishi mumkin a tak uzimda hammasi ishlagan ================================== */
}
{
  /* ================================== Qaytarilgan yoki uxshash Componentlarni qilmadim va Uzgaruvchisi bir xil bolgan Componentlar ham Izohga olingan ishlamasa ushandan bolishi mumkin a tak uzimda hammasi ishlagan ================================== */
}
// --------------------------------component start-----------------------
const MyComponents = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Hello, Ant Design!");
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const { Text, Link } = Typography;
  const [justify, setJustify] = React.useState(justifyOptions[0]);
  const [alignItems, setAlignItems] = React.useState(alignOptions[0]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [show, setShow] = useState(true);
  const onChange = (key) => {
    console.log(key);
  };
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: "Upload File",
      description: "Put your files here.",
      cover: (
        <img
          alt="tour.png"
          src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
        />
      ),
      target: () => ref1.current,
    },
    {
      title: "Save",
      description: "Save your changes.",
      target: () => ref2.current,
    },
    {
      title: "Other Actions",
      description: "Click to see other actions.",
      target: () => ref3.current,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-3 flex flex-col gap-5">
      <div className="flex gap-5 max-sm:flex-col">
        <Link
          href={"/"}
          className="h-[50px] border border-violet-700 text-gray-700 bg-violet-300 hover:bg-violet-400 duration-300 hover:text-white font-bold text-center content-center rounded-[10px] w-[150px] shadow-[0px_0px_2px_2px_#8a2be2]"
        >
          Back Home
        </Link>
        <Link
          href={"/page"}
          className="h-[50px] border border-violet-700 text-gray-700 bg-violet-300 hover:bg-violet-400 duration-300 hover:text-white font-bold text-center content-center rounded-[10px] w-[150px] shadow-[0px_0px_2px_2px_#8a2be2]"
        >
          Back Home
        </Link>
      </div>
      {/* --------------------- Button--------------------- */}
      <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
      <ConfigProvider>
        <Flex vertical gap="small">
          <Flex gap="small" wrap>
            <Button color="default" variant="solid">
              Solid
            </Button>
            <Button color="default" variant="outlined">
              Outlined
            </Button>
            <Button color="default" variant="dashed">
              Dashed
            </Button>
            <Button color="default" variant="filled">
              Filled
            </Button>
            <Button color="default" variant="text">
              Text
            </Button>
            <Button color="default" variant="link">
              Link
            </Button>
          </Flex>
        </Flex>
      </ConfigProvider>
      {/* ---------------------Float Button--------------------- */}
      <FloatButton.Group
        trigger="click"
        type="primary"
        style={{ insetInlineEnd: 24 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ insetInlineEnd: 94 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
      {/* --------------------- Icons--------------------- */}
      <MenuOutlined className="text-[25px] absolute top-3 right-3 cursor-pointer" />
      {/* --------------------- Typography--------------------- */}
      <Space direction="vertical">
        <Text>Ant Design (default)</Text>
        <Text type="secondary">Ant Design (secondary)</Text>
        <Text type="success">Ant Design (success)</Text>
        <Text type="warning">Ant Design (warning)</Text>
        <Text type="danger">Ant Design (danger)</Text>
        <Text disabled>Ant Design (disabled)</Text>
        <Text mark>Ant Design (mark)</Text>
        <Text code>Ant Design (code)</Text>
        <Text keyboard>Ant Design (keyboard)</Text>
        <Text underline>Ant Design (underline)</Text>
        <Text delete>Ant Design (delete)</Text>
        <Text strong>Ant Design (strong)</Text>
        <Text italic>Ant Design (italic)</Text>
        <Link href="https://ant.design" target="_blank">
          Ant Design (Link)
        </Link>
      </Space>
      {/* --------------------- Divider--------------------- */}
      <Divider style={{ borderColor: "#7cb305" }}>Solid</Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider variant="dotted" style={{ borderColor: "#7cb305" }}>
        Dotted
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider variant="dashed" style={{ borderColor: "#7cb305" }} dashed>
        Dashed
      </Divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      {/* --------------------- Flex--------------------- */}
      <Flex gap="middle" align="start" vertical>
        <p>Select justify :</p>
        <Segmented options={justifyOptions} onChange={setJustify} />
        <p>Select align :</p>
        <Segmented options={alignOptions} onChange={setAlignItems} />
        <Flex style={boxStyle} justify={justify} align={alignItems}>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
          <Button type="primary">Primary</Button>
        </Flex>
      </Flex>
      {/* --------------------- Grid--------------------- */}
      <Divider orientation="left">Responsive</Divider>
      <Row gutter={[16, 16]}>
        <Col
          className="gutter-row text-center text-white font-semibold"
          span={6}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
        >
          <div style={style}>col-6</div>
        </Col>
        <Col
          className="gutter-row text-center text-white font-semibold"
          span={6}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
        >
          <div style={style}>col-6</div>
        </Col>
        <Col
          className="gutter-row text-center text-white font-semibold"
          span={6}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
        >
          <div style={style}>col-6</div>
        </Col>
        <Col
          className="gutter-row text-center text-white font-semibold"
          span={6}
          xs={24}
          sm={12}
          md={8}
          lg={6}
          xl={4}
        >
          <div style={style}>col-6</div>
        </Col>
      </Row>
      {/* --------------------- Layout--------------------- */}
      <Layout>
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
        </Header>
        <Content style={{ padding: "0 48px" }}>
          <Breadcrumb
            style={{ margin: "16px 0" }}
            items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
          />
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            <h1>Jamshid Pardayev</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ut
            reiciendis asperiores ratione. Porro rerum fugiat quod? Rerum labore
            temporibus alias dolorum voluptatibus eligendi nostrum quam.
            Inventore quisquam neque dolorum! Natus ea quos, dolores, eius
            consequuntur similique illo modi, autem fuga quae vel? Aspernatur
            sint modi qui ratione, molestiae doloremque!
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
      {/* --------------------- Splitter--------------------- */}
      <div style={{ padding: "20px" }}>
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Part 1",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Part 2",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "Part 3",
            },
            {
              key: "part-4",
              href: "#part-4",
              title: "Part 4",
            },
            {
              key: "part-5",
              href: "#part-5",
              title: "Part 5",
            },
          ]}
        />
      </div>
      <div>
        <div
          id="part-1"
          style={{
            width: "100%",
            height: "40vh",
            textAlign: "center",
            background: "#0000ff",
          }}
        />
        <div
          id="part-2"
          style={{
            width: "100%",
            height: "5vh",
            textAlign: "center",
            background: "#ff0000",
          }}
        />
        <div
          id="part-3"
          style={{
            width: "100%",
            height: "40vh",
            textAlign: "center",
            background: "#ffffff",
          }}
        />
        <div
          id="part-4"
          style={{
            width: "100%",
            height: "5vh",
            textAlign: "center",
            background: "#ff0000",
          }}
        />
        <div
          id="part-5"
          style={{
            width: "100%",
            height: "40vh",
            textAlign: "center",
            background: "#008000",
          }}
        />
      </div>
      {/* --------------------- Breadcrumb--------------------- */}
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: <a href="">Application Center</a>,
          },
          {
            title: <a href="">Application List</a>,
          },
          {
            title: "An Application",
          },
        ]}
      />
      {/* --------------------- Dropdown--------------------- */}
      <Space direction="vertical">
        <Space wrap>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>
          <Dropdown menu={{ items }} placement="bottom">
            <Button>bottom</Button>
          </Dropdown>
          <Dropdown menu={{ items }} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>
        </Space>
        <Space wrap>
          <Dropdown menu={{ items }} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>
          <Dropdown menu={{ items }} placement="top">
            <Button>top</Button>
          </Dropdown>
          <Dropdown menu={{ items }} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>
        </Space>
      </Space>
      {/* --------------------- Pagination--------------------- */}
      <Pagination defaultCurrent={1} total={50} />
      {/* --------------------- Steps--------------------- */}
      <Steps
        current={1}
        items={[
          {
            title: "Finished",
            description,
          },
          {
            title: "In Progress",
            description,
            subTitle: "Left 00:00:08",
          },
          {
            title: "Waiting",
            description,
          },
        ]}
      />
      {/* --------------------- Cascader--------------------- */}
      <Cascader
        options={options1}
        onChange={onChange}
        placeholder="Please select"
      />
      {/* --------------------- Checkbox --------------------- */}
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Apple"]}
        onChange={onChange}
      />
      {/* --------------------- Data Picker--------------------- */}
      {/* <Space direction="vertical" size={12}>
        <DatePicker
          showTime
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
        <RangePicker
          showTime={{ format: "HH:mm" }}
          format="YYYY-MM-DD HH:mm"
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
      </Space> */}
      {/* --------------------- Inputni ichida hammasini oldim--------------------- */}
      <Checkbox
        checked={componentDisabled}
        onChange={(e) => setComponentDisabled(e.target.checked)}
      >
        Form disabled
      </Checkbox>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Checkbox" name="disabled" valuePropName="checked">
          <Checkbox>Checkbox</Checkbox>
        </Form.Item>
        <Form.Item label="Radio">
          <Radio.Group>
            <Radio value="apple"> Apple </Radio>
            <Radio value="pear"> Pear </Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Input">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              {
                title: "Light",
                value: "light",
                children: [{ title: "Bamboo", value: "bamboo" }],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: "zhejiang",
                label: "Zhejiang",
                children: [
                  {
                    value: "hangzhou",
                    label: "Hangzhou",
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                color: "inherit",
                cursor: "inherit",
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
        <Form.Item label="Slider">
          <Slider />
        </Form.Item>
        <Form.Item label="ColorPicker">
          <ColorPicker />
        </Form.Item>
        <Form.Item label="Rate">
          <Rate />
        </Form.Item>
      </Form>
      {/* --------------------- Badge--------------------- */}
      <Space>
        <Switch checked={show} onChange={() => setShow(!show)} />
        <Badge count={show ? 11 : 0} showZero color="#faad14" />
        <Badge count={show ? 25 : 0} />
        <Badge
          count={
            show ? <ClockCircleOutlined style={{ color: "#f5222d" }} /> : 0
          }
        />
        <Badge
          className="site-badge-count-109"
          count={show ? 109 : 0}
          style={{ backgroundColor: "#52c41a" }}
        />
      </Space>
      {/* --------------------- Carousel--------------------- */}
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      {/* --------------------- Collapse--------------------- */}
      return{" "}
      <Collapse items={items3} defaultActiveKey={["1"]} onChange={onChange} />;
      {/* --------------------- Popover--------------------- */}
      <Popover content={content} title="Title">
        <Button type="primary">Hover me</Button>
      </Popover>
      {/* --------------------- Statistic--------------------- */}
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          <Statistic title="Unmerged" value={93} suffix="/ 100" />
        </Col>
      </Row>
      {/* --------------------- Tag--------------------- */}
      <Flex gap="4px 0" wrap>
        <Tag icon={<TwitterOutlined />} color="#55acee">
          Twitter
        </Tag>
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          Youtube
        </Tag>
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          Facebook
        </Tag>
        <Tag icon={<LinkedinOutlined />} color="#55acee">
          LinkedIn
        </Tag>
      </Flex>
      {/* --------------------- Tour--------------------- */}
      <Button type="primary" onClick={() => setOpen(true)}>
        Begin Tour
      </Button>
      <Divider />
      <Space>
        <Button ref={ref1}>Upload</Button>
        <Button ref={ref2} type="primary">
          Save
        </Button>
        <Button ref={ref3} icon={<EllipsisOutlined />} />
      </Space>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      {/* --------------------- Alert--------------------- */}
      <Alert message="Success Tips" type="success" showIcon />
      <br />
      <Alert message="Informational Notes" type="info" showIcon />
      <br />
      <Alert message="Warning" type="warning" showIcon closable />
      <br />
      <Alert message="Error" type="error" showIcon />
      <br />
      <Alert
        message="Success Tips"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <br />
      <Alert
        message="Informational Notes"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <br />
      <Alert
        message="Warning"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
        closable
      />
      <br />
      <Alert
        message="Error"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
      {/* --------------------- Drawer--------------------- */}
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        title="Basic Drawer"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      {/* --------------------- Message--------------------- */}
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
      {/* --------------------- Modal--------------------- */}
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are You Sure Delete This?</p>
      </Modal>
      {/* --------------------- Popconfirm--------------------- */}
      <Popconfirm
        title="Delete the task"
        description="Are you sure to delete this task?"
        onConfirm={confirm}
        onCancel={cancel}
        okText="Yes"
        cancelText="No"
      >
        <Button danger>Delete</Button>
      </Popconfirm>
      {/* --------------------- Progress--------------------- */}
      <Flex gap="small" vertical>
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </Flex>
      {/* --------------------- Skeleton--------------------- */}
      <h2 className="text-[20px]">Skeleton</h2>
      <Skeleton active />
      {/* --------------------- Spin--------------------- */}
      <Flex gap="middle" vertical>
        <Flex gap="middle">
          <Spin tip="Loading" size="small">
            {content3}
          </Spin>
          <Spin tip="Loading">{content3}</Spin>
          <Spin tip="Loading" size="large">
            {content3}
          </Spin>
        </Flex>
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
      </Flex>
      {/* ================================== Qaytarilgan yoki uxshash Componentlarni qilmadim va Uzgaruvchisi bir xil bolgan Componentlar ham Izohga olingan ishlamasa ushandan bolishi mumkin a tak uzimda hammasi ishlagan ================================== */}
      {/* ================================== Qaytarilgan yoki uxshash Componentlarni qilmadim va Uzgaruvchisi bir xil bolgan Componentlar ham Izohga olingan ishlamasa ushandan bolishi mumkin a tak uzimda hammasi ishlagan ================================== */}
    </div>
  );
};

export default React.memo(MyComponents);
