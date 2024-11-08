import React, { createContext, useReducer, useContext } from "react";

interface UserState {
  token: string | null;
  email: string | null;
  username: string | null;
}

type UserAction =
  | {
      type: "LOGIN_SUCCESS";
      payload: {
        token: string;
        email: string;
        username: string;
      };
    }
  | { type: "LOGOUT" };

const initialState: UserState = {
  token: null,
  email: null,
  username: null,
};

const userReducer = (state: UserState, action: UserAction): UserState => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload.token,
        email: action.payload.email,
        username: action.payload.username,
      };
    case "LOGOUT":
      localStorage.removeItem("token");
      return initialState;
    default:
      return state;
  }
};

const UserContext = createContext<{
  state: UserState;
  dispatch: React.Dispatch<UserAction>;
}>({ state: initialState, dispatch: () => null });

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedUser = localStorage.getItem("userToken");
  const initialStateWithStorage = storedUser
    ? JSON.parse(storedUser)
    : initialState;

  const [state, dispatch] = useReducer(userReducer, initialStateWithStorage);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
