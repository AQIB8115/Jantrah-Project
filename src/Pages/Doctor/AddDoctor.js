// AddDoctorForm.js
import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FaUserMd, FaEnvelope, FaKey, FaPhone, FaCalendarAlt, FaUserTag,
  FaIdBadge, FaVenusMars, FaTint, FaPercent, FaAddressCard,
  FaInfoCircle, FaImage
} from "react-icons/fa";
import DoctorList from "./DoctorViewList";

const AddDoctorForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(false);
  const [doctors, setDoctors] = useState([]);

  const toggleDoctorForm = () => {
    setShowForm(!showForm);
    setShowList(false);
  };

  const handleViewList = () => {
    setShowList(true);
    setShowForm(false);
  };

  const doctorValidation = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      dob: "",
      specialist: "",
      designation: "",
      gender: "",
      bloodGroup: "",
      commission: "",
      address: "",
      biography: "",
      photo: null,
      status: "Active"
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      setDoctors(prev => [...prev, { ...values }]);
      doctorValidation.resetForm();
      setShowForm(false);
      setShowList(true); // show list after submit
    },
  });

  const inputStyle = { backgroundColor: "#f0f0f0" };

  const renderField = (name, label, type, icon, options = []) => (
    <Col md={3} className="mb-3">
      <Label>{icon} {label}</Label>
      {type === "select" ? (
        <Input
          name={name}
          type="select"
          style={inputStyle}
          onChange={doctorValidation.handleChange}
          onBlur={doctorValidation.handleBlur}
          value={doctorValidation.values[name] || ""}
        >
          <option value="">Select {label}</option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>{opt}</option>
          ))}
        </Input>
      ) : (
        <Input
          name={name}
          type={type}
          style={inputStyle}
          placeholder={`Enter your ${label.toLowerCase()}`}
          onChange={(e) => {
            if (type === "file") {
              doctorValidation.setFieldValue("photo", e.currentTarget.files[0]);
            } else {
              doctorValidation.handleChange(e);
            }
          }}
          onBlur={doctorValidation.handleBlur}
          value={type === "file" ? undefined : doctorValidation.values[name] || ""}
        />
      )}
      {doctorValidation.touched[name] && doctorValidation.errors[name] && (
        <FormFeedback className="d-block">
          {doctorValidation.errors[name]}
        </FormFeedback>
      )}
    </Col>
  );

  return (
    <Container fluid className="mt-4">
      <Row className="mb-3" style={{ paddingTop: "65px" }}>
        <Col md="auto">
        {showForm && (
            <Button color="primary" className="ms-2" onClick={handleViewList}>View List</Button>
          )}
          {showList && (
            <Button color="primary" onClick={toggleDoctorForm}>Add Doctor</Button>
          )}
          
          {!showForm && !showList && (
            <>
              <Button color="primary" onClick={toggleDoctorForm}>Add Doctor</Button>
              {doctors.length > 0 && (
                <Button color="info" className="ms-2" onClick={handleViewList}>View list</Button>
              )}
            </>
          )}
        </Col>
      </Row>

      {showForm && (
        <div className="bg-white p-4 rounded">
          <h5 className="mb-4">Add Doctor</h5>
          <Form onSubmit={(e) => {
            e.preventDefault();
            doctorValidation.handleSubmit();
          }}>
            <Row>
              {renderField("name", "Name", "text", <FaUserMd />)}
              {renderField("email", "Email", "email", <FaEnvelope />)}
              {renderField("password", "Password", "password", <FaKey />)}
              {renderField("phone", "Phone", "text", <FaPhone />)}
            </Row>
            <Row>
              {renderField("dob", "Date of Birth", "date", <FaCalendarAlt />)}
              {renderField("specialist", "Specialist", "text", <FaUserTag />)}
              {renderField("designation", "Designation", "text", <FaIdBadge />)}
              {renderField("gender", "Gender", "select", <FaVenusMars />, ["Male", "Female", "Other"])}
            </Row>
            <Row>
              {renderField("bloodGroup", "Blood Group", "select", <FaTint />, ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])}
              {renderField("commission", "Commission", "number", <FaPercent />)}
              <Col md={6} className="mb-3">
                <Label><FaAddressCard /> Address</Label>
                <Input
                  name="address"
                  type="textarea"
                  style={inputStyle}
                  onChange={doctorValidation.handleChange}
                  value={doctorValidation.values.address || ""}
                />
              </Col>
            </Row>
            <Row>
              <Col md={6} className="mb-3">
                <Label><FaInfoCircle /> Biography</Label>
                <Input
                  name="biography"
                  type="textarea"
                  style={inputStyle}
                  onChange={doctorValidation.handleChange}
                  value={doctorValidation.values.biography || ""}
                />
              </Col>
              <Col md={6} className="mb-3">
                <Label><FaImage /> Photo</Label>
                <Input
                  type="file"
                  name="photo"
                  style={inputStyle}
                  onChange={(e) => doctorValidation.setFieldValue("photo", e.currentTarget.files[0])}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="text-end">
                <Button type="button" color="warning" onClick={toggleDoctorForm} className="me-2">Cancel</Button>
                <Button type="submit" color="primary">Submit</Button>
              </Col>
            </Row>
          </Form>
        </div>
      )}

      {showList && <DoctorList doctors={doctors} setDoctors={setDoctors} />}
    </Container>
  );
};

export default AddDoctorForm;
