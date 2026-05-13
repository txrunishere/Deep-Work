export const TopBar = () => {
  return (
    <nav className="md:hidden fixed top-0 inset-x-0 z-50 primary-bg border-b border-[#35353C] h-14 flex items-center justify-between px-4">
      <div className="flex items-center justify-center">
        <img src="./deep-work-icon.svg" className="h-6 w-6" />
      </div>
      <div>
        {/* Placeholder for user profile icon, etc. */}
        <div className="rounded-full p-4 border" />
      </div>
    </nav>
  );
};
