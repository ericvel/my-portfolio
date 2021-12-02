import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="container mx-auto">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
