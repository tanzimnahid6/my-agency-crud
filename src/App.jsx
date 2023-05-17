import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";


const App = () => {
  return (
    <div className="w-11/12 mx-auto">
     <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default App;