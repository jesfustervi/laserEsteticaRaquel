import * as React from "react";
import Navigation from "./navigation/navigation";

const Header = () => {
  return (
    <div
      className={
        "dark:bg-gray-800 dark:text-white bg-white shadow-lg fixed top-0 w-full z-50"
      }
    >
      <Navigation></Navigation>
    </div>
  );
};
export default Header;
