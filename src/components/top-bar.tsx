import { Link, useNavigate } from "react-router";
import insightsIcon from "../assets/icons/insights.svg";
import { LogOut } from "lucide-react";
import { supabase } from "../utils/supabase";

export const TopBar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.error("Error while signout user:", error.message);
      return;
    }

    navigate("/sign-in");
  };

  return (
    <>
      <nav className="md:hidden fixed top-0 inset-x-0 z-50 primary-bg border-b border-[#35353C] h-14 flex items-center justify-between px-4">
        <div className="flex items-center justify-center">
          <Link to={"/"} className="flex items-center gap-2">
            <img
              src="./deep-work-icon.svg"
              alt="Deep Work logo"
              className="h-6 w-6"
            />

            <p className="font-bold text-xl">Deep Work</p>
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link to={"/insights"}>
            <img src={insightsIcon} alt="insights" />
          </Link>
          <button
            onClick={handleSignOut}
            aria-label="Sign out"
            className="inline-flex items-center"
          >
            <LogOut size={20} className="text-red-400" />
          </button>
        </div>
      </nav>

      {/* HEADER SHOWN ON WEB SCREENS */}
      <header className="md:flex hidden w-full border-b border-[#1f1f2e] bg-[#070816] px-6 py-4">
        <div className="mx-auto flex max-w-4xl w-full items-center justify-between">
          {/* Logo */}
          <div>
            <Link className="flex items-center gap-2" to={"/"}>
              <img
                src="./deep-work-icon.svg"
                className="size-8"
                alt="Deep Work Icon"
              />
              <h1 className="text-2xl font-semibold tracking-wide text-[#f5e9dc]">
                Deep Work
              </h1>
            </Link>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <Link to={"/insights"}>
              <img src={insightsIcon} alt="insights" />
            </Link>
            <button
              onClick={handleSignOut}
              aria-label="Sign out"
              className="inline-flex items-center cursor-pointer"
            >
              <LogOut size={20} className="text-red-400" />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
