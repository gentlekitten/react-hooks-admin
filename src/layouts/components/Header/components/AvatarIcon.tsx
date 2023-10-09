import { useRef } from "react";
import {
  Avatar,
  Modal,
  Dropdown,
  message,
  Button,
  MenuProps,
} from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { connect } from "react-redux";
import { setToken } from "@/redux/modules/global/action";
import PasswordModal from "./PasswordModal";
import InfoModal from "./InfoModal";
import avatar from "@/assets/images/avatar.png";

const AvatarIcon = (props: any) => {
  const { setToken } = props;
  const navigate = useNavigate();

  interface ModalProps {
    showModal: (params: { name: number }) => void;
  }
  const passRef = useRef<ModalProps>(null);
  const infoRef = useRef<ModalProps>(null);

  // 退出登录
  const logout = () => {
    Modal.confirm({
      title: "温馨提示 🧡",
      icon: <ExclamationCircleOutlined />,
      content: "是否确认退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        setToken("");
        message.success("退出登录成功！");
        navigate("/login");
      },
    });
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Button
          className="dropdown-button"
          onClick={() => navigate(HOME_URL)}
          type="text"
        >
          首页
        </Button>
      ),
      key: "1",
    },
    {
      label: (
        <Button
          className="dropdown-button"
          type="text"
          onClick={() => infoRef.current!.showModal({ name: 11 })}
        >
          个人信息
        </Button>
      ),
      key: "2",
    },
    {
      label: (
        <Button
          className="dropdown-button"
          type="text"
          onClick={() => passRef.current!.showModal({ name: 11 })}
        >
          修改密码
        </Button>
      ),
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Button className="dropdown-button" type="text" onClick={logout}>
          退出登录
        </Button>
      ),
      key: "5",
    },
  ];

  const menuProps = {
    items,
  };

  return (
    <>
      <Dropdown menu={menuProps} placement="bottom" arrow trigger={["click"]}>
        <Avatar size="large" src={avatar} />
      </Dropdown>
      <InfoModal innerRef={infoRef}></InfoModal>
      <PasswordModal innerRef={passRef}></PasswordModal>
    </>
  );
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(AvatarIcon);
