// import React, { useState } from "react"
// import PrescriptionList from "./PrescriptionList"
// import PrescriptionForm from "./PrescriptionForm";


// const initialPrescriptions = [
//     {
//         examInvestigation: "Blood Test",
//         doctor: "Dr. sarah khan",
//         patient: "Ayan Ali",
//         date: "2025-06-16"
//     },
//     {
//         examInvestigation: "X-Ray Chest",
//         doctor: "Dr. Ahmed Raza",
//         patient: "Maira Khan",
//         date: "2025-06-17"
//     }
// ];

// const PrescriptionPage = () => {
//     const [prescriptions, setPrescriptions] = useState(initialPrescriptions);
//     const [showForm, setShowForm] = useState(false);    

//     const handleAdd = (prescription) => {
//         // alert(`New Add Patient prescription ${prescription.patient}`);
//         setPrescriptions([...prescriptions, prescription]);
//         setShowForm(false);
//     };


//     const handleView = (prescription) => {
//         alert(`Viewing prescription of ${prescription.patient}`);
//     };

//     const handleEdit = (prescription) => {
//         alert(`Editing prescription for ${prescription.patient}`);
//     };

//     const handleDelete = (prescription) => {
//         if (window.confirm(`Delete prescription for ${prescription.patient}?`)) {
//             setPrescriptions(prescriptions.filter(p => p !== prescription));
//         }
//     };

//     return (
//         <div>
//           {showForm ? (
//             <PrescriptionForm
//             onCancel={() => setShowForm(false)}
//             onSubmit={handleAdd}
//             />
//           ) : (
//             <PrescriptionList
//             prescriptions={prescriptions}
//             onAdd={() => setShowForm(true)}
//             onView={handleView}
//             onEdit={handleEdit}
//             onDelete={handleDelete}
//             />
//           )}
//         </div>
//     );

// };

// export default PrescriptionPage;


import React, { useState } from "react";
import PrescriptionList from "./PrescriptionList";
import PrescriptionForm from "./PrescriptionForm";
import PrescriptionViewModal from "./PrescriptionViewModal";

const initialPrescriptions = [
    {
        examInvestigation: "Blood Test",
        doctor: "Dr. sarah khan",
        patient: "Ayan Ali",
        date: "2025-06-16"
    },
    {
        examInvestigation: "X-Ray Chest",
        doctor: "Dr. Ahmed Raza",
        patient: "Maira Khan",
        date: "2025-06-17"
    }
];


const PrescriptionPage = () => {
  const [prescriptions, setPrescriptions] = useState(initialPrescriptions);
  const [showForm, setShowForm] = useState(false);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleAdd = () => setShowForm(true);
  const handleCancel = () => setShowForm(false);

  const handleSubmit = (data) => {
    setPrescriptions([...prescriptions, data]);
    setShowForm(false);
  };

  const handleView = (prescription) => {
    setSelectedPrescription(prescription);
    setViewModalOpen(true);
  };

  const handleEdit = (prescription) => {
    alert("Edit Clicked! You can open form with data.");
  };

  const handleDelete = (prescription) => {
    setPrescriptions(prescriptions.filter((p) => p !== prescription));
  };

  return (
    <>
      {showForm ? (
        <PrescriptionForm onCancel={handleCancel} onSubmit={handleSubmit} />
      ) : (
        <PrescriptionList
          prescriptions={prescriptions}
          onAdd={handleAdd}
          onView={handleView}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <PrescriptionViewModal
        isOpen={viewModalOpen}
        toggle={() => setViewModalOpen(false)}
        prescription={selectedPrescription}
        onEdit={handleEdit}
      />
    </>
  );
};

export default PrescriptionPage;
