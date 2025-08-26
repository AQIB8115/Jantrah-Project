// import React from 'react';
import SimpleTable from "./SimpleTable";

const MyComponent = () => {
 const earningsData = [
    {
      id: 23122,
      name: 'Jude abaga',
      date: 1237682923189813,
      amount_paid: '4560000'
    },
     {
      id: 23123,
      name: 'Jude Gideon',
      date: 12376829231189813,
      amount_paid: '560000'
    },
 ];

 const earningsHeaders = ['id', 'name', 'date', 'amount_paid'];

    console.log('MyComponent → data:', earningsData);
// console.log('MyComponent → columns:', userData);


    return (
    <SimpleTable 
    headers={earningsHeaders}
    data={earningsData} />
    )

};

export default MyComponent;



