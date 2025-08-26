import React from "react";
import { Table, Button, Row, Col } from "reactstrap";
import { Eye, Edit, Trash2} from 'lucide-react';


const PatientCaseStudyList = ({ patients = [], onView, onEdit, onDelete, onAdd }) => {
    console.log("Received Patients:", patients);

    return (
        <div className="p-3">
            <Row className="mb-3" style={{ paddingTop: "60px" }}>
            
                <Col xs="6">
                    <Button color="primary" onClick={onAdd}>
                        + Add Patient Case Study
                    </Button>
                </Col>
            </Row>
            <Col xs="6">
                <h4 className="mb-3">Patient Case Study List</h4>
            </Col>
            <Table bordered responsive hover>
                <thead className="table-dark">
                    <tr>
                        {/* <th>#</th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Food Allergy</th>
                        <th>Heart Disease</th>
                        <th>Diabetic</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.length > 0 ? (
                        patients.map((patient, index) => (
                            <tr key={index}>
                                {/* <td>{index + 1}</td> */}
                                <td>{patient.name}</td>
                                <td>{patient.email}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.foodAllergy}</td>
                                <td>{patient.heartDisease}</td>
                                <td>{patient.diabetic}</td>
                                <td>
                                  <Button 
                                  size="sm" 
                                  color="info" 
                                  className="me-1" 
                                  onClick={() => onView(patient)}>
                                  <Eye 
                                  size={16}  
                                  />
                                  </Button>
                                  <Button 
                                  size="sm" 
                                  color="warning" 
                                  className="me-1" 
                                  onClick={() => onEdit(patient)}>
                                  <Edit 
                                  size={16} 
                                  />
                                  </Button>
                                  <Button 
                                  size="sm" 
                                  color="danger" 
                                  onClick={() => onDelete(patient)}>
                                  <Trash2 
                                  size={16} 
                                  />
                                  </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8" className="text-center">
                                No patient case study found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );

};

export default PatientCaseStudyList;
