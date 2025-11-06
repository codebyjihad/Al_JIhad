import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../components/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Skiills from "../components/Skiills";
import Contact from "../components/Contacts";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/skills",
        element: <Skiills></Skiills>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;