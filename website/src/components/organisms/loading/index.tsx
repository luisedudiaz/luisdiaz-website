import { FC } from "react";
import "./index.scss";
const Loading: FC = () => {
  return (
    <div className="w-100 d-flex">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
