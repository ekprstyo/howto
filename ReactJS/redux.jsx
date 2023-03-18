{
  /*Create a Redux Store*/
}
const reducer = (state = 5) => {
  return state;
};

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
const store = Redux.createStore(reducer);

{
  /*Get State from the Redux Store*/
}
const store2 = Redux.createStore((state = 5) => state);

const currentState = store2.getState();

{
  /*Define a Redux Action*/
}
const action = {
  type: "LOGIN",
};

{
  /*Define an Action Creator*/
}
const action2 = {
  type: "LOGIN",
};
function actionCreator(action2) {
  return action2;
}

{
  /*Dispatch an Action Event*/
}
const store3 = Redux.createStore((state = { login: false }) => state);

const loginAction = () => {
  return {
    type: "LOGIN",
  };
};

store3.dispatch(loginAction());

{
  /*Handle an Action in the Store*/
}
const defaultState = {
  login: false,
};

const reducer2 = (state = defaultState, action) => {
  if (action.type === "LOGIN") {
    return {
      login: true,
    };
  } else {
    return state;
  }
};

const store4 = Redux.createStore(reducer2);

const loginAction2 = () => {
  return {
    type: "LOGIN",
  };
};

{
  /*Use a Switch Statement to Handle Multiple Actions*/
}
const defaultState2 = {
  authenticated: false,
};

const authReducer = (state = defaultState2, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        authenticated: true,
      };
    case "LOGOUT":
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const store5 = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: "LOGIN",
  };
};

const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

{
  /*Use const for Action Types*/
}
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const defaultState3 = {
  authenticated: false,
};

const authReducer2 = (state = defaultState3, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };

    default:
      return state;
  }
};

const store6 = Redux.createStore(authReducer);

const loginUser2 = () => {
  return {
    type: LOGIN,
  };
};

const logoutUser2 = () => {
  return {
    type: LOGOUT,
  };
};
