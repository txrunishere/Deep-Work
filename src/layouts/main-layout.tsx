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
      <main className="py-14 md:py-0 md:max-w-4xl md:mx-auto">
        <Outlet />
      </main>
    </>
  );
}
