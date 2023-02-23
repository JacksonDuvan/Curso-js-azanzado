import { BURN } from "./actions/index.js"
import { store } from './store.js'

store.subscribe(() => {                                                                                                           
  // console.log('ha cambiado algo en el store', store.getState())
  const { calorias, cocacola } = store.getState()
  window['total-calorias'].textContent = `Te faltan quemar ${cocacola.toFixed(2)} calorías`
  window.result.textContent = `Haz quemado ${calorias.toFixed(2)} calorías`
})

const burn = () => {
  store.dispatch({
    type: BURN,
    payload: 1.42,
  })
}

window.burn.addEventListener('click', burn)