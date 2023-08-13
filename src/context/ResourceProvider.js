import React, {createContext, useReducer, useContext} from 'react';
import { initialState, reducer } from './resourceTemplate';
const ResourceContext = createContext()
export const useResourceContext =() => useContext(ResourceContext)
export const ResourceProvider = ({children}) => {
  const [resource, dispatch] = useReducer(reducer, initialState)
  return (
    <ResourceContext.Provider value={{resource, dispatch}}>
      {children}
    </ResourceContext.Provider>
  );
}

