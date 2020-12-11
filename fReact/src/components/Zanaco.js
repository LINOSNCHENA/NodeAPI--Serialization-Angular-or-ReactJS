import React, { useState, useEffect } from "react";
import ZanacDataService from "../services/ZanacoService";

const Zanac = props => {
  const initialZanacotate = {
    id: null,
    name1: "",    dept: "",    post: "",    salary: "",
    published: false
  };
  const [currentZanac, setCurrentZanac] = useState(initialZanacotate);
  const [message, setMessage] = useState("");

  const getZanac = id => {
    ZanacDataService.get(id)
      .then(response => {
        setCurrentZanac(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getZanac(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentZanac({ ...currentZanac, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentZanac.id,
      name1: currentZanac.name1,
      dept: currentZanac.dept,
      post: currentZanac.post,
      salary: currentZanac.salary,
      published: status
    };

    ZanacDataService.update(currentZanac.id, data)
      .then(response => {
        setCurrentZanac({ ...currentZanac, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateZanac = () => {
    ZanacDataService.update(currentZanac.id, currentZanac)
      .then(response => {
        console.log(response.data);
        setMessage("The Zanac was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteZanac = () => {
    ZanacDataService.remove(currentZanac.id)
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
      {currentZanac ? (
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
                value={currentZanac.name1}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept">Department</label>
              <input
                type="text"                className="form-control"
                id="dept"                name="dept"
                value={currentZanac.dept}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="post">Position</label>
              <input
                type="text"                className="form-control"
                id="post"                name="post"
                value={currentZanac.post}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dept">Salary</label>
              <input
                type="text"                className="form-control"
                id="salary"                name="salary"
                value={currentZanac.salary}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentZanac.published ? "Published" : "Pending"}
            </div>
          </form>

          {currentZanac.published ? (
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

          <button className="badge badge-danger mr-2" onClick={deleteZanac}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateZanac}
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

export default Zanac;
