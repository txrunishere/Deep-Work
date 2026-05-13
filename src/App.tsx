import { Route, Routes } from "react-router";
import { Home } from "./pages/root/";
import { SignIn, SignUp } from "./pages/auth";
import { MainLayout } from "./layouts/main-layout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default App;
