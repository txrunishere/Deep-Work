import { Link } from "react-router";
import insightsIcon from "../assets/icons/insights.svg";

export const TopBar = () => {
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
        {/* Placeholder for user profile icon, etc. */}
        <Link to={"/profile"}>
          <div className="rounded-full p-3 border" />
        </Link>
      </div>
    </nav>
  );
};
