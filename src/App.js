import React, { lazy, Suspense, useEffect, useState } from "react";
import appStore from "./store/appStore";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";
import { RestaurentMenu } from "./components/RestaurentMenu";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import { UserContext } from "./utils/userContext";

// Chunking
// code splitting
// dynamic bundling

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [username, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Aniket Kumar",
    };
    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, setUserName }}>
        <div className="class">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading .....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurents/:resId",
        element: <RestaurentMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
