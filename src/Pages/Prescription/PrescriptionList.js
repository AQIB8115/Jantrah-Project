import React from "react";
import { Table, Button, Row, Col } from "reactstrap";
import { Eye, Edit, Trash2 } from "lucide-react";

const PrescriptionList = ({
    prescriptions = [],
    onAdd,
    onView,
    onEdit,
    onDelete
}) => {
    return (
        <div className="p-3">
            <Row className="mb-3" style={{ paddingTop: "60px" }}>
                <Col xs="6">
                    <Button color="primary" onClick={onAdd}>
                        + Add Prescription
                    </Button>
                </Col>
                <Col xs="6" className="text-end">
                    <h5>Prescription List</h5>
                </Col>
            </Row>

            <Table bordered responsive hover>
                <thead className="table-dark">
                    <tr>
                        <th>Exam/Investigation</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptions.length > 0 ? (
                        prescriptions.map((prescription, index) => (
                        <tr key={index}>
                            <td>{prescription.examInvestigation}</td>
                            <td>{prescription.doctor}</td>
                            <td>{prescription.patient}</td>
                            <td>{prescription.date}</td>
                            <td>
                              <Button 
                              size="sm" 
                              color="info" 
                              className="me-1" 
                              onClick={() => onView(prescription)}>
                              <Eye 
                              size={16}  
                              />
                              </Button>
                              <Button 
                              size="sm" 
                              color="warning" 
                              className="me-1" 
                              onClick={() => onEdit(prescription)}>
                              <Edit 
                              size={16} 
                              />
                              </Button>
                              <Button 
                              size="sm" 
                              color="danger" 
                              onClick={() => onDelete(prescription)}>
                              <Trash2 
                              size={16} 
                              />
                              </Button>
                            </td>
                        </tr>
                    ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">
                                No prescription found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )

};

export default PrescriptionList;
        