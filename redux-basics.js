const redux = require("redux")
const createStore = redux.createStore()

const initialState = {
  counter: 0,
}

//REDUCER
//reducer take two args current state  and action
//it should return the updated state
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + 1,
    }
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value,
    }
  }
  return state
}

//Store
const store = createStore(rootReducer)
console.log(store.getState())

//Subscription
store.subscribe(() => {
  console.log(store.getState())
})

//Dispactching Action
//Action always need the type key
store.dispatch({ type: "INC_COUNTER" })
store.dispatch({ type: "ADD_COUNTER", value: 10 })
