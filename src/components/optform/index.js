import React from "react"
import  { Container, Input, Button, Text, Break} from "./styles/optform"

function OptForm({ children, ...restOfProps }) {
    return <Container {...restOfProps}> {children} </Container>
}

OptForm.Input = function OptFormInput({ ...restOfProps }) {
    return <Input {...restOfProps} />
}

OptForm.Button = function OptFormButton({ children, ...restOfProps }) {
    return (
        <Button {...restOfProps}>
            {children}  <img src="/images/icons/chevron-right.png" alt="Try now!" />
        </Button>
    )
}

// Implemented if anybody ever wanted to add some extra spacing
// For now I will chose not to use it.
OptForm.Break = function OptBreak({ ...restOfProps }) {
    return <Break {...restOfProps} />
}

OptForm.Text = function OptFormText({ children, ...restOfProps}) {
    return (
        <Text {...restOfProps}>
            {children}
        </Text>
    )
}

export default OptForm