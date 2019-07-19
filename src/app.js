// grab the add function from the add.js file in the utils folder
// grab react from the npm modile
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();
store.dispatch(
  addExpense({ description: "Water Bill", amount: 1000, createdAt: 0 })
);

store.dispatch(
  addExpense({ description: "Gas Bill", amount: 2000, createdAt: 0 })
);

store.dispatch(setTextFilter("Water"));

setTimeout(() => {
  store.dispatch(setTextFilter("Rent"));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
