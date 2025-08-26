import React from 'react';
import {  Table } from 'reactstrap';
import { Trash2, Eye, Edit, } from 'lucide-react';

const SimpleTable = ({
    headers = [], 
    data = [],
    onView = () => {},
    onEdit = () => {},
    onDelete = () => {},
}) => {
  console.log('SimpleTable props →', { headers, data });
  return (
    <div className=" px-4 rounded" style={{ paddingTop: "85px", paddingLeft: '2rem', paddingRight: '2rem' }}>
    <Table bordered hover responsive >
      <thead className="table-dark" >
        <tr>
          {headers.map(header => (
            <th scope="col" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((datum, index) => (
          <tr key={index}>
            {headers.map((header, i) => (
              <td key={i}>
              {header === 'Action' ? (
                <div className='d-flex gap-2'>
                <button 
                type="button"
                className="btn btn-sm btn-info d-flex align-items-center"
                onClick={() => onView(datum, index)}
                >  
                <Eye 
                  size={16}
                  /> 
                </button>
                <button 
                type="button"
                className='btn btn-sm btn-primary d-flex align-items-center'
                onClick={() => onEdit(datum, index)}
                >
                <Edit
                   size={16}
                   />
                </button>
                <button 
                type='button'
                className='btn btn-sm btn-danger d-flex align-items-center'
                onClick={() => onDelete(datum, index)}
                >
                <Trash2
                  size={16}
                  />   
                </button>
                </div>
              ) : (
                <span>{datum[header]}</span>
              )}
                
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default SimpleTable;
