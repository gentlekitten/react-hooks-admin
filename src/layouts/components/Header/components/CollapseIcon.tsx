import { Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { updateCollapse } from "@/redux/modules/menu/action";
import { connect } from "react-redux";

const CollapesIcon = (props: any) => {
  const { isCollapse, updateCollapse } = props;

  return (
    <>
      <Button
        type="text"
        icon={isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => {
          updateCollapse(!isCollapse);
        }}
        style={{
          fontSize: "16px",
          width: 64,
          height: 64,
        }}
      />
    </>
  );
};

const mapStateToProps = (state: any) => state.menu;
const mapDispatchToProps = { updateCollapse };
export default connect(mapStateToProps, mapDispatchToProps)(CollapesIcon);
