import React, { useState } from 'react';
import { ContainerOutlined, DesktopOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import ResultDomestic from './Domestic/ResultDomestic';
import ResultForeign from './Foreign/ResultForeign';
import ResultListBooking from './Booking/ResultListBooking';
import ResultUser from './User/ResultUser';




const { Header, Content, Footer, Sider } = Layout;
function SideNav(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  SideNav('Danh sách Tour', '1', <DesktopOutlined />),
  SideNav('Danh sách Booking', '2', <DesktopOutlined />),
  SideNav('Danh sách User', '3', <ContainerOutlined />),
];

const Side = (props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState('1'); // Mặc định chọn '1'

  const handleMenuClick = (key) => {
    setSelectedKey(key); // Cập nhật state khi click vào menu item
  };

  const getSelectedLabel = () => {
    const selectedItem = items.find((item) => item.key === selectedKey);
    return selectedItem ? selectedItem.label : '';
  };
  // console.log("get", getSelectedLabel());

  const { onHandleOpen, onHandleDelete, onHandleEdit,
    onHandleCreateOpen, onHandleDeleteBK, onHandleEditBK,
    onHandleChangePage, currentPage, onHandleRefresh,
    onChangeFilter, onChangeTour
  } = props;
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]}>
          {items.map((item) => (
            <Menu.Item
              key={item.key}
              icon={item.icon}
              onClick={() => handleMenuClick(item.key)}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <h2 className='p-4 text-center'>Thông tin {getSelectedLabel()}</h2>

        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* Render nội dung tương ứng dựa trên selectedKey */}
            {selectedKey === '1' && <div><ResultDomestic
              onHandleOpen={onHandleOpen}
              onHandleDelete={onHandleDelete}
              onHandleEdit={onHandleEdit}
              onHandleChangePage={onHandleChangePage}
              currentPage={currentPage}
              onHandleRefresh={onHandleRefresh}
              onChangeFilter={onChangeFilter}
              onChangeTour={onChangeTour}

            /></div>}
            {selectedKey === '2' && <div><ResultListBooking
              onHandleCreateOpen={onHandleCreateOpen}
              onHandleDeleteBK={onHandleDeleteBK}
              onHandleEditBK={onHandleEditBK}
              onHandleChangePage={onHandleChangePage}
              currentPage={currentPage}
            /></div>}
            {selectedKey === '3' && <div><ResultUser
              onHandleOpen={onHandleOpen}
              onHandleDelete={onHandleDelete}
              onHandleEdit={onHandleEdit}
            /></div>}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Side;
