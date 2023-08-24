import './App.css';
import {sortingOptions, certificatesArray} from './constants.js';


function Certificates() {
  return (
    <div className="certificates">
      <div className="board">
        <div className="board_head">
          <div className="board_title">CERTIFICATES</div>
          <div className="board_sort">
            <div className="board_sort_title">SORT BY:</div>
            <div className="board_sort_options">
              {sortingOptions.map((option) => (
                <div key={option} className="board_sort_option">{option}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="board_body">
          {certificatesArray.map((certificate) => (
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
