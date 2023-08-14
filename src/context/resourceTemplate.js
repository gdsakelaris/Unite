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
  publishedby: 'userId',
  //click lock icon => set isClose: true, not allow to set popupModal to set value popUpModal
  //showDropDown: check if isClose to false, it's false allow to set visible
  monday: {
    dayName: 'Monday',
    day: 1,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
  //  popUpModal: false
  },
  tuesday: {
    dayName: 'Tuesday',
    day: 2,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
   // popUpModal: false
  },
  wednesday: {
    dayName: 'Wednesday',
    day: 3,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
   // popUpModal: false
  },
  thursday: {
    dayName: 'Thursday',
    day: 4,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
   // popUpModal: false
  },
  friday: {
    dayName: 'Friday',
    day: 5,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
   // popUpModal: false
  },
  saturday: {
    dayName: 'Saturday',
    day: 6,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
   // popUpModal: false
  },
  sunday: {
    dayName: 'Sunday',
    day: 7,
    isClosed: false,
    openTime: '0:00',
    closeTime: '0:00',
    //popUpModal: false
  },
  popUpModal: false
}

const types = {
  CREATE: 'CREATE',
  SUBMIT: 'SUBMIT',
}

export const resourceActions = {
  //will be used to update all the info of resource
  create: (resourceData) => ({type: types.CREATE, data: resourceData}),
  //submit (clear all the data in state)
  submit: () => ({type: types.SUBMIT}),
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

