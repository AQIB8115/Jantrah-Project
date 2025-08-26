import React from "react";
import { Modal, ModalHeader, ModalBody, Row, Col, Button, Label } from "reactstrap";
// import { Edit } from 'lucide-react';


const PatientCaseStudyViewModal = ({ isOpen, toggle, patient, onEditClick }) => {

    if (!patient) return null;

    const caseStudyFields = [
        "foodAllergy",
        "heartDisease",
        "highBloodPressure",
        "diabetic",
        "surgery",
        "accident",
        "others",
        "familymedicalHistory",
        "currentMedication",
        "pragnency",
        "breastFeeding",
        "healthInsurance"
    ];


    const formatLabel = (key) => key
        
        .replace(/([A-Z])/g, "$1")
        .replace(/^./, (str) => str.toUpperCase());

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
            <ModalHeader toggle={toggle}>Patient Case Study Details</ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={4} className="border-end">
                        <h6>Basic Info</h6>
                        <p>{patient.name}</p>
                        <p>{patient.email}</p>
                        <p>{patient.phone}</p>
                    </Col>
                    <Col md={8}>
                    <h6>Case Study Details</h6>
                    <Row>
                    {caseStudyFields.map((field, index) => (
                        <Col md={4} className="mb-3" key={index}>
                        <Label className="fw-bold">{formatLabel(field)}</Label>
                        <p className="mb-0">{patient[field] || "N/A"}</p>
                        </Col>
                    ))} 
                    </Row>
                    <div className="mt-3 text-end">
                        <Button color="primary" onClick={() => onEditClick(patient)}>
                            Edit
                        </Button>
                    </div>
                    </Col>
                </Row>
            </ModalBody>
        </Modal>
    );
};

export default PatientCaseStudyViewModal;