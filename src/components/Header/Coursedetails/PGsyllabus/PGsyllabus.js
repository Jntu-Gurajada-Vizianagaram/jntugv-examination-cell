import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Coursedetails.css';
import PGSyllabusData from './PGsyllabusData';

const PGsyllabus = () => {
    const { path } = useParams(); // Get the 'path' parameter from the URL
    const [activeTab] = useState("R20"); // State to track active tab
  
    const handleViewDownload = (pdfPath) => {
      window.location.href = pdfPath;
    };
  
    const renderSyllabusTableRows = () => {
      // Filter data based on the selected tab
      const filteredData = PGSyllabusData.filter((report) => {
        if (activeTab === "R20") {
          return report.sno <= 2;
        } else if (activeTab === "R19") {
          return report.sno >= 3 && report.sno <= 8;
        } else if (activeTab === "R16") {
          return report.sno >= 9 && report.sno <= 14;
        } else if (activeTab === "R13") {
          return report.sno >= 15 && report.sno <= 20;
        } else {
          return false;
        }
      });
      
      
  
      return filteredData.map((report) => (
        <tr key={report.department}>
          
          <td>{report.department}</td>
          <td>{report.specialization}</td>
          <td>
            <button className="button2" onClick={() => handleViewDownload(report.pdfPath)}>
              {report.name}
            </button>
          </td>
        </tr>
      ));
    };

    
  
    const PdfViewer = () => {
      // Find the selected PDF path based on the activeTab
      const selectedPdfPath = PGSyllabusData.find((report) => report.department.toLowerCase() === activeTab.toLowerCase())?.pdfPath;
  
      return (
        <div>
          <h2>PDF Viewer</h2>
          <iframe src={selectedPdfPath} title="PDF Viewer" width="100%" height="500px" />
        </div>
      );
    };
  
     

    return (
      <div>
         <h2 className="pg">Syllabi of PG Full-Time Programmes</h2>
        {path ? (
          <PdfViewer />
        ) : (
          <table className="syllabus-table">
            <thead>
              <tr>
                
                <th>Department</th>
                <th>Specialization</th>
                <th>Syllabus</th>
              </tr>
            </thead>
            <tbody>{renderSyllabusTableRows()}</tbody>
          </table>
        )}
      </div>
    );
  };

  export default PGsyllabus; 
  