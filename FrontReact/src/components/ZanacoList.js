import React, { useState, useEffect } from "react";
import ZanacDataService from "../services/ZanacoService";
import { Link } from "react-router-dom";

const ZanacoList = () => {
  const [Zanaco, setZanaco] = useState([]);
  const [currentZanac, setCurrentZanac] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchName, setsearchName] = useState("");

  useEffect(() => {
    retrieveZanaco();
  }, []);

  const onChangesearchName = e => {
    const searchName = e.target.value;
    setsearchName(searchName);
  };

  const retrieveZanaco = () => {
    ZanacDataService.getAll()
      .then(response => {
        setZanaco(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveZanaco();
    setCurrentZanac(null);
    setCurrentIndex(-1);
  };

  const setActiveZanac = (Zanac, index) => {
    setCurrentZanac(Zanac);
    setCurrentIndex(index);
  };

  const removeAllZanaco = () => {
    ZanacDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };
/////////////////////////////////////////////////////////////////////
  const seachByName = () => {
    ZanacDataService.seachByName(searchName)
      .then(response => {
        setZanaco(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchName}
            onChange={onChangesearchName}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={seachByName}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Zanaco List</h4>

        <ul className="list-group">
          {Zanaco &&
            Zanaco.map((Zanac, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveZanac(Zanac, index)}
                key={index}
              >
                {Zanac.name}  {'! - !'}     {Zanac.dept}  {'! - !'}     {Zanac.post}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllZanaco}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentZanac ? (
          <div>
            <h4>List of Bankers</h4>
            <div> <label> <strong>Name:</strong>
              </label>{" "} {currentZanac.name} </div>
            <div> <label> <strong>Department:</strong>
              </label>{" "}{currentZanac.dept} </div>

              <div> <label> <strong>Post:</strong>
              </label>{" "} {currentZanac.post} </div>
            <div> <label> <strong>Salary:</strong>
              </label>{" "}{currentZanac.salary} </div>


            <div> <label>  <strong>Status:</strong> </label>{" "}
              {currentZanac.published ? "Published" : "Pending"}
            </div>

            <Link
              to={"/employees/" + currentZanac.id}
               className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Zanac...</p>
          </div>
        )}
      </div>
    </div>
  );
/////////////////////////////////////////////////////////////////////////////////

};

export default ZanacoList;
