import { useEffect } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import { updateCollapse } from "@/redux/modules/menu/action";
import { connect } from "react-redux";
import LayoutMenu from "./components/Menu";
import LayoutHeader from "./components/Header";
import LayoutFooter from "./components/Footer";
import LayoutTabs from "./components/Tabs";
import "./index.less";

const { Sider, Content } = Layout;

const LayoutIndex = (props: any) => {
  const { isCollapse, updateCollapse } = props;
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  // 监听窗口大小变化
  const listeningWindow = () => {
    window.onresize = () => {
      return (() => {
        let screenWidth = document.body.clientWidth;
        if (!isCollapse && screenWidth < 1200) updateCollapse(true);
        if (!isCollapse && screenWidth > 1200) updateCollapse(false);
      })();
    };
  };

  useEffect(() => {
    listeningWindow();
  }, []);

  return (
    <>
      <Layout className="container" style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsed={isCollapse} width={220} theme="dark">
          <LayoutMenu />
        </Sider>
        <Layout>
          <LayoutHeader />
          <LayoutTabs />
          <Content
            style={{
              margin: "12px",
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </Content>
          <LayoutFooter />
        </Layout>
      </Layout>
    </>
  );
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutIndex);
