import './App.css';
import { useState } from 'react';
import {certificatesArray} from './constants.js';


function Certificates() {
  const [data, setData] = useState(certificatesArray);
  const sortByName = () => {
    const sorted = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sorted);
  }

  const sortByIssuer = () => {
    const sorted = [...data].sort((a, b) => a.issuer.localeCompare(b.issuer));
    setData(sorted);
  }

  const sortByDate = () => {
    const sorted = [...data].sort((a, b) => {
      if (typeof a.numericalDate === 'string' && typeof b.numericalDate === 'string') {
        const dateComparison = b.numericalDate.localeCompare(a.numericalDate);
        if (dateComparison === 0) {
          return a.name.localeCompare(b.name);
        }
        return dateComparison;
      } else {
        return 0; // Don't change order if numericalDate is undefined
      }
    });
    setData(sorted);
  }
  
  
  return (
    <div className="certificates">
      <div className="board">
        <div className="board_head">
          <div className="board_title">CERTIFICATES</div>
          <div className="board_sort">
            <div className="board_sort_title">SORT BY:</div>
            <div className="board_sort_options">
              <div className="board_sort_option" onClick = {()=>sortByDate()}>DATE</div>
              <div className="board_sort_option" onClick = {()=>sortByName()}>NAME</div>
              <div className="board_sort_option" onClick = {()=>sortByIssuer()}>ISSUER</div>  
            </div>
          </div>
        </div>
        <div className="board_body">
          {data.map((certificate) => (
            <div key={certificate.id} className="board_body_items">
              <div className="board_body_certificate_image">
                <img src={certificate.image} alt={certificate.name} />
              </div>
              <div className="board_body_certificate_description">
                <div className="board_body_certificate_description_name">{certificate.name}</div>
                <div className="board_body_certificate_description_issuer">Issued by {certificate.issuer}</div>
                <div className="board_body_certificate_description_date">{certificate.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certificates;
