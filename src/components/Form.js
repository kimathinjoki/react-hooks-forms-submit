import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

 // You can contrast this to handling an uncontrolled form being submitted, in which case you would need to access the input fields from the DOM instead of accessing the values from state:
  // function handleSubmit(event) {
  //   event.preventDefault();
  //   // in an uncontrolled form, you need to access the input fields from the DOM
  //   const formData = {
  //     firstName: e.target[0].value,
  //     lastName: e.target[1].value,
  //   };
  //   props.sendFormDataSomewhere(formData);
  // }




  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const formData = {
  //     firstName: firstName,
  //     lastName: lastName,
  //   };
  //   // props.sendFormDataSomewhere(formData);
  //   // setFirstName("");
  //   // setLastName("");

    
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <input type="text" onChange={handleFirstNameChange} value={firstName} />
  //     <input type="text" onChange={handleLastNameChange} value={lastName} />
  //     <button type="submit">Submit</button>
  //   </form>
  // );

  
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
  //   const formData = { firstName: firstName, lastName: lastName };
  //   const dataArray = [...submittedData, formData];
  //   setSubmittedData(dataArray);
  //   setFirstName("");
  //   setLastName("");
    if (firstName.length > 0) {
      const formData = { firstName: firstName, lastName: lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    } else {
      setErrors(["First name is required!"]);
    }
  }

  const listOfSubmissions = submittedData.map((data, index) => {
      return (
        <div key={index}>
          {data.firstName} {data.lastName}
        </div>
      );
    });
  



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>

      {/* conditionally render error messages */}

      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}


      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );

}

export default Form
