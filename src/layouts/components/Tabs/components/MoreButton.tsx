import { Button, Dropdown } from "antd";
import { CloseOutlined, DownOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HOME_URL } from "@/config/config";
import type { MenuProps } from "antd";

const MoreButton = (props: any) => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // // close multipleTab
  const closeMultipleTab = (tabPath?: string) => {
    const handleTabsList = props.tabsList.filter((item: Menu.MenuOptions) => {
      return item.path === tabPath || item.path === HOME_URL;
    });
    props.setTabsList(handleTabsList);
    tabPath ?? navigate(HOME_URL);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <span onClick={() => props.delTabs(pathname)}>
          {t("tabs.closeCurrent")}
        </span>
      ),
      key: "1",
      icon: <CloseOutlined />,
    },
    {
      label: (
        <span onClick={() => closeMultipleTab(pathname)}>
          {t("tabs.closeOther")}
        </span>
      ),
      key: "2",
      icon: <CloseOutlined />,
    },
    {
      label: (
        <span onClick={() => closeMultipleTab()}>{t("tabs.closeAll")}</span>
      ),
      key: "3",
      icon: <CloseOutlined />
    },
  ];

  const menuProps = {
    items,
  };
  return (
    <>
      <Dropdown
        menu={menuProps}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
        trigger={["click"]}
      >
        <Button className="more-button" type="primary" size="small">
          {t("tabs.more")} <DownOutlined />
        </Button>
      </Dropdown>
    </>
  );
};
export default MoreButton;
