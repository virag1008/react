const initialState = {
  list: [],
};

const ToDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const { id, inputdata } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            inputdata: inputdata,
          },
        ],
      };

    case "DELETE_TODO":
      const newList = state.list.filter((ele) => ele.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "CLEAR_TODO":
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};

export default ToDoReducer;

// const initial = {
//   list: [],
// };

// const TodoReducer = (state = initial, action) => {
//   switch (action.type) {
//     case "ADD":
//       const { id, data } = action.payload;
//       return {
//         ...state,
//         list: [
//           ...state.list,
//           {
//             id: id,
//             data: data,
//           },
//         ],
//       };

//     case "DEL":
//       const newList = state.list.filter((ele) => ele.id !== action.id);
//       return {
//         ...state,
//         list: newList,
//       };

//     case "REMOVE":
//       return {
//         ...state,
//         list: [],
//       };

//     default:
//       return state;
//   }
// };
// export default TodoReducer;
