import { Button, Dropdown, MenuProps } from "antd";
import { setAssemblySize } from "@/redux/modules/global/action";
import { connect } from "react-redux";

const AssemblySize = (props: any) => {
  const { assemblySize, setAssemblySize } = props;

  // 切换组件大小
  const onClick = (e: MenuInfo) => {
    setAssemblySize(e.key);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Button
          className="dropdown-button"
          disabled={assemblySize == "middle"}
          type="text"
        >
          默认
        </Button>
      ),
      key: "middle",
    },
    {
      label: (
        <Button
          className="dropdown-button"
          disabled={assemblySize == "small"}
          type="text"
        >
          小型
        </Button>
      ),
      key: "small",
    },
    {
      label: (
        <Button
          className="dropdown-button"
          disabled={assemblySize == "large"}
          type="text"
        >
          大型
        </Button>
      ),
      key: "large",
    },
  ];

  const menuProps = {
    items,
    onClick,
  };

  return (
    <Dropdown
      menu={menuProps}
      placement="bottom"
      trigger={["click"]}
      arrow={true}
    >
      <i className="icon-style iconfont icon-contentright"></i>
    </Dropdown>
  );
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setAssemblySize };
export default connect(mapStateToProps, mapDispatchToProps)(AssemblySize);
