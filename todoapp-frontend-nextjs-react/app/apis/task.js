import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/";

export const getTask = async (id) => {
  return await axios
    .get(`${baseUrl}api/tasks/${id}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
