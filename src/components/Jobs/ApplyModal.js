
import Modal from "../UI/Modal";
import { useNavigate } from "react-router-dom";

const ApplyModal = () => {


  const navigate = useNavigate()

  const dismissButtonHandler = () => {
    navigate("/jobs/index")
  }

  return (
    <Modal>
      <div className="container column box">
        <div className="title is-2"></div>
        <div className="field column">
          <label className="label">Thank You, your application has been sent</label>
          <div className="control">
          </div>
        </div>
        <div className="field container">
          <div className="control">
            <button
              type="button"
              className="button is-warning is-light my-5 mx-5 is-outlined"
              onClick={dismissButtonHandler}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
      <div/>
    </Modal>
  );
};

export default ApplyModal;