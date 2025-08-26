import React, { useRef } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Button,
  Row,
  Col,
  Table,
} from "reactstrap";
import { Edit3, Printer } from "lucide-react";

const PrescriptionViewModal = ({ isOpen, toggle, prescription, onEdit }) => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current;
    const WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(`
      <html>
        <head>
          <title>Prescription Print</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #000; padding: 8px; text-align: left; }
            h4, h5 { margin-bottom: 0; }
          </style>
        </head>
        <body>${printContent.innerHTML}</body>
      </html>
    `);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  if (!prescription) return null;

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>
      <div className="w-100 d-flex justify-content-between align-items-center">
      <h5 className="mb-0">Prescription Details</h5>
      <div className="d-flex gap-2">
        <Button 
          color="warning" 
          size="sm" 
          onClick={() => onEdit(prescription)}>
            <Edit3 
            size={14} 
            /> 
            Edit
          </Button>
          <Button 
          color="secondary" 
          size="sm" 
          onClick={handlePrint}>
            <Printer 
            size={14} 
            /> 
            Print
          </Button>
        </div>
      </div>
      </ModalHeader>

      <ModalBody>



        <div ref={printRef}>
          <Row className="d-flex justify-content-end">
            <Col md="6">
              <h6><strong>Prescription ID:</strong> {prescription.id || "0036"}</h6>
              <h6><strong>Doctor:</strong> {prescription.doctor}</h6>
              <h6><strong>Date:</strong> {prescription.date}</h6>
              <h6><strong>Patient:</strong> {prescription.patient}</h6>
              <h6><strong>Phone:</strong> {prescription.phone || "777788888"}</h6>
              <h6><strong>MRN No:</strong> {prescription.mrn || "240984"}</h6>
            </Col>
          </Row>

          <Table bordered className="mt-4">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Description</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {prescription.medicines?.map((med, idx) => (
                <tr key={idx}>
                  <td>{med.name}</td>
                  <td>{med.description}</td>
                  <td>
                    {med.days && `${med.days} day(s) `}
                    {med.weeks && `${med.weeks} week(s) `}
                    {med.months && `${med.months} month(s)`}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default PrescriptionViewModal;
