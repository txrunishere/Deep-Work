import { Navigate, Outlet } from "react-router";
import { useAuth } from "../context/auth-context";

export const AuthLayout = () => {
  const { session } = useAuth();

  if (session === undefined) {
    return null;
  }

  if (session) {
    return <Navigate to="/" />;
  }

  return (
    <div className="max-w-md mx-auto py-20 flex flex-col items-center">
      <div className="flex items-center flex-col gap-6">
        <div className="rounded-md border-2 border-[#464554] p-2 bg-[#1f1f27]">
          <img
            className="size-6 md:size-8"
            src="./deep-work-icon.svg"
            alt="Deep Work logo"
          />
        </div>
        <div className="text-center space-y-2">
          <h1 className="font-bold text-4xl md:text-6xl">Deep Work</h1>
          <h4 className="text-base md:text-xl">Obsidian Habit Tracker</h4>
        </div>
      </div>
      <Outlet />
    </div>
  );
};
