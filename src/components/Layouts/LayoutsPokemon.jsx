import Navbar from "../Nav/Nav";
import Footer from "../Footer/Footer";

const PageLayout = (props) => {
  return (
    <>
      <Navbar />
        {props.children}
      <Footer />
    </>
  );
};

export default PageLayout;
