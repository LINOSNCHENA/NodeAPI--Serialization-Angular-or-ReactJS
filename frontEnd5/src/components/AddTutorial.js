import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,    name1: "",    dept: "",
    post: "", salary: "",
    published: false
  };
  
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      name1: tutorial.name1,
      dept: tutorial.dept,
      post: tutorial.post,
      salary: tutorial.salary
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          name1: response.data.name1,
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

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
          <div>
            <div className="form-group"> <label htmlFor="name1">Name1</label>
              <input type="text" className="form-control" id="name1"
                required value={tutorial.name1}
                onChange={handleInputChange} name="name1" />
            </div>

            <div className="form-group"><label htmlFor="dept">Dept</label>       
              <input  type="text" className="form-control" id="dept" required
                value={tutorial.dept} onChange={handleInputChange} name="dept" />
            </div>

            <div className="form-group"><label htmlFor="post">Post</label>            
              <input  type="text" className="form-control" id="post" required
                value={tutorial.post} onChange={handleInputChange} name="post" />
            </div>


            <div className="form-group"><label htmlFor="salary">salary</label>
            <input type="text" className="form-control" id="salary" required
                value={tutorial.salary} onChange={handleInputChange} name="salary" />
            </div>


            <button onClick={saveTutorial} className="btn btn-success">
              Submit
          </button>
          </div>
        )}
    </div>
  );
};

export default AddTutorial;
