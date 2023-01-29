import React from "react";
import ReactDOM from "react-dom";
import Heading from "./demo";
import { useState } from "react";
import "./index.css"
const Greeting = () => {
    const[count,setCount]=useState(0);
    const handleClick =()=>{
        console.log("clicked....");
        setCount(count+1);
   };
   return(
    <div>
        <h1>Student Details</h1>
    <Heading name="student1" rollno="1" department="Cse"/>
    <Heading name="student2" rollno="2" department="Cse"/>
    <Heading name="student3" rollno="3" department="Cse"/>
    <Heading name="student4" rollno="4" department="Cse"/>
    <Heading name="student5" rollno="5" department="Cse"/>
    <Heading name="student6" rollno="6" department="Cse"/>
    <Heading name="student7" rollno="7" department="Cse"/>
    <h1>Counters that update together</h1>
    <div className="first"><button onClick={handleClick}>clicked{count}times</button></div>
    <div className="first"><button onClick={handleClick}>clicked{count}times</button></div>
    </div>
   )
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>)