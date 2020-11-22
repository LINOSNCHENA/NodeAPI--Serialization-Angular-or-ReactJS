import http from "../http-common";

const getAll = () => {
  return http.get("/employees");
};

const get = id => {
  return http.get(`/employees/${id}`);
};

const create = data => {
  return http.post("/employees", data);
};

const update = (id, data) => {
  return http.put(`/employees/${id}`, data);
};

const remove = id => {
  return http.delete(`/employees/${id}`);
};

const removeAll = () => {
  return http.delete(`/employees`);
};

const findByTitle = name1 => {
  return http.get(`/employees?name1=${name1}`);
};

export default { getAll, get, create, update, remove, removeAll, findByTitle };
