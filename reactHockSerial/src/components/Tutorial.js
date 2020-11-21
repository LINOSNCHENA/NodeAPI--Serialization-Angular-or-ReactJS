import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/TutorialService";

const Tutorial = props => {
  const initialTutorialState = {
    id: null,
    name1: "",    dept: "",    post: "",    salary: "",
    published: false
  };
  const [currentTutorial, setCurrentTutorial] = useState(initialTutorialState);
  const [message, setMessage] = useState("");

  const getTutorial = id => {
    TutorialDataService.get(id)
      .then(response => {
        setCurrentTutorial(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTutorial(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTutorial({ ...currentTutorial, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentTutorial.id,
      name1: currentTutorial.name1,
      dept: currentTutorial.dept,
      post: currentTutorial.post,
      salary: currentTutorial.salary,
      published: status
    };

    TutorialDataService.update(currentTutorial.id, data)
      .then(response => {
        setCurrentTutorial({ ...currentTutorial, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateTutorial = () => {
    TutorialDataService.update(currentTutorial.id, currentTutorial)
      .then(response => {
        console.log(response.data);
        setMessage("The tutorial was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteTutorial = () => {
    TutorialDataService.remove(currentTutorial.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/employees"); 
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTutorial ? (
        <div className="edit-form">
          <h4> Banker</h4>
          <form>
            <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input
                type="text"
                className="form-control"
                id="name1"
                name="name1"
                value={currentTutorial.name1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept">Department</label>
              <input
                type="text"                className="form-control"
                id="dept"                name="dept"
                value={currentTutorial.dept}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="post">Position</label>
              <input
                type="text"                className="form-control"
                id="post"                name="post"
                value={currentTutorial.post}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept">Salary</label>
              <input
                type="text"                className="form-control"
                id="salary"                name="salary"
                value={currentTutorial.salary}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTutorial.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentTutorial.published ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTutorial}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTutorial}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Banker...</p>
        </div>
      )}
    </div>
  );
};

export default Tutorial;
