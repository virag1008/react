// ya file madhe object madhe 'type' key pahijech..
// dispatch function ya action ne trigger hoto..

// What to do ..
export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payLoadVj: num,
  };
};

export const decNumber = () => {
  return { type: "DECREMENT" };
};

export const multNumber = (num) => {
  return {
    type: "MULT",
    payLoad: num,
  };
};

export const divNumber = () => {
  return { type: "DIVIDE" };
};
