import http from "../http-common";

//const getAll = () => {  return http.get("/accounts");};
//const get = id => {  return http.get(`/accounts/${id}`);};
//const create = data => {  return http.post("/accounts", data);};
//const update = (id, data) => {  return http.put(`/accounts/${id}`, data);};

// const remove = id => {  return http.delete(`/accounts/${id}`);};
// const removeAll = () => {  return http.delete(`/accounts`);};
// const seachByName1 = name => {  return http.get(`/accounts?name=${name}`);};

function create(data) {  return http.post("/accounts", data);};
function getAll () {  return http.get("/accounts");};
function get(id) {  return http.get(`/accounts/${id}`);};

function update (id, data) {  return http.put(`/accounts/${id}`, data);};
function remove(id) {  return http.delete(`/accounts/${id}`);};

function removeAll() {  return http.delete(`/accounts`);};
function logErrorx(error) {  console.error(error);}
function seachByName( name) {  return http.get(`/accounts?name=${name}`);};


const dataServices= { create, getAll, get, update, remove, removeAll, logErrorx,seachByName };
export default dataServices;