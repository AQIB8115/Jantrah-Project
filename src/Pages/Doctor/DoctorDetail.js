import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col } from "reactstrap";

const DoctorDetailModal = ({ isOpen, toggle, doctor, onEdit }) => {
  if (!doctor) return null;

  const detailFields = [
    { label: "Name", value: doctor.name },
    { label: "Email", value: doctor.email },
    { label: "Phone", value: doctor.phone },
    { label: "Date of Birth", value: doctor.dob },
    { label: "Specialist", value: doctor.specialist },
    { label: "Designation", value: doctor.designation },
    { label: "Gender", value: doctor.gender },
    { label: "Blood Group", value: doctor.bloodgroup },
    { label: "Commission", value: `${doctor.commission}%` },
    { label: "Address", value: doctor.address },
    { label: "Biography", value: doctor.biography },
    { label: "Status", value: doctor.status },
  ];

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>Doctor Details</ModalHeader>
      <ModalBody>
        <Row>
          {detailFields.map((field, index) => (
            <Col md={3} key={index} className="mb-3">
              <strong>{field.label}:</strong>
              <div>{field.value || "N/A"}</div>
            </Col>
          ))}
        </Row>

        {doctor.photo && (
          <div className="text-center mt-3">
            <img
              src={URL.createObjectURL(doctor.photo)}
              alt="Profile"
              width="100"
              className="rounded"
            />
          </div>
        )}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={onEdit}>Edit</Button>
        <Button color="warning" onClick={toggle}>Close</Button>
      </ModalFooter>
    </Modal>
  );
};

export default DoctorDetailModal;
