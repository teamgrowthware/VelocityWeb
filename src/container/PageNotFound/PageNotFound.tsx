/* eslint-disable no-empty-pattern */
import { Card } from "../../Library/Module";
import Wrapper from "../Wrapper";

const PageNotFound = () => {
    return (
        <Wrapper pageTitle="Dashboard" breadcrumbList={null}>
            <Card title="Under Development">
                <p className="text-left">
                    This page is currently under development, Please visit again some time later.
                </p>
            </Card>
        </Wrapper>
    );
};
export default PageNotFound;
