import Loading from "@components/Loading/Loading";
import classNames from "@utils/className";
import { HTMLAttributes, useEffect, useState } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutHomeProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const LayoutHome = ({ children, className = "" }: LayoutHomeProps) => {
  const [first, setFirst] = useState(true);

  useEffect(() => {
    setTimeout(() => setFirst(false), 1000);
  }, []);

  if (first) {
    return <Loading />;
  }
  return (
    <div className={classNames("flex flex-col min-h-screen", className)}>
      <Header />
      <main className="flex-1 pt-[60px]">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutHome;