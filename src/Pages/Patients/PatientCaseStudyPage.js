import React, { useState } from 'react';
import PatientCaseStudyList from "./PatientCaseStudyList";
import AddPatientCaseStudyModal from "./AddPatientCaseStudyModal";
import PatientCaseStudyViewModal from './PatientCaseStudyViewModal';


const initialPatients = [
    {
        name: "John Doe",
        email: "john@example.com",
        phone: "123456789",
        foodAllergy: "Peanuts",
        heartDisease: "No",
        diabetic: "Yes"
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        phone: "987654321",
        foodAllergy: "None",
        heartDisease: "Yes",
        diabetic: "No"
    }
];

const PatientCaseStudyPage = () => {
    const [patients, setPatients] = useState(initialPatients);
    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [selectedPatient, setSelectedPatient] = useState(null);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
        setFormData({});
        setIsEditing(false);
        setEditingIndex(null);
    };


    const handleAdd = () => {
        console.log("abcd")
        toggleModal();
        // alert("Open add patient case study modal");
    };

    const handleSubmit = () => {
        if (!formData.name) {
            alert("please select a patient.");
            return;
        }
        if (isEditing && editingIndex !== null){
            const updatedPatients = [...patients];
            updatedPatients[editingIndex] = formData;
            setPatients(updatedPatients);
        } else {
            setPatients([...patients, formData]);
        }
       
        toggleModal();
    };

    const handleView = (patient) =>{
        setSelectedPatient(patient);
        setViewModalOpen(true);
    }
        // alert(`Viewing ${patient.name}`);


    const handleEdit = (patient) => {
        const index = patients.findIndex(p => p === patient);
        setFormData(patient);
        setIsEditing(true);
        setEditingIndex(index);
        setModalOpen(true);
        // alert(`Editing ${patient.name}`);
    };


    const handleDelete = (patient) => {
        if (window.confirm(`Delete ${patient.name}?`)) {
            setPatients(patients.filter(p => p !== patient));
        }
    };

    return (
        <>
        <PatientCaseStudyList
        patients={patients}
        onAdd={handleAdd}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        />
        <AddPatientCaseStudyModal
        isOpen={modalOpen}
        toggle={toggleModal}
        onSubmit={handleSubmit}
        patients={patients}
        formData={formData}
        setFormData={setFormData}
        isEditing={isEditing}
        />
        <PatientCaseStudyViewModal
            isOpen={viewModalOpen}
            toggle={() => setViewModalOpen(false)}
            patient={selectedPatient}
            onEditClick={(patient) => {
                handleEdit(patient);
                setViewModalOpen(false);
            }}
        />
        </>
    );
};

export default PatientCaseStudyPage;