export function SET_LOADING(status) {
  return {
    type: "SET_LOADING",
    payload: status
  }
}

export function SET_ERROR(status) {
  return {
    type: "SET_ERROR",
    payload: status
  }
}

export function SET_PRODUCTS(data) {
  return {
      type: "SET_PRODUCTS",
      payload: data
  }; 
}

export function SET_PRODUCT(data) {
  return {
      type: "SET_PRODUCT",
      payload: data
  }; 
}


export function FETCH_PRODUCTS() {
  const dummyData = [
    {
      id: 1,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 2,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 3,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 4,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 5,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 6,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 7,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },{
      id: 8,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    },
    {
      id: 9,
      title: 'Dummy Product',
      price: 99999,
      image_url: 'https://img.pngio.com/sample-stamp-shows-example-symbol-or-stock-photo-colourbox-example-stamp-png-800_667.jpg'
    }
  ]
  return (dispatch, getState) => {
    dispatch(SET_PRODUCTS(dummyData))
    }
}

