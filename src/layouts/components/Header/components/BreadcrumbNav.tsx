import { Breadcrumb } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { connect } from "react-redux";

const BreadcrumbNav = (props: any) => {
  const { pathname } = useLocation();
  const { themeConfig } = props.global;
  const navigator = useNavigate();
  const breadcrumbList = props.breadcrumb.breadcrumbList[pathname] || [];
  const items = [
    {
      title: (
        <span className="breadcrumb-span" onClick={() => navigator(HOME_URL)}>
          首页
        </span>
      ),
    },
  ];
  breadcrumbList.length > 1 &&
    breadcrumbList.forEach((item: string) => {
      items.push({
        title: <span>{item !== "首页" ? item : null}</span>,
      });
    });

  return (
    <>{themeConfig.breadcrumb && <Breadcrumb items={items}></Breadcrumb>}</>
  );
};

const mapStateToProps = (state: any) => state;
export default connect(mapStateToProps)(BreadcrumbNav);
