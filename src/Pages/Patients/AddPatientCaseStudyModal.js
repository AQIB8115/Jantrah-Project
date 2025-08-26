
import React from "react";
import { FaAllergies, FaBaby, FaCarCrash, FaFemale, FaFileMedical, FaHeartbeat, FaNotesMedical, FaPills, FaProcedures, FaSyringe, FaTint, FaUserMd } from "react-icons/fa";
import { Modal, ModalHeader, ModalBody, FormGroup, Form, Label, Input, Button, Row, Col } from "reactstrap";


const AddPatientCaseStudyModal = ({
    isOpen,
    toggle,
    onSubmit,
    patients,
    formData,
    setFormData,
    isEditing,
}) => {
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

        const fieldIcons = {
            foodAllergy: <FaAllergies className="me-2" />,
            heartDisease: <FaHeartbeat className="me-2" />,
            highBloodPressure: <FaTint className="me-2" />,
            diabetic: <FaSyringe className="me-2" />,
            surgery: <FaProcedures className="me-2" />,
            accident: <FaCarCrash className="me-2" />,
            others: <FaNotesMedical className="me-2" />,
            familymedicalHistory: <FaUserMd className="me-2" />,
            currentMedication: <FaPills className="me-2" />,
            pragnency: <FaBaby className="me-2" />,
            breastFeeding: <FaFemale className="me-2" />,
            healthInsurance: <FaFileMedical className="me-2" />,
        };

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
            <ModalHeader toggle={toggle}>Add Patient Case Study</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="SelectedPatient">Select Patient *</Label>
                        <Input
                          type="select"
                          name="name"
                          value={formData.name || ""}
                          onChange={handleChange}
                          >
                            <option value="">--Select Patient--</option>
                            {patients.map((p, i) => (
                                <option key={i} value={p.name}>
                                    {p.name}
                                </option>
                            ))}
                          </Input>
                    </FormGroup>

                    <Row>
                    {caseStudyFields.map((field, idx) => (
                        <Col md="6" key={idx}>
                        <FormGroup>
                            <Label>{fieldIcons[field]}{" "}
                            {field.replace(/([A-Z])/g, '$1').replace(/^./, (str) => str.toUpperCase())}
                            </Label>
                            <Input
                              type="text"
                              name={field}
                              value={formData[field] || ""}
                              onChange={handleChange}
                              />
                        </FormGroup>
                        </Col>
                    ))}
                    </Row>

                    <FormGroup>
                        <Label>Upload File</Label>
                        <Input 
                          type="file" 
                          name="file" 
                          onChange={(e) => 
                            setFormData({ ...formData, file: e.target.files[0] })
                          }
                          />
                    </FormGroup>

                    <Row className="mt-4">
                        <Col>
                            <Button color="primary" onClick={onSubmit}>
                              {isEditing ? "Update" : "Submit"}  
                            </Button>{" "}
                            <Button color="warning" onClick={toggle}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
        </Modal>
    );
};

export default AddPatientCaseStudyModal;