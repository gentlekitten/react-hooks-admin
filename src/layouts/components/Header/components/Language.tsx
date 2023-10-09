import { Button, Dropdown, MenuProps } from "antd";
import { connect } from "react-redux";
import { setLanguage } from "@/redux/modules/global/action";

const Language = (props: any) => {
  const { language, setLanguage } = props;

  const items: MenuProps["items"] = [
    {
      label: (
        <Button
          className="dropdown-button"
          disabled={language === "zh"}
          type="text"
          onClick={() => setLanguage("zh")}
        >
          简体中文
        </Button>
      ),
      key: "1",
    },
    {
      label: (
        <Button
          className="dropdown-button"
          disabled={language === "en"}
          type="text"
          onClick={() => setLanguage("en")}
        >
          English
        </Button>
      ),
      key: "2",
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <Dropdown
      menu={menuProps}
      placement="bottom"
      trigger={["click"]}
      arrow={true}
    >
      <i className="icon-style iconfont icon-zhongyingwen"></i>
    </Dropdown>
  );
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(Language);
