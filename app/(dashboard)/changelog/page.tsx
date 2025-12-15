//import node module libraries
import { Fragment } from "react";
import { Metadata } from "next";
import { Row, Col, Button } from "react-bootstrap";
import { IconPlus } from "@tabler/icons-react";

//import custom components
import Flex from "components/common/Flex";
import DasherBreadcrumb from "components/common/DasherBreadcrumb";

export const metadata: Metadata = {
  title: "Products | Dasher - Responsive Bootstrap 5 Admin Dashboard",
  description: "Dasher - Responsive Bootstrap 5 Admin Dashboard",
};

const Ecommerce = () => {
  return (
    <Fragment>
      <Row>
        <Col>
          <Flex
            justifyContent="between"
            alignItems="center"
            className="mb-8 w-100"
            breakpoint="md"
          >
            <div>
              <h1 className="mb-3 h2">Changelog</h1>
              <DasherBreadcrumb />
            </div>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col md={12} xs={12} className="mb-6 mb-md-0 mx-auto">
          <div className="mb-12 product-content d-flex flex-column gap-8">
            <div className="docs-example row mt-7">
              <div className="col-lg-4 col-12">
                <div id="initial">
                  <h4 className="mb-3 fw-semi-bold">
                    <code>v1.0.1</code>- December 16, 2025
                  </h4>
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div>
                  <h3 className="mb-2">Dasher UI NextJS Update</h3>
                  <ul>
                    <li>Updated Nextjs to 16.x</li>
                    <li>Updated React to 19.x</li>
                    <li>Required packages are Updated</li>
                    <li>Fixed a few bugs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col md={12} xs={12} className="mb-6 mb-md-0 mx-auto">
          <div className="mb-12 product-content d-flex flex-column gap-8">
            <div className="docs-example row mt-7">
              <div className="col-lg-4 col-12">
                <div id="initial">
                  <h4 className="mb-3 fw-semi-bold">
                    <code>v1.0.0</code>- July 01, 2025
                  </h4>
                </div>
              </div>
              <div className="col-md-8 col-12">
                <div>
                  <h3 className="mb-2">Initial Release Dasher</h3>
                  <p>
                    Dasher is a fully responsive and yet modern free bootstrap 5
                    template.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Ecommerce;
