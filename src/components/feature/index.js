import React from "react"
import { Container, Title, SubTitle } from "./styles/feature"

//The Feature component houses the opt-in area under the Header
function Feature({ children, ...restOfProps}) {
    return (
        <Container {...restOfProps}> {children} </Container>
    )
}

Feature.Title = function FeatureTitle({ children, ...restOfProps }) {
    return <Title {...restOfProps}> {children} </Title>
}

Feature.SubTitle = function FeatureSubTitle({ children, ...restOfProps }) {
    return <SubTitle {...restOfProps}> {children} </SubTitle>
}

export default Feature