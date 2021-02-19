import * as actionType from "../actions/actionTypes"
import { updateObject } from "../Utitity"

const initialState = {
  results: [],
}

const deleteResult = (state, action) => {
  const updatedArray = state.results.filter((item) => item.id !== action.id)
  return updateObject(state, { results: updatedArray })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      })
    /*
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      }
      */
    case actionType.DELETE_RESULT:
      /*
      const id = 2
      const newArr = [...state.results] 
      newArr.splice(id, 1)
      */

      return deleteResult(state, action)
    /*
     const updatedArray = state.results.filter((item) => item.id !== action.id)
      return {
        ...state,
        results: updatedArray,
      }
      */
  }

  return state
}

export default reducer
