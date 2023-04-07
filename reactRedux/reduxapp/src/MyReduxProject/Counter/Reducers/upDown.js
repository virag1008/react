const initialCount = 0;

const changeTheNumber = (state = initialCount, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payLoadVj;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default changeTheNumber;
