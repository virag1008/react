const initialCount = 10;

const MultDivNumber = (state = initialCount, action) => {
  switch (action.type) {
    case "MULT":
      return state * action.payLoad;
    case "DIVIDE":
      return state / 2;
    default:
      return state;
  }
};
export default MultDivNumber;
