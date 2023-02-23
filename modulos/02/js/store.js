import reducer from "./reducers/index.js"
import { createStore } from "./redux/index.js"

const INITIAL_STATE = { cocacola: 1_360_563, calorias: 0 }

export const store = createStore(reducer, INITIAL_STATE)