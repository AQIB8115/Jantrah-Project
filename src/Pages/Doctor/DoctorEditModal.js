import React, {useState, useEffect} from "react";
import { Col, Form,  FormGroup, Label, Modal, ModalBody, ModalHeader, Row, Input, ModalFooter, Button } from "reactstrap";
// import { Select } from 'react-select';

const DoctorEditModal = ({ isOpen, toggle, doctor, onUpdate }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (doctor) {
            setFormData(doctor);
        }
    }, [doctor]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: value
        }));
    };

    const handleUpdate = () => {
        onUpdate(formData);
        toggle();
    };

    return (
        <Modal isOpen={isOpen} toggle={toggle} size="lg" centered>
            <ModalHeader toggle={toggle}>Edit Doctor</ModalHeader>
            <ModalBody>
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Name</Label>
                                <Input name="name" value={formData.name || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input name="email" value={formData.email || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Phone</Label>
                                <Input name="phone" value={formData.phone || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>DOB</Label>
                                <Input name="dob" type="date" value={formData.dob || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Specialist</Label>
                                <Input name="specialist" value={formData.specialist || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Designation</Label>
                                <Input name="designation" value={formData.designation || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Gender</Label>
                                <Input type="select" name="gender" value={formData.gender || ""} onChange={handleChange} >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>blood Group</Label>
                                <Input type="select" name="bloodgroup" value={formData.bloodgroup || ""} onChange={handleChange}>
                                <option value="">Select Blood Group</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Commission (%)</Label>
                                <Input name="commission" value={formData.commission || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label>Status</Label>
                                <Input name="status" value={formData.status || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                        <Col md={12}>
                            <FormGroup>
                                <Label>Address</Label>
                                <Input name="address" type="textarea" value={formData.address || ""} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Biography</Label>
                                <Input type="textarea" name="biography" value={formData.biography || ""} onChange={handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Update</Button>
                <Button color="warning" onClick={toggle}>Close</Button>
            </ModalFooter>
        </Modal>
    );
};

export default DoctorEditModal;