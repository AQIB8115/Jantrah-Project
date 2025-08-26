
import React, { useState } from "react";
import {
  Table,
  Button,
  Row,
  Col,
} from "reactstrap";
import {  Eye, Edit } from "lucide-react";
import AddPatientModal from "./AddPatientModal";

const PatientList = () => {
  const [patients, setPatients] = useState([
    {
      id: 1,
      profile: "👤",
      name: "John Doe",
      mrn: "MRN001",
      phone: "1234567890",
      area: "Gulberg",
      city: "Lahore",
    },
    {
      id: 2,
      profile: "👤",
      name: "Ayesha Khan",
      mrn: "MRN002",
      phone: "03211234567",
      area: "DHA",
      city: "Karachi",
    },
  ]);

  // const [dropdownOpen, setDropdownOpen] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  // const toggleDropdown = (id) => {
  //   setDropdownOpen((prev) => (prev === id ? null : id));
  // };

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleAddPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
    toggleModal(); // Close modal after adding
  };

  return (
    <div className="p-3">
      <Row className="mb-3" style={{ paddingTop: "60px" }}>
        <Col>
          <Button color="primary" onClick={toggleModal}>
             + Add Patient
          </Button>
        </Col>
      </Row>

      {/* Modal */}
      <AddPatientModal
        isOpen={modalOpen}
        toggle={toggleModal}
        addPatient={handleAddPatient}
      />

      {/* Table */}
      <Table bordered hover responsive>
        <thead className="table-dark">
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>MRN</th>
            <th>Phone</th>
            <th>Area</th>
            <th>City</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((p) => (
            <tr key={p.id}>
              <td>{p.profile}</td>
              <td>{p.name}</td>
              <td>{p.mrn}</td>
              <td>{p.phone}</td>
              <td>{p.area}</td>
              <td>{p.city}</td>
              <td>
                {/* <Dropdown
                  isOpen={dropdownOpen === p.id}
                  toggle={() => toggleDropdown(p.id)}
                  className="d-inline-block"
                >
                  <DropdownToggle color="light" className="btn-sm">
                    <MoreVertical size={18} />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Add Consultancy Fee</DropdownItem>
                    <DropdownItem>View History</DropdownItem>
                    <DropdownItem>Create Appointment</DropdownItem>
                  </DropdownMenu>
                </Dropdown> */}
                <Button color="info" className="btn-sm mx-1">
                  <Eye size={16} />
                </Button>
                <Button color="warning" className="btn-sm">
                  <Edit size={16} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientList;
