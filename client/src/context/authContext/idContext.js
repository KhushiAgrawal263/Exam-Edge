import authReducer from "./AuthReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  stud: {},
  isFetching: false,
  error: false,
};

export const studContext = createContext(INITIAL_STATE);

export const studContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studReducer, INITIAL_STATE);

  return (
    <StudContext.Provider
      value={{
        stud: state.stud,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </StudContext.Provider>
  );
};
