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
    <nav className="md:hidden fixed top-0 inset-x-0 z-50 primary-bg border-b border-[#35353C] h-14 flex items-center justify-between px-4">
      <div className="flex items-center justify-center">
        <Link to={"/"}>
          <img
            src="./deep-work-icon.svg"
            alt="Deep Work logo"
            className="h-6 w-6"
          />
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
  );
};
