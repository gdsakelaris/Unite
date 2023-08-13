//template for resource
export const initialState = {
  name: null,
  kindOfResource: null,
  email: null,
  address: null,
  description: null,
  location: null,
  phoneNumber: null,
  website: null,
  rating: null,
  publishedby: 'userId'
}

const types = {
  CREATE: 'CREATE',
  SUBMIT: 'SUBMIT'
}

export const resourceActions = {
  create: (resourceData) => ({type: types.CREATE, data: resourceData}),
  //submit (clear all the data in state)
  submit: () => ({type: types.SUBMIT})
}


export const reducer = (state, action) => {
  switch (action.type) {
    case types.CREATE:
      //assume that the key in new object passed in here will override the old value if there are two duplicate keys 
      return {...state, ...action.data}
    case types.SUBMIT:
      return {...initialState}
  }
  
}

