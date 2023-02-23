import { Component, createElement } from "../lib/react/index.js";
import User from "./User.js";
import Wrapper from "./Wrapper.js";
import UserStyled from './UserStyled.js'


class App extends Component { 
    render(){
        const propsUser = { avatar: './images/ash.jpg',  name: 'Ash', age: 10 }
        return createElement('div', {
            class: 'app',
            children: new Wrapper({
                children: [
                    new User(propsUser),
                    new UserStyled(propsUser)
                ]
            })
        })
    }
}

export default App