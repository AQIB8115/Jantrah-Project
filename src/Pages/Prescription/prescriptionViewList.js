import React from 'react'
import SimpleTable from '../Doctor/SimpleTable';

const PrescriptionViewList = () => {
    const prescriptiondata = [
        {
            Exam: 'Ex-24-09-30',
            Doctor: "Dr Hamza",
            Patient: "Fawad",
            Date: '02-may-2025'
        },
        {
            Exam: 'Ex-23-06-31',
            Doctor: "Dr Naveed",
            Patient: "Ahmed",
            Date: '03-jan-2025'
        },
        {
            Exam: 'Ex-02-09-23',
            Doctor: "Dr Kinza",
            Patient: "Samreen",
            Date: '07-july-2025'
        },
        {
            Exam: 'Ex-04-07-25',
            Doctor: "Dr Bilal",
            Patient: "Fatima",
            Date: '08-feb-2025'
        },
    ];

    const prescriptionhead = ['Exam', 'Doctor', 'Patient', 'Date', 'Action'];

    const handleView = (header) => {
        console.log("View", header);
    };

    const handleEdit = (header) => {
        console.log("Edit", header);

    };

    const handleDelete = () => {

    };
  return (

    <SimpleTable
    headers={prescriptionhead}
    data={prescriptiondata}
    onView={handleView}
    onEdit={handleEdit}
    onDelete={handleDelete}
    />
  )


};

export default PrescriptionViewList;
