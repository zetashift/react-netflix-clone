import React from "react"
import { Container, Title, User, List, Item, Picture, Name } from "./styles/profiles"

function Profiles({ children, ...restOfProps }) {
    return <Container {...restOfProps}> {children} </Container>
}

Profiles.Title = function ProfilesTitle({ children, ...restOfProps }) {
    return <Title {...restOfProps}> {children} </Title>
}

Profiles.Name = function ProfilesName({ children, ...restOfProps }) {
    return <Name {...restOfProps}> {children} </Name>
}

Profiles.Picture = function ProfilesPicture({ src, ...restOfProps }) {
    return <Picture {...restOfProps} src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"} /> 
}


Profiles.List = function ProfilesList({ children, ...restOfProps }) {
    return <List {...restOfProps}> {children} </List>
}

// Every item will represent an User
Profiles.User = function ProfilesItem({ children, ...restOfProps }) {
    return <Item {...restOfProps}> {children} </Item> 
}
export default Profiles