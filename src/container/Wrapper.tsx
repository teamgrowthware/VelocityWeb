/* eslint-disable no-empty-pattern */
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
        </div>
      </div>
    </>
  );
};
export default Wrapper;
