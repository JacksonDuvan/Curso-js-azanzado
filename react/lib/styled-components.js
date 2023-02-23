const tags = ['h1', 'h2', 'div', 'img', 'button', 'input']
let styled = {}

tags.forEach(tag => {
    const taggedTemplate = (styles, ...dynamicValues) => {
        let newStyles = styles.slice()
        return (props = {}) => {    
            styles.forEach((style, index) => {
                const styleDinamic = dynamicValues[index] ? dynamicValues[index] : ''
                const value = typeof styleDinamic === "function" ? styleDinamic(props) : styleDinamic
                newStyles += `${style} ${value}`
            })
            return (content = '') => {
                if(tag === 'img'){
                    return `<${tag} style='${newStyles}' src='${props.src}'/>`
                }
                return `
                    <${tag} style='${newStyles}'>
                        ${content}
                    </${tag}>
                `
            }
        }
    }

    styled = { ...styled, [tag]: taggedTemplate}
})

export default styled