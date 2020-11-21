import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    name1: "",
    dept: "",
    post: "", salary: "",//////
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
      dept: tutorial.dept
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          name1: response.data.name1,
          dept: response.data.dept,
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
          <div className="form-group">
            <label htmlFor="name1">Title</label>
            <input
              type="text"
              className="form-control"
              id="name1"
              required
              value={tutorial.name1}
              onChange={handleInputChange}
              name="name1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="dept">Description</label>
            <input
              type="text"
              className="form-control"
              id="dept"
              required
              value={tutorial.dept}
              onChange={handleInputChange}
              name="dept"
            />
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
