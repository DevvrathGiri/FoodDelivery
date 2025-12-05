import { lazy } from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";



const Grocery = lazy(()=> import("./components/Grocery"))
const AppLayout = () => {
  return (
    <div className="app">
      <Heading />
      <Outlet />
    </div>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
       {
        path: "/Home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/Grocery",
        element:<Grocery/>,
      },
      {
        path:"/RestaurantMenu/:resId",
        element:<RestaurantMenu/>,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={AppRouter} />);
export default AppLayout;
