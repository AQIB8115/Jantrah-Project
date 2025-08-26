
import React, { useState } from "react";
import { Table, Button } from "reactstrap";
import { Eye, Edit, Trash2 } from "lucide-react";
import DoctorDetailModal from "./DoctorDetail";
import DoctorEditModal from "./DoctorEditModal"; // New import

const DoctorList = ({ doctors, setDoctors }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  // const toggleViewModal = () => setViewModalOpen(!viewModalOpen);
  // const toggleEditModal = () => setEditModalOpen(!editModalOpen);

  const handleView = (doctor) => {
    setSelectedDoctor(doctor);
    setViewModalOpen(true);
  };

  const handleEdit = (doctor) => {
    setSelectedDoctor(doctor);
    setEditModalOpen(true);
  };

  // const handleUpdate = (updatedDoctor) => {
  //   const updatedList = doctors.map((doc) =>
  //     doc.id === updatedDoctor.id ? updatedDoctor : doc
  //   );
  //   setDoctors(updatedList);
  // };

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this doctor?")) {
      const updatedList = doctors.filter((doc) => doc.id !== id);
      setDoctors(updatedList);
    }
  };

  return (
    <div className="bg-white p-4 rounded">
      <h5>Doctor List</h5>
      <Table bordered striped responsive>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Profile</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doc, index) => (
            <tr key={doc.id || index}>
              <td>{index + 1}</td>
              <td>
                {doc.photo ? (
                  <img
                    src={URL.createObjectURL(doc.photo)}
                    alt="Profile"
                    width="40"
                    height="40"
                    style={{ borderRadius: "50%" }}
                  />
                ) : "N/A"}
              </td>
              <td>{doc.name}</td>
              <td>{doc.email}</td>
              <td>{doc.phone}</td>
              <td>{doc.status}</td>
              <td>
                <Button 
                size="sm" 
                color="info" 
                className="me-1" 
                onClick={() => handleView(doc)}>
                <Eye 
                size={16}  
                />
                </Button>
                <Button 
                size="sm" 
                color="warning" 
                className="me-1" 
                onClick={() => handleEdit(doc)}>
                <Edit 
                size={16} 
                />
                </Button>
                <Button 
                size="sm" 
                color="danger" 
                onClick={() => handleDelete(doc.id)}>
                <Trash2 
                size={16} 
                />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* View Modal */}
      <DoctorDetailModal
        isOpen={viewModalOpen}
        toggle={() => setViewModalOpen(false)}
        doctor={selectedDoctor}
        onEdit={() => {
          setViewModalOpen(false);
          setEditModalOpen(true);
          setSelectedDoctor(selectedDoctor);
        }}
      />

      {/* Edit Modal */}
      <DoctorEditModal
        isOpen={editModalOpen}
        toggle={() => setEditModalOpen(false)}
        doctor={selectedDoctor}
        onUpdate={(updatedDoctor) => {
          setDoctors(prev => 
          prev.map(doc => doc.email === updatedDoctor.email ? updatedDoctor : doc)
          );
          setEditModalOpen(false);
        }}
      />
    </div>
  );
};

export default DoctorList;
