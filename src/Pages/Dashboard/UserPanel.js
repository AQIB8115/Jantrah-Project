

import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const UserPanel = ({ cardData, itemsPerRow }) => {
  return (
    <React.Fragment>
      {Array.from({ length: Math.ceil(cardData.length / itemsPerRow) }).map((_, rowIndex) => (
        <Row key={`row-${rowIndex}`} className="mb-0">
          {cardData.slice(rowIndex * itemsPerRow, rowIndex * itemsPerRow + itemsPerRow).map((item) => (
            <Col 
              lg={12 / itemsPerRow} 
              sm={12 / itemsPerRow} 
              xl={12 / itemsPerRow} 
              md={12 / itemsPerRow} 
              xs={12 / itemsPerRow} 
              key={item.id}
              >
              <Card>
                <CardBody>
                  <div className="d-flex text-muted">
                    <div className="flex-shrink-0 me-3 align-self-center">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-green squire text-black font-size-20">
                          {/* <i className="ri-group-line"></i> */}
                          <i className={item.icon}></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <h5 className="mb-1">{item.title}</h5>
                      <h5 className="mb-3"> </h5>
                      <p className="text-truncate mb-0">
                        <span className="text-success me-2"></span>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      ))}
    </React.Fragment>
  );
};

export default UserPanel;
