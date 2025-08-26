import React, { useState } from "react";
import {
  Row, Col, Form, FormGroup, Label, Input, Button, Nav, NavItem, NavLink, TabContent, TabPane, Table
} from "reactstrap";
import classnames from "classnames";
import { Plus, Trash2 } from "lucide-react";

const medicineOptions = {
  Tablet: ["Panadol", "Brufen"],
  Syrup: ["Cough Syrup", "Vitamin Syrup"],
  Injection: ["Insulin", "Antibiotic"],
};

const days = Array.from({ length: 30 }, (_, i) => i + 1);;
const weeks = Array.from({ length: 55 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);;


const PrescriptionForm = ({ onCancel }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [showHistory, setShowHistory] = useState(false);
  const [medicines, setMedicines] = useState([
    { type: "", name: "", description: "", days: "", weeks: "", months: "" },
  ]);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleAddRow = () => {
    setMedicines([
      ...medicines,
      { type: "", name: "", description: "", days: "", weeks: "", months: "" },
    ]);
  };

  const handleRemoveRow = (index) => {
    if (medicines.length === 1) return;
    setMedicines(medicines.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = [...medicines];
    updated[index][field] = value;
    if (field === "type") {
      updated[index]["name"] = ""; // reset medicine name
    }
    setMedicines(updated);
  };

  return (
    <Form className="border p-3 rounded">
          <Row style={{ paddingTop: "65px" }}>
          <div className="d-flex justify-content-start mb-3">
        <Button color="primary">View All</Button>
        </div>

        <Col md="4">
          <FormGroup>
            <Label>Select Patient *</Label>
            <Input type="select">
              <option>Select</option>
              <option>Ayan Ali</option>
              <option>Maira Khan</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Select Examination</Label>
            <Input type="select">
              <option>Select</option>
              <option>Blood Test</option>
              <option>X-Ray</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md="4">
          <FormGroup>
            <Label>Prescription Date *</Label>
            <Input type="date" />
          </FormGroup>
        </Col>
      </Row>

      <Button 
      color="primary" 
      onClick={() => setShowHistory(!showHistory)} 
      className="mb-3">
        Patient History
      </Button>

      {showHistory && (
        <div className="mb-3">
          <Nav tabs>
            {["Medical", "Drug", "Social", "Dental"].map((label, idx) => (
              <NavItem key={idx}>
                <NavLink
                  className={classnames({ active: activeTab === `${idx + 1}` })}
                  onClick={() => toggleTab(`${idx + 1}`)}
                >
                  {label} History
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeTab} className="p-3 border">
            {[1, 2, 3, 4].map((num) => (
              <TabPane key={num} tabId={`${num}`}>
                <p>{["Medical", "Drug", "Social", "Dental"][num - 1]} History content goes here...</p>
              </TabPane>
            ))}
          </TabContent>
        </div>
      )}

      <Table bordered responsive>
        <thead className="table-light">
          <tr>
            <th>Medicine Type</th>
            <th>Medicine Name</th>
            <th>Description</th>
            <th>Days</th>
            <th>Weeks</th>
            <th>Months</th>
            <th>Remove/ Add</th>
          </tr>
        </thead>
        <tbody>
          {medicines.map((med, idx) => (
            <tr key={idx}>
              <td>
                <Input
                  type="select"
                  value={med.type}
                  onChange={(e) => handleChange(idx, "type", e.target.value)}
                >
                  <option>Select</option>
                  {Object.keys(medicineOptions).map((type, i) => (
                    <option key={i}>{type}</option>
                  ))}
                </Input>
              </td>
              <td>
                <Input
                  type="select"
                  value={med.name}
                  onChange={(e) => handleChange(idx, "name", e.target.value)}
                  disabled={!med.type}
                >
                  <option>Select</option>
                  {medicineOptions[med.type]?.map((name, i) => (
                    <option key={i}>{name}</option>
                  ))}
                </Input>
              </td>
              <td>
                <Input
                  type="text"
                  value={med.description}
                  onChange={(e) => handleChange(idx, "description", e.target.value)}
                />
              </td>
              <td>
                <Input
                  type="select"
                  value={med.days}
                  onChange={(e) => handleChange(idx, "days", e.target.value)}
                >
                  <option>Select</option>
                  {days.map((d, i) => <option key={i}>{d}</option>)}
                </Input>
              </td>
              <td>
                <Input
                  type="select"
                  value={med.weeks}
                  onChange={(e) => handleChange(idx, "weeks", e.target.value)}
                >
                  <option>Select</option>
                  {weeks.map((w, i) => <option key={i}>{w}</option>)}
                </Input>
              </td>
              <td>
                <Input
                  type="select"
                  value={med.months}
                  onChange={(e) => handleChange(idx, "months", e.target.value)}
                >
                  <option>Select</option>
                  {months.map((m, i) => <option key={i}>{m}</option>)}
                </Input>
              </td>
              <td className="text-center">
                <Button
                  color="danger"
                  size="sm"
                  disabled={medicines.length === 1}
                  onClick={() => handleRemoveRow(idx)}
                  className="me-1"
                >
                  <Trash2 size={16} />
                </Button>
                {/* {idx === medicines.length - 1 && ( */}
                  <Button color="success" size="sm" onClick={handleAddRow}>
                    <Plus size={16} />
                  </Button>
                {/* ) */}
                {/* } */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


        <div>
          <Button color="primary" className="me-2">Submit</Button>
          <Button color="warning" onClick={onCancel}>Cancel</Button>
        </div>
      {/* </div> */}
    </Form>
  );
};

export default PrescriptionForm;
