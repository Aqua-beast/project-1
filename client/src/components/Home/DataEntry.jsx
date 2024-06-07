import React from 'react';
import { GoSquare } from "react-icons/go";
import { FaCircle, FaShare, FaTrashAlt } from 'react-icons/fa';
// import './DataEntry.css';

const assessments = [
  {
    id: 1,
    title: 'Assessment 1',
    type: 'BRSR',
    suppliers: 20,
    score: '-',
    risk: 'Medium',
    status: 'Pending',
    result: '-',
    actions: 'Edit'
  },
  {
    id: 2,
    title: 'Assessment 2',
    type: 'BRSR',
    suppliers: 25,
    score: 98,
    risk: 'Low',
    status: 'Complete',
    result: 'View',
    actions: 'Edit'
  },
  {
    id: 3,
    title: 'Assessment 3',
    type: 'BRSR',
    suppliers: 35,
    score: 22,
    risk: 'High',
    status: 'Complete',
    result: 'View',
    actions: 'Edit'
  },
  {
    id: 4,
    title: 'Assessment 4',
    type: 'Custom',
    suppliers: 49,
    score: 23,
    risk: 'Medium',
    status: 'Complete',
    result: 'View',
    actions: 'Edit'
  },
  {
    id: 5,
    title: 'Assessment 5',
    type: 'Custom',
    suppliers: 100,
    score: 42,
    risk: 'Medium',
    status: 'Complete',
    result: 'View',
    actions: 'Edit'
  }
];

function getRiskIcon(risk) {
  switch (risk) {
    case 'Low':
      return <FaCircle className="low-risk" />;
    case 'Medium':
      return <FaCircle className="medium-risk" />;
    case 'High':
      return <FaCircle className="high-risk" />;
    default:
      return null;
  }
}

function getStatusClass(status) {
  switch (status) {
    case 'Pending':
      return 'status-pending';
    case 'Complete':
      return 'status-complete';
    default:
      return '';
  }
}

function DataEntry() {
  return (
    <table className="assessment-table">
      <thead>
        <tr>
          <th><GoSquare /></th>
          <th>Assessment Title</th>
          <th>Type</th>
          <th>No. of Suppliers</th>
          <th>Score</th>
          <th>Risk Classification</th>
          <th>Status</th>
          <th>Result</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {assessments.map(assessment => (
          <tr key={assessment.id}>
            <td><GoSquare /></td>
            <td>{assessment.title}</td>
            <td>{assessment.type}</td>
            <td>{assessment.suppliers}</td>
            <td>{assessment.score}</td>
            <td className='risk-message'>{getRiskIcon(assessment.risk)}{assessment.risk}</td>
            <td className={getStatusClass(assessment.status)}>{assessment.status}</td>
            <td className="result-view">{assessment.result === 'View' ? <span className="result-view-text">{assessment.result}</span> : assessment.result}</td>
            <td>
              <FaShare className="action-icon" />
              <FaTrashAlt className="action-icon" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataEntry;
