function Component(strings, ...dynamicValues){
    return (props) => {
        let newContent = strings.slice()
        dynamicValues.forEach((value, index) => {
            newContent[index] += props[value] || ''
        })
        return newContent.join('')
    }
}

export {
    Component
}