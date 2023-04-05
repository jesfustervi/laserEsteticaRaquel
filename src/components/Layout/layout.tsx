import * as React from "react";
import useStore from "../../services/store/store";
import Footer from "./footer/footer";
import Header from "./header/header";
import Navigation from "./header/navigation/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  document.documentElement.classList.add("dark");

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
