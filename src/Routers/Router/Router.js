import Main from "../../Layout/Main/Main";
import HomePages from "../../Pages/HomePages/HomePages";

const { createBrowserRouter } = require("react-router-dom");


const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main> ,
    children: [
      {
        path: '/',
        element: <HomePages></HomePages>
      }
    ] 
  }
]);

export default routers;