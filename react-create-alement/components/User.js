import { Component, createElement } from '../lib/react/index.js'

class User extends Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.displayName = 'User'
    this.state = {
      age: this.props.age
    }
  }

  componentDidMount(){
    console.log(`El componente ${this.displayName} se renderizo >>>>`);
  }

  componentWillMount(){
    console.log(`El componente ${this.displayName} se va a renderizar >>`);
  }

  componentDidUpdate(){
    console.log(`Se actualizo ${this.displayName}>>`);
  }

  handleClick = (e) => {
    this.setState({
      age: this.state.age + 1
    })
  }

  render() {
    const { avatar, name } = this.props
    const { age } = this.state

    return createElement('div', {
      onClick: this.handleClick,
      class: 'user',
      children: [
        createElement('div', { 
          class: 'avatar',
          children: createElement('img', { src: avatar })
        }),
        createElement('h2', null, `Hola soy ${name} y tengo ${age}`)
      ]
    })
  }
}

export default User 