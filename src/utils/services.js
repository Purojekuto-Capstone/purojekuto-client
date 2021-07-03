import axios from 'axios';

/* const URL = 'https://jsonplaceholder.typicode.com/todos'; */
const base_url = 'https://purojekuto-backend.herokuapp.com';
const URL = 'https://purojekuto-backend.herokuapp.com/projects/project/';
const URL2 = 'https://purojekuto-backend.herokuapp.com/projects/';
const URLACTIVITY =
  'https://purojekuto-backend.herokuapp.com/projects/activity/';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMDA3NDQ5NDUwNzU1NTgwMDI3OTcifQ.m7B8vp8UCFSHgWsVi8-Qas1ciUziHl8wHIJOqPJT5WA';
const URLCATEGORY =
  'https://purojekuto-backend.herokuapp.com/projects/project_category/';
const configPrueba = {
  headers: { Authorization: `Bearer ${token}` },
};
const statistics =
  'https://purojekuto-backend.herokuapp.com/projects/metrics/';

export const getStatistics = async (config) => {
  let url = statistics;
  let response = await axios.get(url, config);
  return response.data;
};

export const getProyects = async (config) => {
  let url = URL;

  let response = await axios.get(url, config);
  return response;
};
export const getCategory = async (config) => {
  let url = URLCATEGORY;

  let response = await axios.get(url, config);
  return response;
};

export const postProyect = async (data, config) => {
  let url = URL;
  let response = await axios.post(url, data, config);
  return response;
};

export const getProyect = async (id, config) => {
  let url = `${URL2}project?project_id=${id}`;

  let response = await axios.get(url, config);
  return response;
};

export const postEvent = async (data, config) => {
  let url = URLACTIVITY;
  let response = await axios.post(url, data, config);
  return response;
};

export const getActivitys = async (id_project, config) => {
  let url = `${URLACTIVITY}?project_id=${id_project}&start_date=2019-06-30T21:50:24.566000-05:00&end_date=2022-07-03T21:50:24.566000-05:00`;

  let response = await axios.get(url, config);
  return response;
};
export const getActivity = async (id, config) => {
  let url = `${URLACTIVITY}?project_id=${id}&start_date=2019-06-30T21:50:24.566000-05:00&end_date=2022-07-03T21:50:24.566000-05:00`;

  let response = await axios.get(url, config);
  return response;
};

export const getCalendarActivitysByProjectId = async (
  config,
  project,
  start,
  end
) => {
  let url = `${URLACTIVITY}?project_id=${project}&start_date=${start}&end_date=${end}`;
  let response = await axios.get(url, config);
  return response.data;
};

export const getUserInfo = async (config) => {
  let url = `${base_url}/projects/user/`;
  let res = await axios.get(url, config);
  return res.data;
};
