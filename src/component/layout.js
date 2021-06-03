import { Fragment, useState } from "react";
import Header from "../component/header/header";
import Sticky from "react-stickynode";
import Footer from "./footer/footer";
export default function Layout({ children, setModalVideo }) {
  const [isSticky, setIsSticky] = useState(false);
  const handleStateChange = (status) => {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true);
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false);
    }
  };
  return (
    <Fragment>
      <Sticky top={0} innerZ={1001} onStateChange={handleStateChange}>
        <Header setModalVideo={setModalVideo} className={`${isSticky ? "sticky" : "unSticky"}`} />
      </Sticky>
      {children}
      <Footer />
    </Fragment>
  );
}
