import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./Components/Login/Login.jsx";
import {Layout} from "./Components/DashboardLayout/Layout.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Developer from "./Components/Developer/Developer.jsx";
import Director from "./Components/Director/Director.jsx";
import Operator from "./Components/Operator/Operator.jsx";
import Manager from "./Components/ProjectManager/Manager.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Layout />}>
            <Route path={"/admin"} element={<Admin />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/developer"} element={<Developer />} />
            <Route path={"director"} element={<Director />} />
            <Route path={"/operator"} element={<Operator />} />
            <Route path={"/manager"} element={<Manager />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
