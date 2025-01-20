import React, { useState } from 'react';
import './Form.css';

const Form = ({ click, handleModalClose }) => {
  const [email, setEmail] = useState('');  // for changing the state of input fields
  const [description, setDescription] = useState('');

  // Sending request to server
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {  // this data will be sent as request body to the server
      email,
      description,
    };

    try {
      const response = await fetch('http://localhost:5000/api/getInfo/myReq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response:', data); // Handle response
      handleModalClose(); // Close the modal after submitting the form
    } catch (err) {
      console.error('Error:', err); // Handle error
      alert('There was an error submitting the form. Please try again later.');
    }
  };

  return (
    <div>
      {click && ( // Show modal only if `click` is true
        <div
          className="modal show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog" role="document" >
            <div className="modal-content" style={{backgroundColor:'#082E4E'}}>
              <div className="modal-header" style={{backgroundColor:'#0E273C'}}>
                <h5 className="modal-title">Send a Message!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* Form Content */}
                <form onSubmit={handleSubmit} >
                  <div className="mb-3 font-monospace">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="desc"
                      placeholder="Enter description"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn font-monospace" style={{backgroundColor:'#EAB41E'}}>
                    <b>Submit</b>
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleModalClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
