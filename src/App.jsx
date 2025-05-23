import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Registration from "./pages/Registration.jsx";
import Login from "./pages/login.jsx";
import Groupdetails from "./pages/Groupdetails.js";
import Account from "./pages/Account.jsx";
import { GroupContextProvider } from "./context/global.js";
import Bills from "./pages/Bills.js";
import Activity from "./pages/Activity.js";
import { Toaster } from "react-hot-toast";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GroupScreen from "./pages/GroupScreen.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <GroupContextProvider>
            <GoogleOAuthProvider clientId={client_id}>
              <Routes>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/groups" element={<GroupScreen />} />
                <Route path="/account" element={<Account />} />
                <Route path="/expenseDetails/:id" element={<Groupdetails />} />
                <Route path="/bills" element={<Bills />} />
                <Route path="/activity" element={<Activity />} />
              </Routes>

              <Toaster />
            </GoogleOAuthProvider>
          </GroupContextProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
