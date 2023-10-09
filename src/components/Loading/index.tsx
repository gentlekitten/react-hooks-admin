import { Spin } from "antd";
import "./index.less";

const Loading = ({ tip = "Loading" }: { tip?: string }) => {
  return (
    <Spin tip={tip} size="large" className="request-loading">
      <div className="content" />
    </Spin>
  );
};

export default Loading;
