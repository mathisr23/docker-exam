import axios from "axios";

export const getTodos = async () => {
  axios.get('/todos')
  .then(function (response) {
    // en cas de réussite de la requête
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const createTodo = async (formData) => {
  axios.post('/todos', {
    name: formData.name,
    description: formData.description
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};

export const deleteTodo = async (todoId) => {
  axios.delete('/todos/' + todoId)

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
};
