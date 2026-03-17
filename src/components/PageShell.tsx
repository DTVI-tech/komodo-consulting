import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PageShell = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default PageShell;
