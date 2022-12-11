import React from "react";
// import { Insights, Dashboard, Products } from "./pages";
import ExploreIcon from "@material-ui/icons/Explore";
import Looks4Icon from "@material-ui/icons/Looks4";
import ShowChartIcon from "@material-ui/icons/ShowChart";

const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"))
const Products = React.lazy(() => import("./pages/Products"))
const Insights = React.lazy(() => import("./pages/Insights/Insights"))
// uygulama açılırken bütün sayfaların javascript file'ları yüklenmez
// sadece açılan sayfanın javascript file'ı yüklenir
// lazy() ve Suspense server side rendering(ssr) için çalışmaz
// orası için loadable components kullanılır.(npm => @loadable/components)
// kullanım içim yukarıdaki lazy ile sarılmış fonksiyonları loadable ile saracağız
// sonrasında <Suspense>'i kullandığımız yerden kaldıracağız.

export default {
  items: [
    {
      path: "/",
      name: "Dashboard",
      type: "link",
      icon: ExploreIcon,
      component: Dashboard
    },
    {
      path: "/products",
      name: "Products",
      type: "link",
      icon: Looks4Icon,
      component: Products
    },
    {
      path: "/insights",
      name: "Insights",
      type: "link",
      icon: ShowChartIcon,
      component: Insights
    }
  ]
};
