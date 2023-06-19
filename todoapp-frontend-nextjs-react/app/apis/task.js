import axios from "axios";

const baseUrl = "http://127.0.0.1:8000/";

export const getTask = async (id) => {
  return await axios
    .get(`${baseUrl}api/tasks/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const getTasks = async () => {
  return await axios
    .get(`${baseUrl}api/tasks`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const createTask = async (data) => {
  return await axios
    .post(`${baseUrl}api/tasks`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const updateTask = async (id, data) => {
  return await axios
    .put(`${baseUrl}api/tasks/${id}`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const deleteTask = async (id) => {
  return await axios
    .delete(`${baseUrl}api/tasks/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
