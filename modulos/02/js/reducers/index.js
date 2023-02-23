import { BURN } from "../actions/index.js"

const reducer = (state, action) => {
    switch (action.type) {
      case BURN:
        return {
            ...state,
            calorias: state.calorias + action.payload,
            cocacola: state.cocacola - (state.calorias + action.payload)
          }
      default:
        return state
    }
}

export default reducer