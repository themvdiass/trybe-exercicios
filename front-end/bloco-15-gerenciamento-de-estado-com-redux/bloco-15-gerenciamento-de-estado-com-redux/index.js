const Redux = require('redux');


// Exemplo (Parte 1)
const ESTADO_INICIAL = {
  login: false,
  email: "",
};

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.legacy_createStore(reducer);

console.log(store.getState()); // { login: false, email: '' }

// Parte 2 (Alterando dados)
const fazerLogin = (email) => ({
  type: "LOGIN",
  email
});


store.dispatch(fazerLogin("alguem@email.com"));

console.log(store.getState());
