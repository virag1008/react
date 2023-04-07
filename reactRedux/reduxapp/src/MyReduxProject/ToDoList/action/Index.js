export const addToDo = (inputdata) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: new Date().getTime().toString(),
      inputdata: inputdata,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  };
};

export const clearToDo = () => {
  return {
    type: "CLEAR_TODO",
  };
};

// export const addList = (data) => {
//   return {
//     type: "ADD",
//     payload: {
//       id: new Date().getTime().toString(),
//       data: data,
//     },
//   };
// };

// export const DELList = (id) => {
//   return {
//     type: "DEL",
//     id,
//   };
// };
// export const removeTodo = () => {
//   return {
//     type: "REMOVE",
//   };
// };
