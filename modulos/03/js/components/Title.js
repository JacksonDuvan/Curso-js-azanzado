import { Component as component } from "../react/index.js"
import styled from "../styles-components/index.js"

const TitleStyled = styled.h1`
    font-family: system-ui;
    color: ${props => props.color ? 'orange' : 'red'};
    font-size: ${props => props.size ? props.size : '30px'};
    text-shadow: 2px 2px 0 black;
    line-height: 100vh;
`

const propsTitleStyled = {
    color: false,
    size: '50px'
} 

const props = {
    message: 'No te rindas',
    name: 'Jackson'
}

const Title = component`<marquee> ${'message'} ----- ${'name'} </marquee>`(props)


export default TitleStyled(propsTitleStyled)(Title)
