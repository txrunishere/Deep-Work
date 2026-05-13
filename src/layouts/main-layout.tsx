import { Outlet } from "react-router";
import { TopBar } from "../components";

export function MainLayout() {
  return (
    <>
      <div className="flex-1 h-screen w-full primary-bg primary-text">
        <TopBar />
        <Outlet />
      </div>
    </>
  );
}
