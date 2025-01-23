import Link from "next/link";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className="layout">
      <Header />
      <Navbar />

      {/* Main content */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  navList: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
  },
  mainContent: {
    padding: "20px",
  },
};

export default Layout;
