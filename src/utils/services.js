import axios from 'axios';

/* const URL = 'https://jsonplaceholder.typicode.com/todos'; */
const URL1 =
  'https://54aa820e-6b12-4517-acca-3f436f42251a.mock.pstmn.io///v1/home';

export const getProyects = async () => {
  let url = URL1;
  let response = await axios.get(url);
  return response;
};

export const postProyect = async (/* data */) => {
  let url = URL;
  let response = await axios.post(url /* data */);
  return response;
};
