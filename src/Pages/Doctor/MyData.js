import React from 'react'
import SimpleTable from './SimpleTable';
const MyData = () => {
        const datavalue = [
        {
            ID: 123,
            Name: 'Aqib Zaman',
            Age: 24,
            City: 'Abbottabad',
        },
        {
            ID: 1234,
            Name: 'Hamza Ikram',
            Age: 28,
            City: 'Peshawar',
        },
        {
            ID: 321,
            Name: 'Adnan Ali',
            Age: 30,
            City: 'Islamabad',
        },
    ];

    const head = ['ID', 'Name', 'Age', 'City'];
  return (

    <SimpleTable
    headers={head}
    data={datavalue}
    />
    )


};

export default MyData;
