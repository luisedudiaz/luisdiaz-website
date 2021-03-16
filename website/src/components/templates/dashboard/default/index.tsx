import { FC, useContext } from "react";
import { context } from "../../../../providers";

const Dashboard: FC = () => {
  const {logout} = useContext(context.auth)
  return <div>
    PRIVATE ROUTE
    <button className="btn btn-primary" onClick={logout!}>LOGOUT</button>
  </div>
}

export default Dashboard;
