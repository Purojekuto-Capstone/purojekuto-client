import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/todos';

export const getProyects = async () => {
  let url = URL;
  let response = await axios.get(url);
  return response;
};
