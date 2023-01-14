import { Routes, Route } from "react-router-dom";
import * as RouteUrl from "./routes";

import Home from "Container/Pages/Home";
import UnderDevelopment from "Container/Pages/UnderDevelopment";
import NotFound from "Container/Pages/NotFound";

const Index = () => {
  return (
    <Routes>
      <Route path={RouteUrl.Home} element={<Home />} />
      <Route path={RouteUrl.UnderDevelopment} element={<UnderDevelopment />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Index;
