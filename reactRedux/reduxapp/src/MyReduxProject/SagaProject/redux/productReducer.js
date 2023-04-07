const initialData = [];

export const productData = (data = initialData, action) => {
  switch (action.type) {
    case "SET_PRODUCT_LIST":
      return [...action.data];

    default:
      return data;
  }
};
