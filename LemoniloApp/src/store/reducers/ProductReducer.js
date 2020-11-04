const initState = {
  loadingStatus: false,
  errorStatus: false,
  products: [],
  chosenProduct: {}
}

function productReducer(state = initState, action) {
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loadingStatus: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        errorStatus: action.payload
      }
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload
      }
    case "SET_PRODUCT":
      return {
        ...state,
        chosenProduct: action.payload
      }
    default:
      return state
  }
}

export default productReducer