import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Login} from "./Components/Login/Login.jsx";
import Developer from "./Components/Developer/Developer.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Manager from "./Components/ProjectManager/Manager.jsx";
import Director from "./Components/Director/Director.jsx";
import Operator from "./Components/Operator/Operator.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path={"/developer"} element={<Developer />}/>
            <Route path={"/admin"} element={<Admin />}/>
            <Route path={"/manager"} element={<Manager />}/>
            <Route path={"/director"} element={<Director />}/>
            <Route path={"/operator"} element={<Operator />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
