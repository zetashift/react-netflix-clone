import React, { useState, useContext, createContext } from "react"
import { Container, Inner, Frame, Item, Title, Header, Body } from "./styles/accordion"

const ToggleContext = createContext()

function Accordion({ children, ...restOfProps }) {
    return (
        <Container {...restOfProps}>
            <Inner> {children} </Inner>
        </Container>
    )
}

// Allow us for some spacing inbetween elements
Accordion.Frame = function AccordionFrame({ children, ...restOfProps }) {
    return <Frame {...restOfProps}> {children} </Frame>
}

// We make an Item component to make it easier to style and re-use invidual elements
Accordion.Item = function AccordionItem({ children, ...restOfProps }) {
    const [toggleShow, setToggleShow] = useState(false)
    
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restOfProps}> {children} </Item>
        </ToggleContext.Provider>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restOfProps }) {
    return <Title {...restOfProps}> {children} </Title>
}

Accordion.Header = function AccordionHeader({ children, ...restOfProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext)
    
    return (
        <Header onClick={() => setToggleShow(!toggleShow)} {...restOfProps}> 
            {children} 
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close header" />
            ) : (
                <img src="/images/icons/add.png" alt="Open header" />
            )}
        </Header>
    )
}

Accordion.Body = function AccordionBody({ children, ...restOfProps }) {
    const { toggleShow } = useContext(ToggleContext)
    
    return toggleShow ? <Body {...restOfProps}> {children} </Body> : <></>
}

export default Accordion