import React from "react";
import Modal from "react-modal";
Modal.setAppElement("body");

const OptionModal = props => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleOkay}
    contentLabel={"Selected Option"}
    closeTimeoutMS={100}
    className="modal"
  >
    <h3 className="modal__title">Kompiuteris nusprendė:</h3>
    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}
    <button className="button" onClick={props.handleOkay}>
      <i class="check icon large" />
    </button>
  </Modal>
);

export default OptionModal;
