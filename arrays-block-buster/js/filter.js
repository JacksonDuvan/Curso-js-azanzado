import { renderMovieListFromMap } from './render.js'
import {
    moviesList,
    all,
    notPopular as leastValued,
    popular as mostValued
} from './normalize.js'

window.filter.addEventListener('change', function(){
    switch(this.value){
        case "most-valued":
            return renderMovieListFromMap(mostValued, moviesList)
        case 'least-valued':
            return renderMovieListFromMap(leastValued, moviesList)
        default: 
            return renderMovieListFromMap(all, moviesList)
    }
})