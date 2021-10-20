import React from "react";
import { BsBookmarkCheck } from "react-icons/bs";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookAppoinment = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const history = useHistory();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const bookAppoinmentHandler = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div>
      <button onClick={openModal} className="bg-red-200 p-5 rounded-md flex">
        <BsBookmarkCheck className="mt-1 mr-3 text-xl text-green-600" /> Book
        Appointment
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-2xl py-5 text-green-600 md:px-4">
          Please fill the form
        </h2>

        <form onSubmit={bookAppoinmentHandler} className="md:p-5 p-0 ">
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              className="focus:outline-none border-2 rounded block my-2"
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              id="age"
              autoComplete="off"
              name="age"
              className="focus:outline-none border-2 rounded block my-2"
              required
            />
          </div>
          <div>
            <label htmlFor="address">address</label>
            <input
              type="text"
              id="address"
              name="address"
              autoComplete="off"
              className="focus:outline-none border-2 rounded block my-2"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">phone number</label>
            <input
              type="number"
              id="phone"
              name="phone"
              autoComplete="off"
              className="focus:outline-none border-2 rounded block my-2"
              required
            />
          </div>
          <div className="flex justify-between">
            <input
              type="submit"
              value="Submit"
              className="bg-green-400 px-2 py-1 rounded text-gray-100 cursor-pointer"
            />
            <button
              className="bg-red-400 inline px-2 py-1 rounded text-gray-100"
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookAppoinment;
