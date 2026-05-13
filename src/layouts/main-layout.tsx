import { Navigate, Outlet } from "react-router";
import { TopBar } from "../components";
import { useAuth } from "../context/auth-context";

export function MainLayout() {
  const { session } = useAuth();

  if (session === undefined) {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <Navigate to={"/sign-in"} />;
  }

  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
}
