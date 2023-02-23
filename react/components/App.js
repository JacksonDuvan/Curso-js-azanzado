import { Component } from "../lib/react.js";
import User from "./User.js";
import Wrapper from "./Wrapper.js";
import UserStyled from './UserStyled.js'

class App extends Component {
    render(){
        const propsUser = { avatar: './images/ash.jpg',  name: 'Ash' }
        return `
            <div class="app">
                ${new Wrapper({
                    children: `
                        ${new User(propsUser).render()}
                        ${new UserStyled(propsUser).render()}
                    `
                }).render()}
            </div>  
        `
    }
}

export default App