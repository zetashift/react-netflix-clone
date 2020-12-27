import React from "react"
import { Container, Base, Input, Submit, 
         Error, Title, Text, SmallText, Link } from "./styles/form"

function Form({ children, ...restOfProps }) {
    return <Container {...restOfProps}> {children} </Container>
}

// This will hold all the elements of a Form together
Form.Base = function FormBase({ children, ...restOfProps }) {
    return <Base {...restOfProps}> {children} </Base>
}

Form.Input = function FormInput({ _, ...restOfProps }) {
    return <Input {...restOfProps}></Input>
}

Form.Submit = function FormSubmit({ children, ...restOfProps }) {
    return <Submit {...restOfProps}> {children} </Submit>
}

Form.Error = function FormError({ children, ...restOfProps }) {
    return <Error {...restOfProps}> {children} </Error>
}

Form.Title = function FormTitle({ children, ...restOfProps }) {
    return <Title {...restOfProps}> {children} </Title>
}

Form.Text = function FormText({ children, ...restOfProps }) {
    return <Text {...restOfProps}> {children} </Text>
}

Form.SmallText = function FormSmallText({ children, ...restOfProps }) {
    return <SmallText {...restOfProps}> {children} </SmallText>
}

Form.Link = function FormLink({ children, ...restOfProps }) {
    return <Link {...restOfProps}> {children} </Link>
}

export default Form