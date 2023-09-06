import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/login";
import Groupdetails from "./pages/Groupdetails";
import Account from "./pages/Account";
import Group from "./pages/Group";
import { ThemeContextProvider } from "./context/global.js";
import Bills from "./pages/Bills";
import Activity from "./pages/Activity";
function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeContextProvider>
          <Routes>
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/groupdetails/:id" element={<Groupdetails />} />
            <Route path="/group" element={<Group />} />
            <Route path="/account" element={<Account />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/activity" element={<Activity />} />
          </Routes>
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
