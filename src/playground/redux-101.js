import { createStore } from "redux";

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

const setCount = ({ count } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//Action - object that gets set to the store
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 3
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 2 }));
store.dispatch(setCount({ count: 22 }));
store.dispatch(resetCount());
