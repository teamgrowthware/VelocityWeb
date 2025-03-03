/* eslint-disable no-empty-pattern */
import Footer from "../components/Footer";
import Header from "../components/Header";
interface AlertProps {
  children?: any;
  pageTitle?: string;
  breadcrumbList?: any;
  isLoading?: boolean
}
const Wrapper = ({
  children,
  pageTitle,
  breadcrumbList,
  isLoading
}: AlertProps): JSX.Element => {
  return (
    <>
      <div className="wrapper">
        <div className="mailbox">
          <Header isLoading={isLoading}></Header>
          {children}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};
export default Wrapper;
