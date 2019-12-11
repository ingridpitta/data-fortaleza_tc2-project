import React from "react";
import ComplaintModal from "../../components/ComplaintModal/complaintmodal.component";
import "./complaintpage.styles.scss";

const ComplaintPage = () => (
  <div className="complaintPage">
    <div className="complaintPage--intro">
      <div className="complaintPage--title">
        <h1>Faça uma Denúncia</h1>
        <h3>
          Presenciou ou sabe de alguma irregularidade? Faça uma denúncia
          anônima.
        </h3>
      </div>
    </div>
    <div className="complaintPage--main">
      <div className="complaintPage--main-indice">
        <ul>
          <li>Suas Denúncias</li>
          <li id="complaintPage--selected-listItem">Nova Denúncia</li>
          <li>Acompanhar</li>
        </ul>
      </div>
      <div className="complaintPage--main-content">
        <ul className="complaintPage--list">
          <li>Descreva sua Denúncia</li>
        </ul>
        <div className="complaintPage--content-card-container ">
          <ComplaintModal />
        </div>
      </div>
    </div>
  </div>
);

export default ComplaintPage;
