import { Suspense, FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes.router";
import Loading from "components/utils/loading";

// import { toast } from 'react-toastify';

// toast.configure({
//   autoClose: false
// });

const Router: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>

  );
};

export default Router;
