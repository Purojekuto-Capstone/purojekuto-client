import axios from 'axios';

/* const URL = 'https://jsonplaceholder.typicode.com/todos'; */
const URL = 'https://purojekuto-backend.herokuapp.com/projects/project/';
const URL2 = 'https://purojekuto-backend.herokuapp.com/projects/';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDA3NDQ5NDUwNzU1NTgwMDI3OTcifQ.m7B8vp8UCFSHgWsVi8-Qas1ciUziHl8wHIJOqPJT5WA';
const config = {
  headers: { Authorization: `Bearer ${token}` },
};

export const getProyects = async () => {
  let url = URL;

  let response = await axios.get(url, config);
  return response;
};

export const postProyect = async (data) => {
  let url = URL;
  let response = await axios.post(url, data, config);
  return response;
};

export const getProyect = async (id) => {
  let url = `${URL2}project?project_id=${id}`;

  let response = await axios.get(url, config);
  return response;
};
