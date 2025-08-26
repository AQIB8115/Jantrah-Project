
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
} from "reactstrap";
import { Eye, Edit, Trash2 } from "lucide-react";
import DoctorScheduleModal from "./DoctorScheduleModal";

const DoctorScheduleView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [doctor, setDoctor] = useState("");
  const [weekday, setWeekday] = useState("");
  const [data, setData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [mode, setMode] = useState("add"); // 'add', 'edit', 'view'

  const doctorsList = ["Dr. Ahmed", "Dr. Sarah", "Dr. Khan"];
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    if (modalOpen) resetForm();
  };

  const resetForm = () => {
    setDoctor("");
    setWeekday("");
    setEditIndex(null);
    setMode("add");
  };

  const handleSubmit = () => {
    if (!doctor || !weekday) {
      alert("Please select both doctor and weekday.");
      return;
    }

    if (editIndex !== null) {
      const updated = [...data];
      updated[editIndex] = { doctor, weekday, status: "Active" };
      setData(updated);
    } else {
      setData([...data, { doctor, weekday, status: "Active" }]);
    }

    toggleModal();
  };

  const handleEdit = (index) => {
    const selected = data[index];
    setDoctor(selected.doctor);
    setWeekday(selected.weekday);
    setEditIndex(index);
    setMode("edit");
    setModalOpen(true);
  };

  const handleView = (index) => {
    const selected = data[index];
    setDoctor(selected.doctor);
    setWeekday(selected.weekday);
    setEditIndex(index);
    setMode("view");
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this schedule");
    if (confirmDelete) {
      const updated = data.filter((_, i) => i !== index);
    
    setData(updated);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-3" style={{ paddingTop: "40px" }}>
        <Col>
          <Button
            color="primary"
            onClick={() => {
              resetForm();
              setMode("add");
              setModalOpen(true);
            }}
          >
            + Add Schedule
          </Button>
        </Col>
      </Row>

      {data.length > 0 && (
        <>
          <Row>
            <Col><h2 className="mb-3">Doctor Schedule</h2></Col>
          </Row>

          <Row>
            <Col>
              <Table bordered striped responsive>
                <thead className="table-dark">
                  <tr>
                    <th>#</th>
                    <th>Doctor Name</th>
                    <th>Weekday</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.doctor}</td>
                      <td>{entry.weekday}</td>
                      <td>{entry.status}</td>
                      <td>
                        <Button size="sm" color="info" className="me-1" onClick={() => handleView(index)}>
                          <Eye size={16} />
                        </Button>
                        <Button size="sm" color="warning" className="me-1" onClick={() => handleEdit(index)}>
                          <Edit size={16} />
                        </Button>
                        <Button size="sm" color="danger" onClick={() => handleDelete(index)}>
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}

      <DoctorScheduleModal
        modalOpen={modalOpen}
        toggle={toggleModal}
        doctor={doctor}
        setDoctor={setDoctor}
        weekday={weekday}
        setWeekday={setWeekday}
        handleSubmit={handleSubmit}
        doctorsList={doctorsList}
        weekdays={weekdays}
        mode={mode}
        setMode={setMode}
      />
    </Container>
  );
};

export default DoctorScheduleView;
