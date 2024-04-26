import React from 'react';
import './ExaminationTeam.css';
import ExaminationTeamData from './ExaminationTeamData';

const ExaminationTeam = () => {
  const examinationteam = ExaminationTeamData;

  const renderTableRows = () => {
    return examinationteam.map((member) => (
      <tr key={member.sno}>
        <td>{member.sno}</td>
        <td>{member.name}</td>
        <td>{member.designation}</td>
        <td>{member.role}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2 className='QAT2'>Examination Members</h2>
      <table className='qat'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name of the Member</th>
            <th>Designation</th>
            <th>Role in Examination</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table><br></br><br></br>
    </div>
  );
};

export default ExaminationTeam;
