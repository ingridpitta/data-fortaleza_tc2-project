import React from "react";
import "./complaintmodal.styles.scss";

const ComplaintModal = () => (
  <div className="complaintModal">
    <form className="form-style-8">
      <ul>
        <li>
          <label for="title">TÍTULO</label>
          <input type="text" name="title" maxlength="100" />
          <span>Crie um título</span>
        </li>
        <li>
          <label for="description">DESCRIÇÃO</label>
          <textarea
            name="description"
            onkeyup="adjust_textarea(this)"
          ></textarea>
          <span>Descreva sua denúncia</span>
        </li>
        <li>
          <input type="submit" value="DENUNCIAR" />
        </li>
      </ul>
    </form>
  </div>
);

export default ComplaintModal;
