

import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label,
  Input,
} from "reactstrap";

const DoctorScheduleModal = ({
  modalOpen,
  toggle,
  doctor,
  setDoctor,
  weekday,
  setWeekday,
  handleSubmit,
  doctorsList,
  weekdays,
  mode,
  setMode,
}) => {
  const isEditable = mode === "add" || mode === "edit";

  const getTitle = () => {
    if (mode === "add") return "Add Doctor Schedule";
    if (mode === "edit") return "Edit Doctor Schedule";
    return "View Doctor Schedule";
  };

  return (
    <Modal isOpen={modalOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>{getTitle()}</ModalHeader>
      <ModalBody>
        <Row>
          <Col md={12} className="mb-3">
            <Label for="doctorSelect">Select Doctor</Label>
            <Input
              id="doctorSelect"
              type="select"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              disabled={!isEditable}
            >
              <option value="">-- Select Doctor --</option>
              {doctorsList.map((doc, i) => (
                <option key={i} value={doc}>
                  {doc}
                </option>
              ))}
            </Input>
          </Col>

          <Col md={12} className="mb-3">
            <Label for="weekdaySelect">Select Weekday</Label>
            <Input
              id="weekdaySelect"
              type="select"
              value={weekday}
              onChange={(e) => setWeekday(e.target.value)}
              disabled={!isEditable}
            >
              <option value="">-- Select Weekday --</option>
              {weekdays.map((day, i) => (
                <option key={i} value={day}>
                  {day}
                </option>
              ))}
            </Input>
          </Col>

          <Col md={12} className="text-end">
            {mode === "add" && (
              <>
                <Button color="warning" className="me-2" onClick={toggle}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </>
            )}

            {mode === "edit" && (
              <>
                <Button color="warning" className="me-2" onClick={() => setMode("view")}>
                  Cancel
                </Button>
                <Button color="primary" onClick={handleSubmit}>
                  Update
                </Button>
              </>
            )}

            {mode === "view" && (
              <Button color="primary" onClick={() => setMode("edit")}>
                Edit
              </Button>
            )}
          </Col>
        </Row>
      </ModalBody>
    </Modal>
  );
};

export default DoctorScheduleModal;


