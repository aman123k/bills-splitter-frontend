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
import PrivateRoute from "./component/PrivateRoute";
import PublicRoute from "./component/PublicRoute";

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
                <Route
                  path="/registration"
                  element={
                    <PublicRoute>
                      <Registration />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <Login />
                    </PublicRoute>
                  }
                />
                <Route
                  path="/"
                  element={
                    <PrivateRoute>
                      <Home />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/groups"
                  element={
                    <PrivateRoute>
                      <GroupScreen />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/account"
                  element={
                    <PrivateRoute>
                      <Account />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/expenseDetails/:id"
                  element={
                    <PrivateRoute>
                      <Groupdetails />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/bills"
                  element={
                    <PrivateRoute>
                      <Bills />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/activity"
                  element={
                    <PrivateRoute>
                      <Activity />
                    </PrivateRoute>
                  }
                />
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
