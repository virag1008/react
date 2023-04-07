const initialData = [];

export const cartData = (data = initialData, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [action.data, ...data];

    case "REMOVE_TO_CART":
      const remainingItem = data.filter((item, index) => index !== action.data);
      return [...remainingItem];

    case "CLEAR_CART":
      return initialData;

    default:
      return data;
  }
};
