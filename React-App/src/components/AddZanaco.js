import React, { useState } from "react";
import dataServices from "../services/accountService";

const AddZanac = () => {
  const initialZanacotate = {
    id: null,    name: "",    dept: "",
    post: "", salary: "",
    published: false
  };
  
  const [Zanac, setZanac] = useState(initialZanacotate);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setZanac({ ...Zanac, [name]: value });
  };

  const saveZanac = () => {
    var data = {
      name: Zanac.name,
      dept: Zanac.dept,
      post: Zanac.post,
      salary: Zanac.salary
    };

    dataServices.create(data)
      .then(response => {
        setZanac({
          id: response.data.id,
          name: response.data.name,
          dept: response.data.dept,
          post: response.data.post,
          salary: response.data.salary,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newZanac = () => {
    setZanac(initialZanacotate);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newZanac}>
            Add
          </button>
        </div>
      ) : (
          <div>
            <div className="form-group"> <label htmlFor="name">Fullname</label>
              <input type="text" className="form-control" id="name"
                required value={Zanac.name}
                onChange={handleInputChange} name="name" />
            </div>

            <div className="form-group"><label htmlFor="dept">Dept</label>       
              <input  type="text" className="form-control" id="dept" required
                value={Zanac.dept} onChange={handleInputChange} name="dept" />
            </div>

            <div className="form-group"><label htmlFor="post">Post</label>            
              <input  type="text" className="form-control" id="post" required
                value={Zanac.post} onChange={handleInputChange} name="post" />
            </div>


            <div className="form-group"><label htmlFor="salary">Deposit</label>
            <input type="text" className="form-control" id="salary" required
                value={Zanac.salary} onChange={handleInputChange} name="salary" />
            </div>


            <button onClick={saveZanac} className="btn btn-success">
              Submit
          </button>
          </div>
        )}
    </div>
  );
};

export default AddZanac;
