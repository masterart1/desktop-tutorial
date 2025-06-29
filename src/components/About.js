import React, { useState } from 'react';

export default function About() {
  const [mystyle,setmystyle] = useState({
    color: 'white',
    backgroundColor: 'black',
  })
const [btntext,setbtntext]=useState("Enable light Mode")

  let toggleStyle=()=>{
    if(mystyle.color==='white'){
      setmystyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtntext("Enable Dark Mode")
    }
    else{
      setmystyle({
        color:'white',
        backgroundColor:'black',
        border:'1px solid white'
      })
      setbtntext("Enable Light Mode")
    }
  }
  return (
    <div className="container" style={mystyle}>
      <h1>About Us</h1>
      <div className="accordion" style={mystyle} id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item’s accordion body.</strong> It is shown by default...
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item’s accordion body.</strong> It is hidden by default...
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
      </div>
    </div>
  );
}
