import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [studentDetails, setStudentDetails] = useState({
    studentName: '',
    rollNumber: '',
    degree: '',
    specialization: '',
    academicYear: '',
    yearOfStudying: '',
    semester: {
      email: '',
      suggestions: '',
      feedback: {
        q1: '',
        q2: '',
        q3: '',
        q4: '',
        q5: '',
        q6: '',
        q7: '',
        q8: '',
        q9: '',
        q10: '',
        q11: '',
        q12: '',
      },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

//   const handleSemesterChange = (e) => {
//     const { name, value } = e.target;
//     setStudentDetails((prevDetails) => ({
//       ...prevDetails,
//       semester: {
//         ...prevDetails.semester,
//         [name]: value,
//       },
//     }));
//   };

//   const handleSuggestionChange = (e) => {
//     const { name, value } = e.target;
//     setStudentDetails((prevDetails) => ({
//       ...prevDetails,
//       semester: {
//         ...prevDetails.semester,
//         feedback: {
//           ...prevDetails.semester.feedback,
//           [name]: value,
//         },
//       },
//     }));
//   };

  const handleSave = () => {
    console.log('Saved:', studentDetails);
  };

  const handleCancel = () => {
    console.log('Cancelled');
  };

  return (
    <form className='SFF'> 
        <h2 className='SFF2'>FORM</h2>
      <label className="form-label">
        1. Name : &nbsp;
        <div className='inp1'>
        <input type="text" name="studentName" value={studentDetails.studentName} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        2. Roll Number : &nbsp;
        <div className='inp1'>
        <input type="text" name="rollNumber" value={studentDetails.rollNumber} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        3. Degree : &nbsp;
        <div className='inp1'>
        <input type="text" name="degree" value={studentDetails.degree} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        4. Specialization : &nbsp;
        <div className='inp1'>
        <input type="text" name="specialization" value={studentDetails.specialization} onChange={handleChange} />
      </div>
      </label>
      
      <label className="form-label">
        5. Question : &nbsp;
        <div className='inp1'>
        <input type="text" name="yearOfStudying" value={studentDetails.yearOfStudying} onChange={handleChange} />
      </div>
      </label>
      
      <div className="button-container">
        <button type="button1" onClick={handleSave}>
          Save
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button1" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  </form>
);
};

export default Contact;
