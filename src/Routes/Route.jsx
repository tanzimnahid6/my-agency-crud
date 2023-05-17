import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Details from "../Pages/Details/Details"
import PrivetRoute from "./PrivetRoute"
import Login from "../Authentication/Login"
import Register from "../Authentication/Register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'about',
        element:<About></About>
       },
       {
        path:'login',
        element:<Login></Login>
       },
       {
        path:'register',
        element:<Register></Register>
       },
       {
        path:'service/:id',
        element:<PrivetRoute><Details></Details></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
       }
    ]
  },
])
export default router
