import { Route, Routes } from "react-router";
import { Home } from "./pages/root/";
import { SignIn, SignUp } from "./pages/auth";
import { MainLayout } from "./layouts/main-layout";
import { AuthProvider } from "./context/auth-context";
import { AuthLayout } from "./layouts/auth-layout";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
