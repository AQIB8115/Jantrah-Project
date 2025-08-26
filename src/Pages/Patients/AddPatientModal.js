
import React, { useState, useEffect } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col
} from "reactstrap";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaIdCard,
  FaMapMarkerAlt,
  FaMoneyBill,
  FaVenusMars,
  FaTint,
  FaBirthdayCake,
  FaHeart,
  FaBuilding,
  FaCity,
  FaInfoCircle,
  FaGlobe
} from "react-icons/fa";

const AddPatientModal = ({ isOpen, toggle, addPatient }) => {
  const [skipEmail, setSkipEmail] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    gender: "",
    bloodGroup: "",
    dob: "",
    maritalStatus: "",
    cnic: "",
    creditBalance: "",
    insurance: "",
    area: "",
    city: "",
    address: "",
    otherDetails: "",
    heardFrom: ""
  });

  useEffect(() => {
    if (!isOpen) {
      // Reset form when modal closes
      setForm({
        name: "",
        phone: "",
        email: "",
        gender: "",
        bloodGroup: "",
        dob: "",
        maritalStatus: "",
        cnic: "",
        creditBalance: "",
        insurance: "",
        area: "",
        city: "",
        address: "",
        otherDetails: "",
        heardFrom: ""
      });
      setSkipEmail(false);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "skipEmail") {
      setSkipEmail(checked);
      if (checked) {
        setForm({ ...form, email: "" });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      alert("Name and Phone are required.");
      return;
    }

    if (!skipEmail && !form.email.trim()) {
      alert("Email is required or check 'No Email'");
      return;
    }

    if (!form.cnic.trim()) {
      alert("CNIC / Passport is required.");
      return;
    }

    const newPatient = {
      ...form,
      id: Date.now(),
      profile: "👤",
      mrn: "MRN" + Math.floor(1000 + Math.random() * 9000)
    };

    if (typeof addPatient === "function") {
      addPatient(newPatient);
    } else {
      console.error("addPatient is not a function", addPatient);
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
      <ModalHeader toggle={toggle}>Add Patient</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={3}>
              <FormGroup>
                <Label><FaUser /> Name *</Label>
                <Input name="name" value={form.name} onChange={handleChange} required />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label><FaPhone /> Phone *</Label>
                <Input name="phone" value={form.phone} onChange={handleChange} required />
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label><FaEnvelope /> Email *</Label>
                <Input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  disabled={skipEmail}
                  required={!skipEmail}
                />
                <div className="form-check mt-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="skipEmail"
                    checked={skipEmail}
                    onChange={handleChange}
                    id="noEmail"
                  />
                  <label className="form-check-label" htmlFor="noEmail">
                    No Email
                  </label>
                </div>
              </FormGroup>
            </Col>
            <Col md={3}>
              <FormGroup>
                <Label><FaVenusMars /> Gender</Label>
                <Input type="select" name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                  <Label><FaTint /> Blood Group</Label>
                  <Input type="select" name="bloodGroup" value={form.bloodGroup} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                    <option>O+</option>
                    <option>O-</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaBirthdayCake /> DOB</Label>
                  <Input type="date" name="dob" value={form.dob} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaHeart /> Marital Status</Label>
                  <Input type="select" name="maritalStatus" value={form.maritalStatus} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Widowed</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaIdCard /> CNIC / Passport *</Label>
                  <Input name="cnic" value={form.cnic} onChange={handleChange} required />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaMoneyBill /> Credit Balance</Label>
                  <Input name="creditBalance" value={form.creditBalance} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaBuilding /> Insurance Provider</Label>
                  <Input type="select" name="insurance" value={form.insurance} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option>Jubilee</option>
                    <option>Adamjee</option>
                    <option>EFU</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaMapMarkerAlt /> Area</Label>
                  <Input name="area" value={form.area} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaCity /> City</Label>
                  <Input name="city" value={form.city} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaBuilding /> Address</Label>
                  <Input type="textarea" name="address" value={form.address} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaInfoCircle /> Other Details</Label>
                  <Input type="textarea" name="otherDetails" value={form.otherDetails} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label><FaGlobe /> Where did you hear about us?</Label>
                  <Input type="select" name="heardFrom" value={form.heardFrom} onChange={handleChange}>
                    <option value="">-- Select --</option>
                    <option>Facebook</option>
                    <option>Instagram</option>
                    <option>Friend</option>
                    <option>Google</option>
                    <option>Other</option>
                  </Input>
                </FormGroup>
              </Col>
            {/* Continue same for other fields... */}
            {/* Reuse your existing structure for remaining fields */}
          </Row>

          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default AddPatientModal;
