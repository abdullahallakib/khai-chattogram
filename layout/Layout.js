import React from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import DevCredit from "../components/ui/DevCredit";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
      <DevCredit />
    </React.Fragment>
  );
};

export default Layout;
