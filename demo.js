import React from "react";
function Heading (props){
    const name=props.name;
    const rollno=props.rollno;
    const department=props.department;
    return(
       <div>
        <h3>student name:{name}</h3>
        <h3>student rollno:{rollno}</h3>
        <h3>student department:{department}</h3>
       </div>
    );
};
export default Heading;